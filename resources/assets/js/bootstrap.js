import Vue from 'vue';
import axios from 'axios';
import Vuetify from 'vuetify';
import VueRouter from 'vue-router';

window.Vue = Vue;
Vue.use(VueRouter);
Vue.use(Vuetify);


window.axios = axios;

window.axios.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest';

let token = document.head.querySelector('meta[name="csrf-token"]');

if (token) {
    window.axios.defaults.headers.common['X-CSRF-TOKEN'] = token.content;
} else {
    console.error('CSRF token not found: https://laravel.com/docs/csrf#csrf-x-csrf-token');
}
