<template>
  <div>
   <b-card
   :title="title"
   :img-src="cover_url"
   img-top
   style="width: 20rem;"
    class="m-2"
   >
  <b-card-text class="container">
    {{title}}
    {{category}}
    {{description}}
    {{price}}
  </b-card-text>
  <b-button @click="getItem(id)">Plus d'info</b-button>
   </b-card>
  </div>
</template>

<script>
export default {
  name: 'Event',
  props: {
    id: String,
    link: String,
    address_city: String,
    address_name: String,
    address_street: String,
    address_zipcode: String,
    category: Array,
    facebook: String,
    twitter: String,
    cover_url: String,
    date_escription: String,
    date_start: String,
    date_end: String,
    description: String,
    lead_text: String,
    price: String,
    title: String,
    url: String,
  },
  methods: {
    getItem(id){
      this.$router.push({name:`Point`, params:{id : id}})
    }
  },
}
</script>

<style scoped>

</style>
