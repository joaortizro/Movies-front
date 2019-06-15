import Vue from 'vue';
import Router from 'vue-router';
import Dashboard from '../views/Dashboard.vue';
import Vote from '../views/Vote.vue'
Vue.use(Router);

export default new Router({
    routes :[
        {
            path:'/',
            name:'dashboard',
            component:Dashboard
        },
        {
            path:'/vote',
            name:'vote',
            component:Vote,
            props:true
        }
    ]
})