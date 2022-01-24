<template>
  <div>
    <layout-header />
    <main>
      <Nuxt />
    </main>
    <layout-footer />
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import LayoutFooter from '@/components/Footer.vue'
import LayoutHeader from '@/components/Header.vue'

export default Vue.extend({
  components: {
    LayoutFooter,
    LayoutHeader,
  },
  head() {
    return {
      htmlAttrs: {
        class: this.$accessor.mobileNavShow ? 'nav-open' : '',
      },
    }
  },
  watch: {
    $route() {
      this.$accessor.setMobileNavShow(false)
    },
  },
})
</script>
