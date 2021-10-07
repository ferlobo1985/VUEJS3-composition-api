<template>
    <div>
        <app-user :user="user" required="yes" @saySomething="fromEmit">
            <div>I am a slot</div>
        </app-user>
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
    import appUser from './user.vue';
    import { ref, computed, watch, reactive, provide, readonly } from 'vue';

    export default {
        components:{
            appUser
        },
        setup(){
            const toProvide = 'Some data to provide';
            const form = reactive({
                name:'Steve',
                lastname:'Thompson'
            });

            const user = reactive({
                age:18,
                name:'Francis',
                occupation:'DEV',
                bilingual:false
            });

            /// PROVIDE
            provide('data',toProvide);
            provide('formData',readonly(form));
            provide('mutateForm',mutateForm)

            /// FUNCTIONS
            function changeName(arg1, event){
                user.name = 'Ronald';
            }
            function mutateForm(value){
                form.name = value
            }
            const changeOccupation = (arg) => {
                user.occupation = arg;
            }
            const submitForm = (e) =>{
                e.preventDefault();
                //console.log(form);
            }
            const fromEmit = (arg) => {
                console.log('FROM EMMIT !!',arg)
            }
          


            // COMPUTED
            const message = computed(()=>{
                return `Hello, i am ${user.name} and i am a ${user.occupation}`
            });
            
            /// WATCH
            watch(user,(newUser,oldUser)=>{
                // console.log(newUser,'NEW');
                // console.log(oldUser,'OLD');
            });
            
            return {
                user,
                form,
                submitForm,
                changeName,
                changeOccupation,
                message,
                fromEmit
            }            
        }
    }
</script>