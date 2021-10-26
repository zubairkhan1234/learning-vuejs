<template>
<div>
    <h3></h3>
  <h2>{{ message }}</h2>
  <h2>{{ email  }}</h2>
  <h2>{{ password  }}</h2>
  <h2>mobile {{mobile() }}</h2>
  <h2>Full Name {{getmame("Muhammad zubair s/o Muhammad saleem") }}</h2>
</div>
</template>
<script>


export default {
  name: "CustomComponent",
  props: {
    message: String,
  },
  data(){
      return{
          email: 'zubair@gmail.com',
          password: 12121,
          mobile:function(){
              
            return  "02328772838"
          } 
      }
  },
  methods:{
      getmame(UserFullName){
          return UserFullName
      }
  }
};
</script>