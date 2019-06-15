/* eslint-disable no-unused-vars */
/* eslint-disable */

import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios';

Vue.use(Vuex);

const nauticaAPI = axios.create({
  baseURL:'http://localhost:10010'
})
 
const store = new Vuex.Store({
    state: {
      searchString:null,  
      movies: null,
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
        },
        vote({commit},query){
            console.log("voy a votar" , query)
            nauticaAPI.post('/vote',query).then(result=>{
                console.log(result);
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
