<template>
  <footer role="contentinfo">
    <div class="container">
      <p>© {{ getYear() }} Dustin Schwartz. All rights reserved.</p>
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
