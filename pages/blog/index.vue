<template>
  <div class="container">
    <h1>Blog</h1>
    <articles-list :articles="articles" />
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import ArticlesList from '~/components/ArticlesList.vue'

export default Vue.extend({
  components: {
    ArticlesList,
  },
  async asyncData({ $content }) {
    const articles = await $content('articles')
      .where({ status: 'live' })
      .only(['title', 'description', 'slug', 'published'])
      .sortBy('published', 'asc')
      .fetch()

    return {
      articles,
    }
  },
})
</script>
