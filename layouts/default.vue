<template>
  <div>
    <layout-header />
    <main>
      <Nuxt />
    </main>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import LayoutHeader from '@/components/Header.vue'

export default Vue.extend({
  components: {
    LayoutHeader,
  },
})
</script>
