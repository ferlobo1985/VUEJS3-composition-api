<template>
        <div>Hello my name is: {{ user.name }}</div>
        <div>Occupation: {{ user.occupation }}</div>
        <div>Bilingual: {{ user.bilingual }}</div>
        <div>Age: {{ user.age }}</div>
</template>

<script>
    /* eslint-disable */
    export default {
      props:['user'],
      setup(props){
        console.log(props.user)
      }
    }
</script>