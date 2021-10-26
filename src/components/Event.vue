<template>
  <button v-on:mouseover="foralert()">click for Alert</button>
  <h1 v-on:mousemove="foralert1()">click for Alert</h1>
</template>

<script>
export default {
  name: "Event",
  methods: {
    foralert() {
      alert("Hi! alert");
    },
    foralert1() {
      console.warn("Hi! alert");
    },
  },
};
</script>