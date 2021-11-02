<template>
<img alt="Vue logo" src="./assets/logo.png">
<!-- <div>
    <span>{{$store.state.counter}}</span>
</div>!-->
<div>
    <span>{{$store.state.counter}}</span>
</div>
<div>
    <button v-on:click="$store.commit('increaseCounter')"> + </button>
    <button v-on:click="$store.commit('decreaseCounter')"> - </button>
</div>
<!-- <div>
    <button v-on:click="increaseCounter()"> + </button>
    <button v-on:click="decreaseCounter()"> - </button>
</div>   !-->
</template>

<script>
// import Abs from './components/HelloWorld.vue'
// import CustomComponent from './components/CustomComponent.vue'
// import Event from './components/Event.vue'
// import Form from './components/Form.vue'
export default {
    name: 'App',
    components: {
        // Abs,
        // CustomComponent,
        // Event,
        // Form
    },
    // data(){
    //   return{
    //     counter : 0
    //   }
    // },
    // methods:{
    //   increaseCounter(){
    //    if(this.counter >= 10){
    //       alert("can not decrease a vlue less than 0")
    //     }else{
    //       this.counter--
    //     }

    //   },
    //   decreaseCounter(){
    //     if(this.counter === 0){
    //       alert("can not decrease a vlue less than 0")
    //     }else{
    //       this.counter--
    //     }

    //   },
      
    // }
}
</script>

<style>
#app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
}
</style>
