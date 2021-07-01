import Vue from "vue";

import JwtService from "@/common/jwt.service";


const state = () => ({
    user: null,
})


const actions = {
    register({ dispatch }, user) {
         Vue.axios.post('register', user).then((response)=>{
            dispatch('login', user)
         })
    },

    login({ commit }, user) {
        console.log(user)
        Vue.axios.post("login", user.credentials).then((response)=>{
            commit("SETUSER", response.data);
         })
    },

    logout({ commit }) {
        commit("LOGOUT");
    },
};

const mutations = {
    SETUSER(state, user) {
        state.user = user;
        JwtService.saveToken(user.token);
        JwtService.setHeader();
    },

    LOGOUT(state) {
        state.user = null;
    },
};


const getters = {
    isAuthenticated: (state) => !!state.user,
    user: (state) => state.user,
};







export default {
    state, getters, actions, mutations
}


