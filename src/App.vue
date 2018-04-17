<template>
  <div id="app">
    <div class="container" >
      <div class="row">
        <div class="col-2" >
          <WidgetAdd></WidgetAdd>
          <WidgetList></WidgetList>  
        </div>
        <div class="col-10">
          <div class="container--widget">
            <img src= "https://i.pinimg.com/564x/99/0c/3f/990c3f76670850c8b7d024257c0eebe3.jpg"/>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>

import WidgetAdd  from './components/WidgetAdd';
import WidgetList from './components/WidgetList';
//import HotsPotList from './components/HotsPotList';
import './assets/style.css'

export default {
  name: 'App',
  components: {
    WidgetAdd,
    WidgetList,
    //HotsPotList,
  },
  data(){
    return {
      
    }
  },
  methods:{
    
  }
}
</script>
<style scoped>
  #app{
    margin:20px;
  }
  .container--widget {
    text-align:center;
  }
  html,body{
    margin:0;
    padding:0;
    margin:0;
  }
</style>
