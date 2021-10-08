<template>
    <div>
        <div>animal:{{ animal.type }}</div>
        <div>years:{{ animal.years }}</div>
        <div>Type:{{ animal.eyes.color}}</div>
    </div>
</template>


<script>
     /* eslint-disable */
    import {  isReadonly, reactive, readonly, ref, isReactive, shallowReactive,shallowReadonly } from 'vue';

    export default {
        setup(){
            const animal = shallowReadonly({
                type:'Dog',
                years:5,
                eyes:{
                    color:'Blue'
                }
            });


            return {
                animal
            }

        }
    }
</script>