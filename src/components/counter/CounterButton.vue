<template>
<div>
    <button v-on:click="$store.dispatch('increaseCounter')"> + </button>
    <button v-on:click="$store.dispatch('decreaseCounter')"> - </button>
</div>
</template>


<script>
export default {
    name : 'CounterButton'
}

</script>