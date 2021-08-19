import Vue from 'vue'
import Vuex from 'vuex'
const axios = require('axios');

Vue.use(Vuex)

const defaultData = {
  data: null,
  loading: null,
  error: null
}

export default new Vuex.Store({
  state: {
    events : {...defaultData},
    eventItem: {...defaultData}
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
    },

    setEventItem(state, value){
      state.eventItem.data = value
    },
    setEventItemError(state, value){
      state.eventItem.error = value
    },
    setEventItemLoading(state, value){
      state.eventItem.loading = value
    }

  },
  actions: {
    async fetchEvents({commit}){
      commit('setEventsLoading', true)
      try {
        const events = await axios.get('http://localhost:3000/tourism/points')
        console.log('events:')
        console.log(events)
        commit('setEvents', events.data.features.slice(-100))
        commit('setEventsLoading', false)
      } catch (error) {
        commit('setEventsError', error)
        commit('setEventsLoading', false)
      }
    },

    async fetchEventsSorted({commit},value){
      commit('setEventsLoading', true)
      try {
        const eventsSorted = await axios.get(`http://localhost:3000/tourism/points/themes/${value}`, {
 
        })
        console.log('eventsSorted:')
        console.log(eventsSorted)
        commit('setEvents', eventsSorted.data.features.slice(-100))
        commit('setEventsLoading', false)
      } catch (error) {
        commit('setEventsError', error)
        commit('setEventsLoading', false)
      }
    },

    async fetchEventItem({commit}, itemId){
      commit('setEventItemLoading', true)
      try {
        console.log('itemId')
        console.log(itemId)
        const event = await axios.get(`http://localhost:3000/tourism/points/${itemId}`)
        console.log('event:')
        console.log(event)
        commit('setEventItem', event.data.properties)
        commit('setEventItemLoading', false)
      } catch (error) {
        commit('setEventItemError', error)
        commit('setEventItemLoading', false)
      }
    },
  },
 
  modules: {
  }
})
