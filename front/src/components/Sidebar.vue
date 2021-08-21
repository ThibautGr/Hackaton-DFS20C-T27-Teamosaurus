<template lang="">
    <div>
        <b-icon-justify  v-b-toggle.sidebar_menu variant="white" class="hamburger-menu h3 mr-4"/>
        <b-sidebar id="sidebar_menu"  title="Menu" shadow>
            <div class="px-3 h-100 w-100 py-2 d-flex flex-column background-gradient align-items-start">
                <router-link to="/">Home</router-link>
                <router-link to="/restaurants">Restaurants</router-link>
                <router-link to="/shopping">Shopping</router-link>
                <router-link to="/culture">Culture</router-link>
                <router-link to="/activites">Activités</router-link>
                <router-link to="/hebergements">Hébergements</router-link>
            </div>
         </b-sidebar>
    </div>
</template>
<script>
export default {
    name: 'Sidebar'
}
</script>
<style scoped>
    a:link, a:visited{
        color: white;
        text-decoration: none;
        transition:all 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275);
    }
    a:hover{
        transform: translateX(10px);
        transition:all 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275);
        color: white !important;
    }


</style>