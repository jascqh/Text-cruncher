<template>
  <div>
  <b-card class="text-center">
    <h1>Search history</h1>
    <div class="bg-secondary text-light">
      <ul>
        <li v-for="(item , index) in itemsList" v-bind:key="item.id" >
            {{item.id}}
            <button name="delete" v-bind:id="item.id" v-on:click="deleteItem(index,item)">Delete</button>
        </li>
    </ul>
    </div>
  </b-card>
</div>
</template>

<script>
import database from '../firebase.js'
export default {
  data(){
    return{
        itemsList: []
        }
  },
  methods:{
    fetchItems:function(){
      let item={}
      //Get all the items from DB
      database.collection('files').get().then((querySnapShot)=>{
        //Loop through each item
        querySnapShot.forEach(doc=>{
            item=doc.data()
            item.id=doc.id
            this.itemsList.push(item)
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

    jsonToExcel:function(){

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
header{
    background:rgb(122, 63, 100);
    padding:10px;
    border-style: solid;
    border-color:black;
    border-width: 2px;
}
h2{
  text-align: center
}
#itemsList{
    width: 100%;
    max-width: 1200px;
    margin: 30px auto;
    padding: 0 5px;
    box-sizing: border-box;
}
ul{
    display: flex;
    flex-wrap: wrap;
    list-style-type: none;
    padding: 0;
}
li{
    flex-grow: 1;
    flex-basis: 300px;
    text-align: center;
    padding: 10px;
    border: 1px solid #222;
    margin: 10px;
}
</style>