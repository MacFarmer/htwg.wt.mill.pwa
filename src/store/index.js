import Vue from 'vue'
import Vuex from 'vuex'
import game from "./modules/game";
import grid from "./modules/grid";
import timer from "./modules/timer";

import UIModule from "./modules/ui";
import User from "./modules/google_user";

Vue.use(Vuex)

const strictMode = process.env.NODE_ENV !== "production";

export default new Vuex.Store({
  strict: strictMode,
  modules: {
    game,
    grid,
    timer,
    ui: UIModule,
    google_user: User
  }
});
