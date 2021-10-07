<template>
  <div>
          <div>Hello my name is: {{ user.name }}</div>
          <div>Occupation: {{ user.occupation }}</div>
          <div>Bilingual: {{ user.bilingual }}</div>
          <div>Age: {{ user.age }}</div>
          <slot></slot>
  </div>
</template>

<script>
    import { watch } from 'vue';
    /* eslint-disable */
    export default {
      props:['user'],
      setup(props,context){
        console.log(context);

        watch(props.user,()=>{
          console.log('From the children');
          context.emit('saySomething',{ someArg: true})
        })

      }
    }
</script>