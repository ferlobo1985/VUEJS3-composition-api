<template>
    <div>
        <div>Hello my name is: {{ name }}</div>
        <div>Occupation: {{ occupation }}</div>
        <div>Bilingual: {{ lang }}</div>
        <div>Age: {{ age }}</div>
        <button @click="changeName">Change name</button>
    </div>
</template>


<script>
     /* eslint-disable */
    import { ref } from 'vue';

    export default {
        setup(){
            const name = ref('Francis');
            const occupation = ref('DEV');
            const bilingual = ref(false);

            return {
                name: name,
                occupation,
                lang: bilingual
            }            
        },
        data(){
            return {
                age:18
            }
        },
        methods:{
            changeName(){
                this.name = 'Steve'
            }
        }

    }
</script>