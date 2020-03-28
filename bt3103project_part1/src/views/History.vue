<template>
  <div>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
    <b-card class="card">
    <h1>Search history</h1>
      <ul>
        <li v-for="(item , index) in itemsList" v-bind:key="item.id" v-on="increaseCount()">
          <div>
            {{item.Name}}
             <button class="btn" v-show="!isEven()" name="delete" v-bind:id="item.id" v-on:click="deleteItem(index,item)"><i class="fa fa-trash"></i></button>
            <button class="btn" v-show="isEven()" name="delete" v-bind:id="item.id" v-on:click="deleteItem(index,item)"><i class="fa fa-trash"></i></button>
        
            </div>
             <download-csv class="download" name="query.csv"
              :data   = convertData(item.Json)>
                <i class="fa fa-download" aria-hidden="true"></i>
          </download-csv>
            
           
        </li>
    </ul>
    </b-card>
</div>
</template>

<script>
import database from '../firebase.js'

export default {
  data(){
    return{
        itemsList: [],
        email: "",
        count:0
        }
  },
  methods:{
    fetchItems:function(){
      this.email = this.$session.get('email')      
      let item={}
      //Get all the items from DB
      database.collection('files').get().then((querySnapShot)=>{
        //Loop through each item
        querySnapShot.forEach(doc=>{
          if (this.email== doc.data().Email){
            item=doc.data()
            item.id=doc.id
            this.itemsList.push(item)
            item = {}
          }
        })
      })
      
    },
    deleteItem:function(index,item){
      //Deleting from DB
      database.collection('files').doc(item.id).delete()
      //Deleting from the itemsList Array
      this.itemsList.splice(index,1)
      //Msg to be displayed. Can be made as an alert
      console.log("Item Deleted Successfully")

    },
    convertData:function(json_str){
      var json = JSON.parse(json_str)
      var datas = []
      for (let i = 0; i < Object.keys(Object.values(json)[0]).length; i++) { 
        var data = {}
        for (var key in json) { 
          data[key] = json[key][i]
        }
        
      }
      console.log(datas)
      return datas

    },
    increaseCount:function(){
      this.count++;
    },
    isEven:function(){
      if (this.count%2==0){
        return true
      }
    }
    
  },
  //Lifecycle hook
  created(){
      this.fetchItems()
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1{
  text-align: left;
  font-size: x-large;
  padding: 10px 35px;
  
}

ul{
    display: flex;
    flex-wrap: wrap;
    list-style-type: none;
    padding: 0;
}
li{
    width:100%;
    text-align: left;
    padding: 10px;
    margin:0px 30px;
    background-color:#eaece5;
}
li:nth-of-type(even) { 
      width:100%;
    text-align: left;
    padding: 10px;
    margin:0px 30px;
    background-color:#b2c2bf;
}
.btn {
  background-color: #eaece5;
  border: none; /* Remove borders */
  color: #3b3a30; /* White text */
  padding: 12px 16px; /* Some padding */
  font-size: 16px; /* Set a font size */
  cursor: pointer; /* Mouse pointer on hover */
  float: right;
  margin:0px 0px 0px 30px
}

/* Darker background on mouse-over */
.btn:hover {
  background-color: #3b3a30;
  color:#eaece5
}
.btn:nth-of-type(even){
  background-color: #b2c2bf;
  border: none; /* Remove borders */
  color: #3b3a30; /* White text */
  padding: 12px 16px; /* Some padding */
  font-size: 16px; /* Set a font size */
  cursor: pointer;
  align-self: right;
}

.download{
  float:right;
}
.card{
  margin:30px
}

</style>