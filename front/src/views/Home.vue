<template>
  <div class="home">
    <h1 class="mb-4">Retrouvez tout ce qu'il faut pour visiter Lyon!</h1>
        <b-form @submit.prevent="fetchEventsSorted(searchValue)" class="d-flex">
                <b-form-input v-model="searchValue" placeholder="Rechercher ici"></b-form-input>
                <b-button type="submit">Rechercher</b-button>
           </b-form>
    <div class="d-flex flex-wrap justify-content-center">
      <div v-for="event in events" :key="event.properties.id" >
        <event :id='event.properties.id' :title="event.properties.nom" :category="event.properties.theme" :description="event.properties.descrcourtfr" :price="event.properties.tarifsenclair" :cover_url="event.properties.illustrations[0].url"/>
      </div>
    </div>
  </div>
</template>

<script>
import {mapState, mapActions} from 'vuex'
import event from '../components/Event'
export default {
  name: 'Home',
   data() {
        return {
            searchValue: null
        }
    },
  components:{
    event
  },
  computed:{
    ...mapState({
      events : (state) => state.events?.data || {}
    })
  }, 
  methods: {
    ...mapActions({
      fetchEvents: 'fetchEvents',
      fetchEventsSorted: 'fetchEventsSorted'
    })
  },
  mounted() {
    this.fetchEvents()
  },
}
</script>
