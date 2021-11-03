<template>
<div>
    <input type="text" placeholder="Type something" v-model="colorCode" />
</div>
</template>


<script>
export default {
    name : "CounterColorInput",
      computed: {
        colorCode:{
            get() {
                   return this.$store.state.colorCode
            },
            set(NewValue) {
                    this.$store.dispatch('setColorCode', NewValue)
            }
        }
    }
}

</script>