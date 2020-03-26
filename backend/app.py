import sys
import pandas as pd
import requests
import os
import re
import time
import xlsxwriter
from bs4 import BeautifulSoup
from gensim.summarization import summarize
from selenium import webdriver
from selenium.webdriver.chrome.options import Options
from datetime import datetime
from flask_mail import Mail, Message
from flask import Flask, render_template, request, send_file, jsonify
from flask_cors import CORS
from firebase import firebase
from firebase_admin import auth


""" --------------------Main Script-------------------------- """

def prGreen(skk): print("\033[92m {}\033[00m" .format(skk))
def prCyan(skk): print("\033[96m {}\033[00m" .format(skk))

"""Global Variables"""
non_bmp_map = dict.fromkeys(range(0x10000, sys.maxunicode + 1), 0xfffd)
final_output = []
final_header = ['Serial No',"Search Query","URL Link","Title of Article","Text Summary"]
abstract_Txt = ""

google_chrome_bin = os.environ.get('GOOGLE_CHROME_BIN')
chromedriver_path = os.environ.get('CHROMEDRIVER_PATH')
"""Set up Selenium driver"""
chrome_options = Options()
chrome_options.binary_location = google_chrome_bin
chrome_options.add_argument("--headless")
chrome_options.add_argument("--start-maximized")
chrome_options.add_argument("-incognito")
chrome_options.add_argument("--disable-popup-blocking")
chrome_options.add_argument('--disable-gpu')
chrome_options.add_argument('--no-sandbox')
# sel_driver = webdriver.Chrome(executable_path=chromedriver_path,chrome_options=chrome_options)
sel_driver = webdriver.Chrome(executable_path='./static/ChromeDriverWin32/chromedriver.exe',chrome_options=chrome_options) #Local host Test

def scrape(lst_query, fileName):

    for query in lst_query:
        """Scrape scheduled link from Selenium"""
        url = "https://www.google.com/search?q=" + query
        sel_driver.implicitly_wait(1) #reduce error
        main_url = r"https://www.google.com.sg/"
        sel_driver.get(main_url)
        """Simulates manual log in"""
        username = sel_driver.find_element_by_class_name("gLFyf")
        username.click()
        username.send_keys(query)
        username.submit()
        listOfLinks = [] #resets at the start of each query

        webresults = BeautifulSoup(sel_driver.page_source, "html.parser")
        for info in (webresults.find_all("div", {"class", "g"})):
            links = info.find("a").get('href')
            if "https" not in links:
                continue
            if links in listOfLinks:
                continue
            else:
                listOfLinks.append(links)
        #Serialise Output according to number of links in each query
        final_counter = len(listOfLinks)
        #resets for each query
        counter = 1

        for url in listOfLinks:
            print(url)
            if counter <= final_counter:
                # Pandas- List of Appending
                sub_output = []
                sub_output.append(counter)
                sub_output.append(query)
                sub_output.append(url)
            """attempts to get URL content"""
            try:
                txt_summary = get_content(url) #gets content from URL
                if txt_summary[1] != "":
                    sub_output.append(txt_summary[0]) #Title
                    sub_output.append(txt_summary[1]) #Main content
                    final_output.append(sub_output)
                    counter += 1
            except:
                continue
        prCyan("sleeping")
        time.sleep(2)  # sleep so that it will simulate actual human activity
        prCyan("Resuming")

    # Output to Excel File
    df_results = pd.DataFrame(final_output, columns=final_header)
    writer = pd.ExcelWriter('./static/user_pulls/Output_'+fileName+'.xlsx', engine='xlsxwriter')
    df_results.to_excel(writer, sheet_name='Results', header=final_header, index=False)

    # modifyng output by style - wrap
    workbook = writer.book
    worksheet = writer.sheets['Results']

    format = workbook.add_format()
    format.set_align('top')
    format.set_text_wrap()
    format.set_border()
    # Setting the format
    worksheet.set_column('A:A', 10, format)
    worksheet.set_column('B:B', 20, format)
    worksheet.set_column('C:C', 40, format)
    worksheet.set_column('D:D', 20, format)
    worksheet.set_column('E:E', 70, format)
    worksheet.set_column('E:E', 70, format)
    # Clear df
    df_results = None
    writer.save()
    writer.close()
    sel_driver.quit() #closes all instances of sel_driver

    excel_data_df = pd.read_excel('./static/user_pulls/Output_'+fileName+'.xlsx', sheet_name='Results')
    json_str = excel_data_df.to_json()
  
    return json_str

def pullContent(soup):
    print("Pulling")
    results = ""
    links = soup.select("p")
    if (len(links) == 0):
        for br_tag in soup.find_all('br'):
            text = br_tag.previous_sibling
            if (text != None):
                links.append(text)
            text = br_tag.next_sibling
            if (text != None):
                links.append(text)

    for link in links:
        try:
            temp = link.text.strip()
        except (UnicodeDecodeError):
            temp = link.translate(non_bmp_map).strip()
        except (TypeError):
            continue
        except:
            temp = str(link).strip()
        results = results + " " + temp
    return results.strip()

