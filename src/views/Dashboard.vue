<template>
  <div>
    <nav class="nav justify-content-center">
      <form class="form-inline">
          <input class="form-control" type="text" placeholder="Jumanji" v-model="movieString">
          <button type="button" class="btn btn-primary" @click.prevent="submit">buscar</button>
      </form>
    </nav>
    <div class =" row " v-if="movies" pt-3>
      <div class = "col-md-3" v-for="(item,index) in movies" v-bind:key="index">
          <button type="button" class="btn btn-secondary movie" @click="select(index)">{{item.Title}}</button>
      </div>
    </div>
  </div>
</template>

<script>
/* eslint-disable no-console */
/* eslint-disable */
import {mapState,mapActions} from 'vuex';
import Vote from '../views/Vote.vue';
export default {
  name: 'Dashboard',
  data() {
    return {
     movieString:null
    }
  },
  components:{
    Vote
  },
  computed: mapState({
    searchString: state => state.searchString,
    movies: state=> state.movies,
  }),
  methods:{
    ...mapActions({
      search: (store,args) => store('search',args),
    }),
    submit(){
      this.search(this.movieString);
    },
    select(index){
      console.log("selected",index,this.movies[index])
      this.$router.push({name:'vote',params:{movieIndex:index}});
    }
  }
};
</script>

<style scoped>
 .movie{
   width: 100%;
   height: 100%;
 }
</style>
