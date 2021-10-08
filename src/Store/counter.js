const counterModule = {
    namespaced:true,
    state(){
        return{
            count:0
        }
    },
    getters:{
        getCount(state){
            return state.count
        }
    },
    mutations:{
        add(state){
            state.count++
        },
        remove(state){
            state.count--
        }
    },
    actions:{
        removeAsync(context){
            setTimeout(()=>{
                context.commit('remove');
            },500)
        }
    }

}

export default counterModule;