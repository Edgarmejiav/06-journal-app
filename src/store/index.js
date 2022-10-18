import { createApp } from "vue";
import { createStore } from "vuex";
import journalModule from "../modules/store/journal";

const  store = createStore({
  modules: {
    // modules
    journal: journalModule,
  },
});
export default store