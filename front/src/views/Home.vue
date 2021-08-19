<template>
  <div class="home">
    <h1 class="mb-4">Retrouvez tout ce qu'il faut pour visiter Lyon!</h1>
    <div class="d-flex flex-wrap justify-content-center">
      <div v-for="event in events" :key="event.fields.id" >
        <event :title="event.fields.title" :category="event.fields.category" :description="event.fields.description" :price="event.fields.price" :cover_url="event.fields.cover_url"/>
      </div>
    </div>
  </div>
</template>

<script>
import {mapState, mapActions} from 'vuex'
import event from '../components/Event'
export default {
  name: 'Home',
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
      fetchEvents: 'fetchEvents'
    })
  },
  mounted() {
    this.fetchEvents()
  },
}
</script>
