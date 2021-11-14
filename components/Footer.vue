<template>
  <footer role="contentinfo">
    <div class="container">
      <p>
        © {{ getYear() }} Dustin Schwartz. All rights reserved. •
        <a href="https://twitter.com/developerdustin" target="_blank">
          Twitter
        </a>
        •
        <a href="https://github.com/dustin-schwartz" target="_blank">GitHub</a>
      </p>
    </div>
  </footer>
</template>

<script>
export default {
  methods: {
    getYear() {
      return new Date().getFullYear()
    },
  },
}
</script>

<style scoped>
footer {
  margin-top: 50px;
  border-top: 1px solid var(--color-border);
  text-align: center;
}
</style>
