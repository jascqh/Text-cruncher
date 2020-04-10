# Text-cruncher 
BT3103 project

## Requirements
- Save and Fetch data from Firestore database
- Must be developed in Vue.js
- Must be deployed in firebase / firestore
- Must have a github repository with the history of the work done.
- Include a dashboard to display project analytics.

## Application summary
Our application is a TextSummarizer and Web scraping  for research webpage called TextCrucher. It accesses the content from Google search results and helps the user scrape all the data to produce a compiled excel sheet of the relevant summarized information that will be sent to the user’s email or via instant download through our website.


## How to use it (with account)
Users can either log in via their google account or sign up using their email for a account. The search process would be as per using it without account. The main difference is that user's previous searches would be store in a history that can be easily referenced. This facilitates and allow user to track their previous records.

## Installation
clone the project from github 
```
cd "file location" from command prompt / terminal 
npm install 
npm run serve
```
To run the code for backend,
```
pip install virtualenv
```
Replace ```C:\Path\To\Python\python.exe``` with the location of your python.exe
```
cd my-project
virtualenv --python C:\Path\To\Python\python.exe venv
```
Activate the environment 
```
.\venv\Scripts\activate
```
add libraries
```
pip install -r requirements.txt
```
Run app.py 
```
python app.py
```

## Tech stack 
virtual environment inside the "backend" directory is created based on Python36
use: .\venv\Scripts\activate to activate enviroment, will be on localhost5000
- VueJS
- Firestore / firebase
- Bootstrap
- Flask

Left to do:
1. Scrape Results to firebase
2. rendering download page
3. retriving file from firebase 
4. Using Firebase to email (alternative use flask_mail which is already implemented)
