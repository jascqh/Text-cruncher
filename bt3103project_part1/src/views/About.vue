<template>
  <div class="about">
    <h3 class = "dash">Some Insights...</h3>  
    
    <div id = "chart">
      <barchart></barchart>
    </div>
    <div id = "chart">
      <doughnut></doughnut>
    </div>

    <div id = "chart2">
      <linechart></linechart>
    </div>
    <div id = "chart2">
      <runtime></runtime>
    </div>
    <div id="chart3">
      <userchart/>
    </div>
    <div id = "insights">
      <VueFaqAccordion class = "FAQ" :items="myItems"/>
    </div>
  </div>
</template>

<script>
import VueFaqAccordion from 'vue-faq-accordion'
import barchart from '../barchart.js'
import linechart from '../linechart.js'
import doughnut from '../doughnut.js'
import runtime from '../runtime.js'
import userchart from '../userchart.js'

export default {
  components:{
    barchart, linechart, doughnut, runtime, VueFaqAccordion, userchart
  },
  data() {
    return {
      myItems : [
        {
          title: "What is Text Cruncher?",
          value: "Text Cruncher is a solution provider for students, professors and researchers or anybody in general who are spending hours doing research for their projects. "
              + "We access the searched content from Google search results and help our users scrape all the data to "
              + "produce a compiled excel sheet of the relevant summarized information that can either be downloaded instantly"
              + "through the website or sent via email to the user."
        },
        {
          title: "How much does it cost to use Text Cruncher?",
          value: "It is entirely free of charge to use Text Cruncher."
        },
        {
          title:"How many queries can I search at one go?",
          value:  "Up to five queries, with each being separated by a comma.\n"
              +"Example with 3 queries:  “Dog,Cat,Tails” \n"
              + "Example with 4 queries: “Dog Food, Canned Food, Animal Control, Cats and Dogs”\n"
        },
        {
          title:"Can I use Text Cruncher without an account?",
          value: "Yes. You can download the summarized excel sheet onto the device you are using or email it to a preferred email."
        },
        {
          title: "What features does the account have?",
          value: "Having an account allows the user to store their previous searches in the account history which allows them to refer back to their previous searches whenever they need to." 
        },
        {
          title:"There is no available file for download. What can I do?",
          value:"As Text Cruncher aims to optimise the research process by filtering searches that contained the all queries inputted. "
            +"If no recommended file shows up, it is likely that there are no trustworthy sites that contain all the queries. "
            +"Users can try searching again with fewer keywords/queries."
        },
        {
          title:"I am having trouble downloading. Who can I look for?",
          value:"            For all troubles/feedback with regards to Text Cruncher, please call the following hotline: +65 6235 35335."
            +"Our operating hours are 8am-6pm weekdays 10am-4pm weekends. Please note as Text Cruncher is a work in progress, " 
            +"we welcome your comments to help this platform grow further and appreciate your kind patience."
        }
      ]
    }
  },
}

</script>

<style scoped>
#main{
    content:"";
    display:table;
    clear:both;
}
#chart{
  height:300px;
  width:50%;
  padding:10px 30px;
  margin:130;
  float:left;
}
#chart2{
  height:300px;
  width:50%;
  padding:130px 30px;
  margin:auto;
  float:left;
}
#chart3{
  height:300px;
  width:100%;
  padding:250px 30px;
  margin:auto;
  float:left;
}
.dash{
  padding-top: 1cm;
  font-family: "Lucida Console", Courier, monospace;
}
.FAQ{
    right: 150px;
    padding: 1000 px;
}
/* Clear floats after the columns */
.row:after {
  content: "";
  display: table;
  clear: both;
}
#insights {
  padding: 1250px 30px;
}
</style>
