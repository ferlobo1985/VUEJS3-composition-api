<template>
    <div>
        count: {{ count }}
    </div>
    <button @click="addOne">
        Add
    </button>
    <button @click="remove">
        Remove
    </button>
</template>


<script>
     /* eslint-disable */
    import { computed } from 'vue';
    import { useStore } from 'vuex'

    export default {
        setup(){
            const store = useStore();
            const count = computed(()=>{
                return store.getters['counter/getCount']
            });

            /// functions
            // const addOne = () => store.commit('counter/add');
            // const remove = () => store.dispatch('counter/removeAsync');

            return {
                count,
                addOne:() => store.commit('counter/add'),
                remove:() => store.dispatch('counter/removeAsync')
            }
    
        }
    }
</script>