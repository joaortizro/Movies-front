<template>
  <nav class="nav justify-content-center">
    <form class="form-inline">
        <input class="form-control" type="text" placeholder="Jumanji" v-model="movieString">
        <button type="button" class="btn btn-primary" @click.prevent="submit">buscar</button>
    </form>
  </nav>
</template>

<script>
/* eslint-disable no-console */
/* eslint-disable */
import {mapState,mapActions} from 'vuex';

export default {
  name: 'Dashboard',
  data() {
    return {
     movieString:null
    }
  },
  computed: mapState({
    searchString: state => state.searchString,
  }),
  methods:{
    ...mapActions({
      search: (store,args) => store('search',args),
    }),
    submit(){
      this.search(this.movieString);
    }
  }
};
</script>

<style>

</style>
