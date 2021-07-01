// import axios from "axios";

import JwtService from "@/common/jwt.service";


const state = () => ({
    user: null,
})


const actions = {
    register({ dispatch }, user) {
         this.axios.post('register', user).then((response)=>{
            dispatch('LogIn', user.credentials)
         })
    },

    logIn({ commit }, user) {
        this.axios.post("login", user.credentials).then((response)=>{
            
            commit("SETUSER", user);
         })
    },

    async logOut({ commit }) {
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


