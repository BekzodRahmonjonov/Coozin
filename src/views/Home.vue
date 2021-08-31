<template>
  <div>
    <Header />
    <Intro />
    <Navbar />
    <Collection />
    <Sale />
    <ChefOfWeek />
    <ColaCombo />
    <Footer />
  </div>
</template>

<script setup>
import Header from '../components/Header.vue'
import Intro from '../components/Intro.vue'
import Navbar from '../components/Navbar.vue'
import Collection from '../components/Collection.vue'
import Sale from '../components/Sale.vue'
import ChefOfWeek from '../components/ChefOfWeek.vue'
import ColaCombo from '../components/ColaCombo.vue'
import Footer from '../components/Footer.vue'

import { computed } from 'vue'
import { useStore } from 'vuex'
const store = useStore()
import { useRouter } from 'vue-router'
const router = useRouter()

const name = computed(() => {
  return store.state.user.name
})

</script>
