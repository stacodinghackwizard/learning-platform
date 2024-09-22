import { createApp } from 'vue';
import { createPinia } from 'pinia';
import App from './App.vue';
import router from './router';
import axios from 'axios'
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './assets/dist/css/dashboard.css';
import './assets/dist/css/course.css';

{/* <script src="https://cdn.jsdelivr.net/npm/jquery@3.5.1/dist/jquery.slim.min.js" integrity="sha384-DfXdz2htPH0lsSSs5nCTpuj/zy4C+OGpamoFVy38MVBnE+IbbVYUew+OrCXaRkfj" crossorigin="anonymous"></script> */}

import "https://cdn.jsdelivr.net/npm/feather-icons@4.28.0/dist/feather.min.js"
import "https://cdn.jsdelivr.net/npm/chart.js@2.9.4/dist/Chart.min.js"
// import "/src/assets/dist/js/dashboard.js"


const app = createApp(App);

app.config.globalProperties.$axios = axios

app.use(createPinia());
app.use(router);
app.mount('#app');
