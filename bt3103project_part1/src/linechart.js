import {Line} from 'vue-chartjs'
export default{
    extends:Line,
    data: () => ({
        chartdata: {
          labels: ['January', 'February','March', 'April'],
          datasets: [
            {
              label: 'Searches',
              data: [40, 81, 147, 68],
              backgroundColor:['aqua','lightgreen','red','orange'],
              borderWidth:0.5,
              borderColor:"#000",
              fill:false
            },
            
          ]
          
        },
        options: {
            title:{
                display:true,
                text:'Users Per Month For Year 2020',
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

                }]
            }
          
        }
      }),
    mounted(){
        this.renderChart(this.chartdata,this.options)
    }
}
