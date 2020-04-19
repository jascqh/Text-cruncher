import {Line} from 'vue-chartjs'
import database from './firebase.js'

export default{
    extends:Line,
    data: () => ({
        
        items:[],
        datacollection: {
            labels:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],
        datasets: []  
        }     
        ,
        options: {
            title:{
                display:true,
                text:'Number of users per month',
                fontColor:'Black',
                fontSize:15
            },
            legend:{
                position:'bottom'
            },
            scales:{
                yAxes:[{
                    ticks:{
                        min:0
                    }

                }],
                
            },
            maintainAspectRatio: false
          
        }
      }),
      methods: {
          fetchItems: function () {
              database.collection('users').get().then(querySnapShot => {
                  querySnapShot.forEach(doc => { 
                     this.items.push(doc.data()) /* each doc will be stored in items */
  
                  })
                  var data = {}
                  for (var i=0; i < this.items.length; i ++){
                      var month = this.items[i].datecreated.toDate().getMonth() // month will be stored as a number
                      
                      if (!(month in data)){
                        data[month] = 1 // initiate counter as 1
                      } else {
                          data[month] ++ // add to the counter
                      }
                  }
                  data = this.sortDict(data)
                  var values = []
                  var first = Object.keys(data)[0] // get the first month
                  for (var count= 1; count < first; count++){
                    values.push(0)
                  }
                  for (var key in data){
                      //this.datacollection.labels.push(key) // key is the mont
                    values.push(data[key])
                  }
                  this.datacollection.datasets.push({data:values, label:"2020", borderColor:"#29AB87", fill:false})
                  this.renderChart(this.datacollection, this.options)
              })
          },
          sortDict: function(dict) { 
            var keys = Object.keys(dict); // or loop over the object to get the array
            // keys will be in any order
            keys.sort(); // maybe use custom sort, to change direction use .reverse()
            // keys now will be in wanted order
            var new_dict = {}
            for (var i=0; i<keys.length; i++) { // now lets iterate in sort order
                var key = keys[i];
                var value = dict[key];
                /* do something with key & value here */
                new_dict[key] = value
            } 
            return new_dict
          }
      }, 
      created () {
          this.fetchItems()
      },
      mounted () {
      this.renderChart(this.datacollection, this.options)
      }
  }