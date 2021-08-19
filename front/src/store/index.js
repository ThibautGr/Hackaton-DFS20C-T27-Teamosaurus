import Vue from 'vue'
import Vuex from 'vuex'
const axios = require('axios');

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    events : {
      data: null,
      loading: null,
      error: null
    }
  },
  mutations: {
    setEvents(state, value){
      state.events.data = value
    },
    setEventsError(state, value){
      state.events.error = value
    },
    setEventsLoading(state, value){
      state.events.loading = value
    }
  },
  actions: {
    async fetchEvents({commit}){
      commit('setEventsLoading', true)
      try {
        const events = await axios.get('https://opendata.paris.fr/api/records/1.0/search/?dataset=que-faire-a-paris-&q=&facet=category&facet=tags&facet=address_name&facet=address_zipcode&facet=address_city&facet=pmr&facet=blind&facet=deaf&facet=access_type&facet=price_type')
        console.log('events:')
        console.log(events)
        commit('setEvents', events.data.records)
        commit('setEventsLoading', false)
      } catch (error) {
        commit('setEventsError', error)
        commit('setEventsLoading', false)
      }
    }
  },
  modules: {
  }
})
