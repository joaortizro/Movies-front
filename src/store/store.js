/* eslint-disable no-unused-vars */
/* eslint-disable */

import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

const store = new Vuex.Store({
    state: {
      searchString:null,  
      movies: [],
      hasVoted: false
    },
    mutations: {
      vote (state) {
        state.hasVoted=true;
      },
      search(state,query){
          state.searchString=query
      },
      movies(state,payload){
          state.movies=payload
      }
    },
    actions:{
        search({commit},query){
            console.log("hay que buscar"+query)
            Vue.axios.get(query).then(result =>{
                console.log("results are",result.data.Search)
                commit('movies',result.data.Search)
                commit('search',query)
            }) 
        }
    },
    getters:{
        fetchedMovies (state){
            return state.movies;
        }
    }

  })
export default store
