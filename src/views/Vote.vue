<template>
    <div class="container">
        <div class="row">
            <h1>
                {{this.movies[movieIndex].Title}}
            </h1>
        </div>
        <div class="row">
            <input v-model="userEmail" type="text">
            <button type="button" class="btn btn-secondary" @click="doVote()">Votar</button>
        </div>
    </div>
</template>

<script>
/* eslint-disable no-console */
/* eslint-disable */
import {mapState,mapActions} from 'vuex';
export default {
    name:'Vote',
    data(){
        return{
            userEmail:null,
            movieId:null
        }
    },
    props:['movieIndex'],
    computed: mapState({
    movies: state=> state.movies,
    }),
    methods:{
        ...mapActions({
        vote: (store,args) => store('vote',args),
        }),
        doVote(movieId){
            this.movieId = this.movies[this.movieIndex].imdbID;
            this.vote({movieId:this.movieId,userEmail:this.userEmail});
        }
    }
};
</script>
<style>

</style>
