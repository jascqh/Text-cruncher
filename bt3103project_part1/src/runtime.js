import {Line} from 'vue-chartjs'
export default{
    extends:Line,
    data: () => ({
        chartdata: {
          labels: ['1', '2', '3', '4', '5'],
          datasets: [
            {
              label: 'Number of Queries',
              data: [50, 120, 140, 150, 155],
              backgroundColor:['#4CBB17','#00A86B','#9DC183','#708238'],
              borderWidth:0.5,
              borderColor:"#000",
              fill:false
            },
            
          ]
          
        },
        options: {
            title:{
                display:true,
                text:'Average Runtime (seconds)',
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
            },
            maintainAspectRatio: false
          
        }
      }),
    mounted(){
        this.renderChart(this.chartdata,this.options)
    }
}
