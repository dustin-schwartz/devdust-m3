<template>
  <div>
    <article
      v-for="article of articles"
      :key="article.slug"
      class="col-sm-4 col-12"
    >
      <time :datetime="article.published">
        {{ formatDate(article.published) }}
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

<script>
export default {
  props: {
    articles: {
      type: Array,
      required: true,
    },
  },
  methods: {
    formatDate(date) {
      return new Date(date).toLocaleDateString('en-US', {
        weekday: 'long',
        year: 'numeric',
        month: 'long',
        day: 'numeric',
      })
    },
  },
}
</script>

<style lang="scss" scoped>
article {
  padding-top: 2rem;
  border-top: 1px solid #333;
  margin-top: 2rem;

  &:first-of-type {
    margin-top: 0;
  }
}
time {
  font-size: 1.4rem;
  color: #999;
}
h3 {
  margin-top: 0;
}
</style>
