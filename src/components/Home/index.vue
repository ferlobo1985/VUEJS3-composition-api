<template>
    <div>
        <div>Hello my name is: {{ user.name }}</div>
        <div>Occupation: {{ user.occupation }}</div>
        <div>Bilingual: {{ user.bilingual }}</div>
        <div>Age: {{ user.age }}</div>
        <button @click="changeName('SOME ARG',$event)">Change name</button>
        <button @click="changeOccupation('GAMER')">Change occupation</button>

        <hr/>

        <form @submit="submitForm">
            <input type="text" v-model="form.name"/>
            <input type="text" v-model="form.lastname"/>
            <button type="submit">Submit</button>
        </form>


        <hr/>
        <div>
            {{ message }}
        </div>
    </div>
</template>


<script>
     /* eslint-disable */
    import { ref, computed, watch, reactive } from 'vue';

    export default {
        setup(){
            const form = reactive({
                name:'',
                lastname:''
            });

            const user = reactive({
                age:18,
                name:'Francis',
                occupation:'DEV',
                bilingual:false
            });

            /// FUNCTIONS
            function changeName(arg1, event){
                user.name = 'Ronald';
            }
            const changeOccupation = (arg) => {
                user.occupation = arg;
            }
            const submitForm = (e) =>{
                e.preventDefault();
                console.log(form);
            }
            // COMPUTED
            const message = computed(()=>{
                return `Hello, i am ${user.name} and i am a ${user.occupation}`
            });
            
            /// WATCH
            watch(user,(newUser,oldUser)=>{
                console.log(newUser,'NEW');
                console.log(oldUser,'OLD');
            });
            
            return {
                user,
                form,
                submitForm,
                changeName,
                changeOccupation,
                message
            }            
        }
    }
</script>