<template>

// This is for text value 
<input type="text" v-model="textInput" />
<h2> This is text value : {{textInput}}</h2>


// this is form checkBox values

<label for="html">HTML</label>
<input type="checkbox" value="html" v-model="checkBoxInput" id="html" />

<label for="css">css</label>
<input type="checkbox" value="css" v-model="checkBoxInput" id="css" />

<label for="js">js</label>
<input type="checkbox" value="js" v-model="checkBoxInput" id="js" />

<h2> This is checkBoxInput value : {{checkBoxInput}}</h2>


// This is for radio values

<h1> Select any One Degree </h1>

<label for="matric">Matric</label>
<input type="radio" name="degree" value="matric" v-model="radioInput" id="matric" />

<label for="ineter">Inter</label>
<input type="radio" name="degree" value="ineter" v-model="radioInput" id="ineter" />

<label for="graduation">Graduation</label>
<input type="radio" name="degree" value="graduation" v-model="radioInput" id="graduation" />

<h2> This is Radio input value : {{radioInput}}</h2>
</template>

<script>
export default {
    name: "Form",
    data() {
        return {
            textInput: [],
            checkBoxInput: [],
            radioInput: null,
        }
    }
}
</script>

<style>

</style>
