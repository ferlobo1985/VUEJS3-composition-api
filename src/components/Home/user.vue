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
    /* eslint-disable */
    import { 
      onBeforeMount,
      onMounted,
      onBeforeUpdate,
      onUpdated,
      onRenderTracked,
      onRenderTriggered,
      watch,
    } from 'vue';

    export default {
      props:['user'],
      setup(props,context){
        // console.log(context);
        watch(props.user,()=>{
          console.log('From the children');
          context.emit('saySomething',{ someArg: true})
        })

        // beforeCreate
        // created

        onBeforeMount(()=>{
          console.log('1-onBeforeMount')
        })

        onMounted(()=>{
          console.log('2-onMounted')
        })

        onBeforeUpdate(()=>{
          console.log('x-onBeforeUpdate')
        })

        onUpdated(()=>{
          console.log('x-onUpdated')
        })

        // onBeforeUnmount
        // onUnmounted


        // onRenderTracked(({key, target})=>{
        //   console.log(key);
        //   console.log(target)
        //   console.log("Render tracked !!")
        // })

        // onRenderTriggered(({key, target,oldValue,newValue})=>{
        //   console.log(key);
        //   console.log(target);

        //   console.log(oldValue,'OLD');
        //   console.log(newValue,'NEW');
        //   console.log("Render tracked !!")
        // })
      },
      renderTriggered({key, target,oldValue,newValue}){
          console.log(key);
          console.log(target);

          console.log(oldValue,'OLD');
          console.log(newValue,'NEW');
          console.log("Render tracked !!")
      }
    }
</script>