# Main content Generator with BS4 and Selenium if BS4 fails to scrape
def get_content(url):
    prCyan('BS4 Pull Request...')
    headers = requests.utils.default_headers()
    headers.update({
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/74.0.3729.169 Safari/537.36',
    })
    page = ''
    while page == '':
        try:
            page = requests.get(url)
            break
        except:
            print("Connection refused by the server..")
            print("Let me sleep for 5 seconds")
            print("ZZzzzz...")
            time.sleep(5)
            print("Was a nice sleep, now let me continue...")
            continue
    raw_html = page.content
    soup = BeautifulSoup(raw_html, 'html.parser')
    results = pullContent(soup)
    prGreen('BS4 Original Content:')
    print(results)
    headers = soup.select("h1")
    header = ""
    if len(headers) != 0:
        header = headers[0].text
    if (("Forbidden" in header) or (header == "") or ("Access Denied" in header) or ("400 Bad Request" in header) or ("Error" in header)):
        header = "Title Could not be Retrieved due to Webpage Restrictions"
    prCyan('Title:')
    print(header)
    final_text_summary = []

    # Check if content can be pulled with BS4
    """word count minimum"""
    validThreshold = 300
    if len(results.split(" ")) < validThreshold:
        # Selenium Pull
        sel_driver.implicitly_wait(1)  # reduce error
        sel_driver.get(url)
        soup = BeautifulSoup(sel_driver.page_source, "html.parser")
        results = pullContent(soup)
        prCyan('Selenium Original Content:')
        print(results)

    """Output with summariser"""
    # apply final regex clean up before summarising
    results = re.sub(r"\{(.*?)\}+", '', results) #removes anything enclosing {}
    results = re.sub(r"(#[A-Za-z]+)",'', results) #removes hashtags
    results = re.sub(r"(^.+@[^\.].*\.[a-z]{2,}$)",'', results)  #removes email
    prCyan('After Regex...')
    print(results)
    final_results = summarize(results)
    prCyan('With text summary:')
    print(final_results)
    final_text_summary.append(header)
    final_text_summary.append(final_results)

    return final_text_summary


"""-------------------------------FLASK APPLICATION------------------------------------""" 
##localhost5000
# configuration
DEBUG = True

# instantiate the app
app = Flask(__name__)
app.config.from_object(__name__)

# enable CORS
CORS(app, resources={r'/*': {'origins': '*'}})

email_pw = os.environ.get('EMAIL_PW') #fetch from environment credentials

"""Flask Mail Configuration"""
app.config['TESTING'] = False
app.config['MAIL_SERVER'] = 'smtp.gmail.com'
app.config['MAIL_PORT'] = 465
app.config['MAIL_USE_TLS'] = False
app.config['MAIL_USE_SSL'] = True
app.config['MAIL_DEBUG'] = False #same as Debug mode
app.config['MAIL_USERNAME'] = 'textcruncher@gmail.com'
app.config['MAIL_PASSWORD'] = email_pw
app.config['MAIL_DEFAULT_SENDER'] = None
app.config['MAIL_MAX_EMAILS'] = None
app.config['MAIL_SUPPRESS_SEND'] = False #same as TESTING
app.config['MAIL_ASCII_ATTACHMENTS'] = False #keyboard characters
app.config['SEND_FILE_MAX_AGE_DEFAULT'] = 0

"""Flask Mail Sending"""
mail= Mail(app)

# Routing

@app.route('/send-mail/', methods=['POST'])
def send_mail():
    receiver = []
    emailadd = request.form['email_address']
    receiver = emailadd.split(',')
    # receiver.append(emailadd.split(','))
    text = request.form['msg_txt']  # receives from html form as String
    filename = request.form['fileName']
    with app.open_resource('./static/user_pulls/Output_'+filename+'.xlsx') as fp:
        msg = Message('Below is an Attached File of your Query Results', sender='textcruncher@gmail.com', recipients=receiver)
        msg.attach('Output_'+filename+'.xlsx', 'file/xlsx', fp.read())
        msg.body = text
        mail.send(msg)
    # return render_template('downloads.html', filename=filename)

# @app.route('/')
# def home():
#     # return render_template('index.html')

@app.route('/scrape', methods=['GET', 'POST'])
def scrape_now():
    #OBtains data from html form and pass it through python to another html page
    # queries = request.form['queries'] #receives from html form as String
    # return render_template('downloads.html', filename=current_timestamp)

    result = {'status': 'success'}
    if request.method == 'POST':
        post_data = request.get_json()
        queries = post_data.get('queries')    
        lst_queries = queries.split(',') #split by ','
        current_timestamp = datetime.now().strftime('%m%d%Y%H%M%S')
        result = scrape(lst_queries, current_timestamp)

    else:
        result['books'] = 'fail again'
    return jsonify(result)


@app.route('/return-file/<filename>')
def return_file(filename):
    return send_file('./static/user_pulls/Output_'+filename+'.xlsx', attachment_filename='Output.xlsx', cache_timeout=0)



if __name__ == '__main__':
    app.run()