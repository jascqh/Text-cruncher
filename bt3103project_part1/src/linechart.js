import {Line} from 'vue-chartjs'
import database from './firebase.js'

export default{
    extends:Line,
    data: () => ({
        months : {1:"Jan", 2:"Feb", 3:"Mar", 4:"Apr", 5:"May", 6:"Jun", 7:"Jul", 8:"Aug", 9:"Sep", 10:"Oct", 11:"Nov", 12:"Dec"},
        items:[],
        datacollection: {
            labels:[],
        datasets: []  
        }     
        ,
        options: {
            title:{
                display:true,
                text:'Number of searches per month',
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
              database.collection('files').get().then(querySnapShot => {
                  querySnapShot.forEach(doc => { 
                     this.items.push(doc.data()) /* each doc will be stored in items */
  
                  })
                  var data = {}
                  for (var i=0; i < this.items.length; i ++){
                      var month = this.months[this.items[i].Date.toDate().getMonth()]
                      if (!(month in data)){
                        data[month] = 1 // initiate counter as 1
                      } else {
                          data[month] ++ // add to the counter
                      }
                  }

                  var values = []
                  for (var key in data){
                      this.datacollection.labels.push(key) // key is the month
                      values.push(data[key])
                  }
                  this.datacollection.datasets.push({data:values, label:"2020", borderColor:"#29AB87", fill:false})
                  this.renderChart(this.datacollection, this.options)
              })
          }
      },
      created () {
          this.fetchItems()
      },
      mounted () {
      this.renderChart(this.datacollection, this.options)
      }
  }