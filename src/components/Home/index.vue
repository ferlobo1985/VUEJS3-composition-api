<template>
    <div>
        {{ animal.type }}
    </div>
</template>


<script>
     /* eslint-disable */
    import { ref, unref, reactive, toRef, toRefs, isRef, shallowRef  } from 'vue';

    export default {
        setup(){
            const animal = shallowRef({type:'dog'});

            setTimeout(()=>{
                animal.value = {type:'cat'};
                console.log(animal.value.type);
            },2000)

            return{
                animal
            }


            // let dog = 'Scrappy';

            // if(!isRef(dog)){
            //    dog = ref(dog);
            // }
            // console.log(dog)


            
            // const car = reactive({
            //     color:'Red',
            //     year: 1985
            // });


            // const carToRefs = toRefs(car);
            // console.log(carToRefs.color.value);
            // console.log(carToRefs.year.value);


            // carToRefs.year.value++;
            // console.log(car.year)

            // const carYearToRef = toRef(car,'year');
            // console.log(carYearToRef.value);

            // car.year++
            // console.log(carYearToRef.value);

            // carYearToRef.value++;
            // console.log(car.year);

        }
    }
</script>