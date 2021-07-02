
import Vue from "vue";

const state = () => ({
    cached: [],
    //test data for initial state
    testing:[
        {
        name:'recipe-1-recipe',
        description:'recipe 1 description',
        image:'https://picsum.photos/200/300',
        },
        {
        name:'recipe-2-recipe',
        description:'recipe 2 description',
        image:'https://picsum.photos/200/300',
        },
        {
        name:'recipe-3-recipe',
        description:'recipe 3 description',
        image:'https://picsum.photos/200/300',
        },
        {
        name:'recipe-4-recipe',
        description:'recipe 4 description',
        image:'https://picsum.photos/200/300',
        },
        {
        name:'recipe-5-recipe',
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

    deleteRecipe({ commit },  item) {
        return Vue.axios.delete(`recipes/${item.name}`)
            .then((response) => {
                commit('DELETE_RECIPE', item);
            })
            .catch((error) => {
                  // for testing without api 
            commit('DELETE_RECIPE', item);
            })
    },

    updateRecipe({ commit }, { name, newItem }) {


        //first parameter is old name form route pramas 
        // it should be id if there were real api
        return Vue.axios.put(`recipes/${name}`, newItem ,
                             { headers: {
                   'Content-Type': 'multipart/form-data'
                     }})
            .then((response) => {

                // for testing without api 
                const recipe=  {name:FormData.get('name'),
                description:FormData.get('description'),
                image:"https://picsum.photos/200/300"
                }
                commit('UPDATE_RECIPE', {name:name,newItem:recipe} );
                // commit('UPDATE_RECIPE',newItem);
            })
            .catch((error) => {
                // for testing without api
                const recipe=  {name:newItem.get('name'),
                description:newItem.get('description'),
                image:"https://picsum.photos/200/300"
                }
                commit('UPDATE_RECIPE',  {name:name,newItem:recipe} );
            })




    },

    createRecipe({ commit },  newItem ) {
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
        //for testing comment this line
        // state.cached = data;
        state.cached = [...state.testing];

    },
    DELETE_RECIPE(state, item) {
        const index =   state.cached.findIndex(recipe => recipe.name == item.name)
        if(index > - 1)
        state.cached.splice(index, 1)


        // for  local test state
        const testindex =   state.testing.findIndex(recipe => recipe.name == item.name)
        console.log(testindex,item.name)
        if(testindex > - 1)
        state.testing.splice(testindex, 1)
    },
    UPDATE_RECIPE(state,  {name,newItem} ) {
        const index =   state.cached.findIndex(recipe => recipe.name == name)
        if(index > - 1)
        Object.assign(state.cached[index], newItem)

        // for  local test state
        const testindex =   state.testing.findIndex(recipe => recipe.name == name)
        if(testindex > - 1)
        Object.assign(state.testing[testindex], newItem)

    },

    CREATE_RECIPE(state,  newItem ) {
            // if there was api we can use response
            // to get the image url of added recipe

            //customized for the test only
        let recipe=  {name:newItem.get('name'),
                        description:newItem.get('description'),
                        image:"https://picsum.photos/200/300"
                        }

        state.cached.push(newItem)
                // for  local test state
        state.testing.push(newItem)
        
    }

};

const getters = {
    recipes(state) {
        return state.cached
    },
    testing(state) {
        return state.testing
    },
    recipeByName: (state) => (name) => {
        return state.testing.find(recipe => recipe.name === name)
      }
};


export default {
    state, getters, actions, mutations
}