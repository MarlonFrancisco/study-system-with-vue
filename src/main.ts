import Vue from 'vue';
import App from './App.vue';
import vuetify from './plugins/vuetify';
import VueRouter from 'vue-router';
import { routes } from './routes';
import Toasted from 'vue-toasted';

Vue.use(VueRouter);
Vue.use(Toasted);
Vue.use(vuetify);

const router = new VueRouter({
    mode: 'history',
    routes,
});

Vue.config.productionTip = false;

new Vue({
    vuetify,
    router,
    render: (h) => h(App),
}).$mount('#app');
