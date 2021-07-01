

const state = () => ({
    cached: [],
})

const actions = {

    getAllRecipes({ commit, state }) {

        //we can use pagianation with real api backend

        //if Recipes list dont change very often
        if (state.cached.length != 0)

            return this.axios.get('recipes').then((response) => {
                const recipes = response.data
                commit('SET_RECIPES', recipes)
                return recipes
            })

        return Promise.resolve(state.cached)
    },

    deleteRecipe({ commit }, { index, id }) {
        return this.axios.delete(`recipes/${id}`)
            .then((response) => {
                commit('DELETE_RECIPE', index);
            })
            .catch((error) => {
            })
    },

    updateRecipe({ commit }, { index, item, newItem }) {
        return this.axios.put(`recipes/${item.id}`, { ...newItem })
            .then((response) => {
                commit('UPDATE_RECIPE', { index, newItem });
            })
            .catch((error) => {
            })
    },

    createRecipe({ commit }, { newItem }) {
        return this.axios.post('recipes', { ...newItem })
            .then((response) => {
                commit('CREATE_RECIPE', { newItem });
            })
            .catch((error) => {
            })
    }
}



const mutations = {
    SET_RECIPES(state, data) {
        state.cached = data;
    },
    DELETE_RECIPE(state, index) {
        state.cached.splice(index, 1)
    },
    UPDATE_RECIPE(state, { index, newItem }) {
        //   const index= state.posts.indexOf(post)
        Object.assign(state.cached[index], newItem)
    },
    CREATE_RECIPE(state, { newItem }) {
        state.cached.push(newItem)
    }

};

const getters = {
    recipes(state) {
        return state.cached
    },
};


export default {
    state, getters, actions, mutations
}