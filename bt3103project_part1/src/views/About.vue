<template>
  <div class="about">
    <h1>Dashboard</h1> 
  
    <div id = "chart">
      <barchart></barchart>
    </div>
    <div id = "chart">
      <linechart></linechart>
    </div>
    <div id = "chart">
      <doughnut></doughnut>
    </div>
    FAQs
    
    What is Text Cruncher?
    Text Cruncher is a solution provider for students, professors and researchers or anybody in general who are spending hours doing research for their projects. We access the searched content from Google search results and help our users scrape all the data to produce a compiled excel sheet of the relevant summarized information that can either be downloaded instantly through the website or sent via email to the user.

    How much does it cost to use Text Cruncher?
    It is entirely free of charge to use Text Cruncher.

    How many queries can I search at one go?
    Up to five queries, with each being separated by a semi-colon. 

    Example with 3 queries:  “Dog;Cat;Tails”
    Example with 4 queries: “Dog Food; Canned Food; Animal Control; Cats and Dogs”

    Can I use Text Cruncher without an account?
    Yes. You can download the summarized excel sheet onto the device you are using or email it to a preferred email.

    How do I sign up for an account?
    You can either sign in with a Google account or sign up for an account when you access the ‘Login’ page. 

    What features does the account have?
    Having an account allows the user to store their previous searches in the account history which allows them to refer back to their previous searches whenever they need to. 

    I have forgotten my password
    Please click on the “Forgotten Password” on the login page. A reset link will be sent to your registered email. 


    There is no available file for download. What can I do?
    As Text Cruncher aims to optimise the research process by filtering searches that contained the all queries inputted. If no recommended file shows up, it is likely that there are no trustworthy sites that contain all the queries. Users can try searching again with fewer keywords/queries.

    I am having trouble downloading. Who can I look for?
    For all troubles/feedback with regards to Text Cruncher, please call the following hotline: 
    +65 6235 35335. 

    Our operating hours are 8am-6pm weekdays 10am-4pm weekends. Please note as Text Cruncher is a work in progress, we welcome your comments to help this platform grow further and appreciate your kind patience.

  </div>
</template>

<script>
import barchart from '../barchart.js'
import linechart from '../linechart.js'
import doughnut from '../doughnut.js'

export default {
  components:{
    barchart, linechart, doughnut
  }
}
</script>>

<style scoped>
#main{
    content:"";
    display:table;
    clear:both;
}
#chart{
  height:300px;
  width:300px;
  border-style: solid;
  border-color:rgb(155, 84, 84);
  border-width: 1px;
  padding:30px;
  float:left;
}
</style>>
