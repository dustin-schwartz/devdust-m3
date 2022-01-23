<template>
  <svg viewBox="0 0 411.33 474.08" :style="styles">
    <defs>
      <linearGradient
        id="logo-gradient-1"
        x1="205.66"
        y1="474.08"
        x2="205.66"
        gradientUnits="userSpaceOnUse"
      >
        <stop class="logo-stop-1 logo-stop-color" offset="0" />
        <stop class="logo-stop-2 logo-stop-color" offset="1" />
      </linearGradient>
      <linearGradient
        id="logo-gradient-2"
        x1="205.14"
        y1="399.86"
        x2="205.14"
        y2="74.61"
        xlink:href="#logo-gradient-1"
      />
    </defs>
    <g>
      <g>
        <path
          class="logo-d-outer"
          d="M392.2,134.49C331.12-16.48,137,.09,0,.92V473.55c108.13-1.14,253.17,13.79,337.64-60.23C415.62,351.3,428,222.61,392.2,134.49ZM287.33,369.74c-42.07,44.69-143.85,50.51-216.47,47.12V57.61c72.67-3.3,174.29,2.36,216.47,46.77C357.88,160.86,357.64,313.08,287.33,369.74Z"
        />
        <path
          class="logo-d-inner"
          d="M271,115.36Q221.08,74.62,131.09,74.61H89.28V399.86h41.81q90,0,139.94-41.1t50-121.88Q321,156.11,271,115.36Zm-37.9,198.4q-29.07,25.17-82.2,25.16V135.55q53.15,0,82.2,24.8t29.05,76.53Q262.18,288.62,233.13,313.76Z"
        />
      </g>
    </g>
  </svg>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  props: {
    width: {
      type: Number,
      required: true,
    },
  },
  computed: {
    styles() {
      return {
        width: `${this.width}px`,
      }
    },
  },
})
</script>

<style lang="scss" scoped>
svg {
  width: 100%;
  height: auto;
}
.logo-stop-color {
  transition: stop-color 0.35s ease;
  will-change: stop-color;
}
.logo-stop-1 {
  stop-color: var(--brand-red);
}
.logo-stop-2 {
  stop-color: var(--brand-blue);
}
.logo-d-outer {
  fill: url(#logo-gradient-1);
}
.logo-d-inner {
  fill: url(#logo-gradient-2);
}
svg:hover {
  .logo-stop-1 {
    stop-color: var(--brand-navy);
  }
  .logo-stop-2 {
    stop-color: var(--brand-aqua);
  }
}
</style>
