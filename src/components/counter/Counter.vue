<template>
<div :style="{color: $store.state.colorCode}">
    <span>{{$store.state.counter}}</span>
</div>

</template>

<script> 
export default {
    name : "Counter"
}

</script>