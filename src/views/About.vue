<template>
  <div>About</div>
  <div></div>
</template>

<script>
import { computed } from 'vue'
import { useStore } from 'vuex'
const store = useStore()

const name = computed(() => {
  return store.state.user.name
})

export default {

}
</script>

<style>

</style>