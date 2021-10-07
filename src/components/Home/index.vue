<template>
    <div>
        <div>Hello my name is: {{ name }}</div>
        <div>Occupation: {{ occupation }}</div>
        <div>Bilingual: {{ lang }}</div>
        <div>Age: {{ age }}</div>
        <button @click="changeName('SOME ARG',$event)">Change name</button>
        <button @click="changeOccupation('GAMER')">Change occupation</button>

        <hr/>
        <div>
            {{ message }}
        </div>
    </div>
</template>


<script>
     /* eslint-disable */
    import { ref, computed } from 'vue';

    export default {
        setup(){
            const name = ref('Francis');
            const occupation = ref('DEV');
            const bilingual = ref(false);

            /// FUNCTIONS
            function changeName(arg1, event){
                console.log(arg1);
                console.log(event)
                name.value = 'Ronald';
            }
            const changeOccupation = (arg) => {
                occupation.value = arg;
            }
            // COMPUTED
            const message = computed(()=>{
                return `Hello, i am ${name.value} and i am a ${occupation.value}`
            })


            return {
                name: name,
                occupation,
                lang: bilingual,
                changeName,
                changeOccupation,
                message
            }            
        },
        data(){
            return {
                age:18
            }
        }
    }
</script>