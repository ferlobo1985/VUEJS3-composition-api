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


            animal.type = 'Cat';
            animal.years = 10;

            setTimeout(()=>{
                animal.eyes.color = 'Green';
                console.log(animal)
            },2000)

     
            // setTimeout(()=>{
            //     animal.eyes.color = 'Green';
            // },2000);

            // setTimeout(()=>{
            //     animal.type = 'Lion'
            // },4000);

            // const animalCopy = readonly(animal);
            // const zoo = readonly({
            //     cages:6,
            //     animals:0
            // });

            // console.log(isReactive(animal));
            // console.log(isReactive(animalCopy));
            // console.log(isReactive(zoo));

            // console.log(animalCopy.type);
            // animalCopy.type = 'Cat';

            return {
                animal
            }

        }
    }
</script>