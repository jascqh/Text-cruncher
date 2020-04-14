<template>
  <div class="about">

    <h3 class = "dash">Some Insights...</h3> 
  
    <div id = "chart">
      <barchart></barchart>
    </div>
    <div id = "chart">
      <linechart></linechart>
    </div>
    <div id = "chart">
      <doughnut></doughnut>
    </div>
      <div class =  "FAQs">
      Frequently Asked Questions
      <div class = "FAQs-Items">
        <a>What is Text Cruncher?</a>
          <div class="content">
            <p>
              Text Cruncher is a solution provider for students, 
              professors and researchers or anybody in general who are spending hours doing research for their projects.
              We access the searched content from Google search results and help our users scrape all the data to 
              produce a compiled excel sheet of the relevant summarized information that can either be downloaded instantly 
              through the website or sent via email to the user.
           </p>
          </div>
      </div>

      <div class = "FAQs-Items">
        <a>How much does it cost to use Text Cruncher?</a>
          <div class="content">
            <p>It is entirely free of charge to use Text Cruncher.</p>
          </div>
      </div>

      <div class = "FAQs-Items">
        <a>How many queries can I search at one go?</a>
          <div class="content">
            <p>
              Up to five queries, with each being separated by a semi-colon. 
              Example with 3 queries:  “Dog;Cat;Tails”<br>
              Example with 4 queries: “Dog Food; Canned Food; Animal Control; Cats and Dogs”<br>
            </p>
          </div>
      </div>

      <div class = "FAQs-Items">
        <a>Can I use Text Cruncher without an account?</a>
          <div class="content">
            <p> Yes. You can download the summarized excel sheet onto the device you are using or email it to a preferred email.</p>
          </div>
      </div>

      <div class = "FAQs-Items">
        <a>What features does the account have?</a>
          <div class="content">
            <p>Having an account allows the user to store their previous searches in the account history which allows them to refer back to their previous searches whenever they need to.</p>
        </div>
      </div>

      <div class = "FAQs-Items">
        <a>I have forgotten my password</a>
          <div class="content">
            <p>Please click on the “Forgotten Password” on the login page. A reset link will be sent to your registered email.</p>
          </div>
      </div>

      <div class = "FAQs-Items">
        <a>There is no available file for download. What can I do?</a>
        <div class="content">
          <p>
            As Text Cruncher aims to optimise the research process by filtering searches that contained the all queries inputted. 
            If no recommended file shows up, it is likely that there are no trustworthy sites that contain all the queries. 
            Users can try searching again with fewer keywords/queries.
          </p>
        </div>  
      </div>

      <div class = "FAQs-Items">
        <a>I am having trouble downloading. Who can I look for?</a>
        <div class="content">
          <p>
            For all troubles/feedback with regards to Text Cruncher, please call the following hotline: +65 6235 35335.
            Our operating hours are 8am-6pm weekdays 10am-4pm weekends. Please note as Text Cruncher is a work in progress, 
            we welcome your comments to help this platform grow further and appreciate your kind patience.
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
#main{
    content:"";
    display:table;
    clear:both;
}
#chart{
  height:20%;
  width:30%;
  border-style: solid;
  border-color:rgb(155, 84, 84);
  border-width: 1px;
  padding:30px;
  display: inline-block;
  position: relative;
}

.dash{
  padding-top: 1cm;
  font-family: "Lucida Console", Courier, monospace;
}

.function{
  padding-top: 0cm;
  padding-bottom: 1cm;  
}

.column {
  width: 33.33%;
}

/* Clear floats after the columns */
.row:after {
  content: "";
  display: table;
  clear: both;
}

.FAQs a {
  position: relative;
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  -webkit-flex-direction: column;
  -ms-flex-direction: column;
  flex-direction: column;
  width: 100%;
  padding: 1rem 3rem 1rem 1rem;
  color: #7288a2;
  font-size: 1.15rem;
  font-weight: 400;
  border-bottom: 1px solid #e5e5e5;
}
.FAQs a:hover,
.FAQs a:hover::after {
  cursor: pointer;
  color: #ff5353;
}
.FAQs a:hover::after {
  border: 1px solid #ff5353;
}
.FAQs a.active {
  color: #ff5353;
  border-bottom: 1px solid #ff5353;
}
.FAQs a::after {
  font-family: 'Ionicons';
  content: '\f218';
  position: absolute;
  float: right;
  right: 1rem;
  font-size: 1rem;
  color: #7288a2;
  padding: 5px;
  width: 30px;
  height: 30px;
  -webkit-border-radius: 50%;
  -moz-border-radius: 50%;
  border-radius: 50%;
  border: 1px solid #7288a2;
  text-align: center;
}
.FAQs a.active::after {
  font-family: 'Ionicons';
  content: '\f209';
  color: #ff5353;
  border: 1px solid #ff5353;
}
.FAQs .content {
  opacity: 0;
  padding: 0 1rem;
  max-height: 0;
  border-bottom: 1px solid #e5e5e5;
  overflow: hidden;
  clear: both;
  -webkit-transition: all 0.2s ease 0.15s;
  -o-transition: all 0.2s ease 0.15s;
  transition: all 0.2s ease 0.15s;
}
.FAQs .content p {
  font-size: 1rem;
  font-weight: 300;
}
.FAQs .content.active {
  opacity: 1;
  padding: 1rem;
  max-height: 100%;
  -webkit-transition: all 0.35s ease 0.15s;
  -o-transition: all 0.35s ease 0.15s;
  transition: all 0.35s ease 0.15s;
}
</style>


<script>

// import SlideShow from "../components/slideShow.vue"
import barchart from '../barchart.js'
import linechart from '../linechart.js'
import doughnut from '../doughnut.js'
export default {
  components:{
    barchart,
    linechart,
    doughnut,
    // "slideShow": SlideShow
  },
  



  mounted() {
    let recaptchaScript = document.createElement('script')
    recaptchaScript.setAttribute('src', 'https://code.jquery.com/jquery-3.2.1.min.js')
    document.head.appendChild(recaptchaScript)
  }
  
}
</script>

