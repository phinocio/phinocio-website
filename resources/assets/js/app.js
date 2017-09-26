require('./bootstrap');

import router from './routes';
import PhinApp from './App.vue';

new Vue({
	el: '#app',

	components: { PhinApp },

	router
})