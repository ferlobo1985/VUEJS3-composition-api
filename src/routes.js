import { createRouter, createWebHistory} from 'vue-router'
import Home from './components/Home';
import Articles from './components/Articles';


const routes = createRouter({
    history:createWebHistory(),
    routes:[
        { path:'/',component: Home },
        { path:'/articles', component: Articles }
    ]
});



export default routes;