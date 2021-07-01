
import Vue from "vue";

const state = () => ({
    cached: [],
    //test data for initial state
    testing:[
        {
        name:'recipe 1 recipe',
        description:'recipe 1 description',
        image:'https://picsum.photos/200/300',
        },
        {
        name:'recipe 2 recipe',
        description:'recipe 2 description',
        image:'https://picsum.photos/200/300',
        },
        {
        name:'recipe 3 recipe',
        description:'recipe 3 description',
        image:'https://picsum.photos/200/300',
        },
        {
        name:'recipe 4 recipe',
        description:'recipe 4 description',
        image:'https://picsum.photos/200/300',
        },
        {
        name:'recipe 5 recipe',
        description:'recipe 5 description',
        image:'https://picsum.photos/200/300',
        },
    ]
})

const actions = {

    getAllRecipes({ commit, state }) {

        //we can use pagianation with real api backend

        //if Recipes list dont change very often
        if (state.cached.length != 0)
        return Promise.resolve(state.cached)
            return Vue.axios.get('recipes').then((response) => {
                const recipes = response.data
                commit('SET_RECIPES', recipes)
                return recipes
            })

    },

    deleteRecipe({ commit }, { index, id }) {
        return Vue.axios.delete(`recipes/${id}`)
            .then((response) => {
                commit('DELETE_RECIPE', index);
            })
            .catch((error) => {
            })
    },

    updateRecipe({ commit }, { index, item, newItem }) {
        return Vue.axios.put(`recipes/${item.id}`, { ...newItem },
                             { headers: {
                   'Content-Type': 'multipart/form-data'
                     }})
        
            .then((response) => {
                commit('UPDATE_RECIPE', { index, newItem });
            })
            .catch((error) => {
            })
    },

    createRecipe({ commit },  newItem ) {
        console.log(newItem)
        return Vue.axios.post('recipes', newItem ,
            { headers: {
            'Content-Type': 'multipart/form-data'
            }}
        )
            .then((response) => {
                commit('CREATE_RECIPE',  newItem );
            })
            .catch((error) => {
            })
    }
}



const mutations = {
    SET_RECIPES(state, data) {
        state.cached = [...state.testing];
        //for testing comment this line
        // state.cached = data;
    },
    DELETE_RECIPE(state, index) {
        state.cached.splice(index, 1)
    },
    UPDATE_RECIPE(state, { index, newItem }) {
        Object.assign(state.cached[index], newItem)
    },
    CREATE_RECIPE(state,  newItem ) {
            // if there was api we can use response
            // to get the image url of added recipe

            //customized for the test only
        let recipe=  {name:FormData.get('name'),
                        description:FormData.get('description'),
                        image:"https://picsum.photos/200/300"
                        }

        state.cached.push(recipe)
        
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