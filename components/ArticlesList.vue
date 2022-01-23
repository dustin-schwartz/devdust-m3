<template>
  <div>
    <article
      v-for="article of articles"
      :key="article.slug"
      class="col-sm-4 col-12"
    >
      <time :datetime="article.published">
        {{ $formatDate(article.published) }}
      </time>
      <h3 class="headline mb-3">
        <NuxtLink :to="`/blog/${article.slug}/`">
          {{ article.title }}
        </NuxtLink>
      </h3>
      <p>{{ article.description }}</p>
    </article>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  props: {
    articles: {
      type: Array,
      required: true,
    },
  },
})
</script>

<style lang="scss" scoped>
article {
  padding-top: 2rem;
  border-top: 1px solid var(--color-border);
  margin-top: 2rem;

  &:first-of-type {
    margin-top: 0;
  }
}
time {
  font-size: 1.4rem;
  color: var(--brand-blue);
}
h3 {
  margin-top: 0;
  margin-bottom: 1rem;
}
</style>
