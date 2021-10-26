<template>
  <img alt="Vue logo" src="./assets/logo.png">
  <Abs message="All changes had been saved"/>
  <CustomComponent message="All changes had been saved"/>
  <Event/>
</template>

<script>
import Abs from './components/HelloWorld.vue'
import CustomComponent from './components/CustomComponent.vue'
import Event from './components/Event.vue'

export default {
  name: 'App',
  components: {
    Abs,
    CustomComponent,
    Event
  }
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
