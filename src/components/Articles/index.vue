<template>
    <div>
        <router-link to="/articles/199010918918">
            Different article
        </router-link>
    </div>
</template>


<script>
    /* eslint-disable */
    import { watch } from 'vue'
    import { useRoute, useRouter, onBeforeRouteLeave, onBeforeRouteUpdate } from 'vue-router';

    export default {
        setup(){
            const router = useRouter();
            const route = useRoute();


            // console.log(route.params.id)
            // setTimeout(()=>{
            //     router.push('/some_section/section')
            // },2000)

            watch(
                ()=> route.params.id,
                ()=>{
                    console.log(route.params.id)
                }
            );

            onBeforeRouteUpdate((to, from)=>{
                console.log('route update')
            });

            onBeforeRouteLeave((to, from)=>{
                 console.log('route leave')
            });
        },
        beforeRouteEnter(to,from,next){
            console.log('route enter');
            next();
        }
    }
</script>