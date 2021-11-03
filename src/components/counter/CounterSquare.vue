<template>
<div :style="{color: $store.state.colorCode}">
    {{$store.state.counter}}<sup>2</sup> =
    <span >Rs: {{$store.getters.counterSquared}} </span>
</div>
</template>
<script> 
 export default {
     name : 'CounterSquare'
 }
</script>