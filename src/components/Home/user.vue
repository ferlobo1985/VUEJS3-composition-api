<template>
<div>
    <div>Hello my name is: {{ user.name }}</div>
    <div>Occupation: {{ user.occupation }}</div>
    <div>Bilingual: {{ user.bilingual }}</div>
    <div>Age: {{ user.age }}</div>
    <slot></slot>
    <div>
      Name: {{ formData.name }},Lastname:{{ formData.lastname}}
    </div>
</div>
</template>

<script>
/* eslint-disable */
import {
    inject,
    onMounted,
    watch,
} from 'vue';

export default {
    props: ['user'],
    setup(props, context) {
      const data = inject('data');
      const formData = inject('formData');
      const mutateForm = inject('mutateForm');

      onMounted(()=>{
        formData.name = 'something';

        // setTimeout(()=>{
        //   mutateForm('MIKE');
        // },2000)
      })

      return {
        data,
        formData
      }
    }
}
</script>
