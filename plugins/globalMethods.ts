import Vue from 'vue'

declare module 'vue/types/vue' {
  interface Vue {
    $formatDate(date: Date): string
  }
}

Vue.prototype.$formatDate = (date: Date) =>
  new Date(date).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  })
