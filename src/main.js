import Vue from 'vue'
import App from './App.vue'
import wb from "./registerServiceWorker";
import router from './router'
import store from "./store/index";
import vuetify from './plugins/vuetify';
import MorrisGame from './components/morris-game.vue';
import '@fortawesome/fontawesome-free/css/all.css'
import '@fortawesome/fontawesome-free/js/all.js'
import './app.scss';
import './registerServiceWorker';
import axios from "axios";

global.jQuery = require('jquery');

let $ = global.jQuery;
window.$ = $;

import { LoaderPlugin } from '../src/components';

Vue.prototype.$workbox = wb;
Vue.config.productionTip = false;

const CLIENT_ID = "569191310633-t5bk1bplo4j92js6rotb9p9eknotn1h9.apps.googleusercontent.com";
Vue.use(LoaderPlugin, {
    client_id: CLIENT_ID
});

new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount('#app')

const url = "wss://ancient-savannah-40407.herokuapp.com/websocket"
connect(url)

const app = new Vue(
  {
  el: '#gameboard-container',

  components: {
    MorrisGame: MorrisGame
  },

  data()
  {
    return {
      //Game stats are are obtained from outside of the component to allow for
      //reusability. In a real-world application this might come from a database
      //e.g., after login, for now this is just mocked with localStorage.
      winStats: [
        parseInt(localStorage.getItem('player0_wins') || 0),
        parseInt(localStorage.getItem('player1_wins') || 0)
      ]
    };
  },

  methods: {
    updateStats: function(playerWins)
    {
      localStorage.setItem('player0_wins',playerWins[0]);
      localStorage.setItem('player1_wins',playerWins[1]);
    }
  }
});

let isRefreshing = false;
let subscribers = [];

axios.interceptors.response.use(
  response => {
    return response;
  },
  err => {
    const {
      config,
      response: { status, data }
    } = err;

    const originalRequest = config;

    if (data.message === "Missing token") {
      router.push({ name: "login" });
      return Promise.reject(false);
    }

    if (originalRequest.url.includes("login_check")) {
      return Promise.reject(err);
    }

    if (status === 401 && data.message === "Expired token") {
      if (!isRefreshing) {
        isRefreshing = true;
        store
          .dispatch("REFRESH_TOKEN")
          .then(({ status }) => {
            if (status === 200 || status == 204) {
              isRefreshing = false;
            }
            subscribers = [];
          })
          .catch(error => {
            console.error(error);
          });
      }

      const requestSubscribers = new Promise(resolve => {
        subscribeTokenRefresh(() => {
          resolve(axios(originalRequest));
        });
      });

      onRefreshed();

      return requestSubscribers;
    }
  }
);

function subscribeTokenRefresh(cb) {
  subscribers.push(cb);
}

function onRefreshed() {
  subscribers.map(cb => cb());
}

subscribers = [];