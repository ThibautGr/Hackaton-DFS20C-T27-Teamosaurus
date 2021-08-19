<template >
    <div>
    {{event.nom}}
    {{event.descrdetailfr}}
    {{event.ouvertureenclair}}
    {{event.tarifsenclair}}
    </div>
</template>
<script>
import { mapActions, mapState } from 'vuex'
export default {
    name:'Point',
    props:{
        id:String,
    },
    computed:{
        ...mapState({
            event: (state)=> state.eventItem?.data || {}
        })
    },
    methods: {
        ...mapActions({
            fetchEventItem: 'fetchEventItem'
        })
    },
    mounted(){
        console.log(this.$route.params.id)
        const itemId = this.$route.params.id
        this.fetchEventItem(itemId)
    }
}
</script>
<style>
    
</style>