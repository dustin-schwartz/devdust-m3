<template>
  <header>
    <div class="container">
      <nuxt-link id="logo" to="/">
        <logo :width="50" />
      </nuxt-link>
      <nav>
        <nuxt-link v-for="item in nav" :key="item.url" :to="item.url">
          {{ item.title }}
        </nuxt-link>
        <a
          v-for="item in social"
          :key="item.url"
          :href="item.url"
          target="_blank"
          :title="item.title"
          class="icon"
        >
          <icons :icon="item.icon" />
        </a>
      </nav>
      <button id="mobileMenu">nav</button>
    </div>
  </header>
</template>

<script lang="ts">
import Vue from 'vue'
import Logo from '@/components/Logo.vue'
import Icons from '@/components/Icons.vue'

export default Vue.extend({
  components: {
    Logo,
    Icons,
  },
  data() {
    return {
      nav: [
        {
          title: 'Blog',
          url: '/blog',
        },
      ],
      social: [
        {
          title: 'Twitter',
          icon: 'twitter',
          url: 'https://twitter.com/developerdustin',
        },
        {
          title: 'Github',
          icon: 'github',
          url: 'https://github.com/dustin-schwartz',
        },
        {
          title: 'LinkedIn',
          icon: 'linkedin',
          url: 'https://www.linkedin.com/in/dustinschwartz/',
        },
      ],
    }
  },
})
</script>

<style lang="scss" scoped>
header {
  padding: 50px 0;
}
.container {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
nav {
  display: flex;
  align-items: center;

  a {
    text-decoration: none;
    transition: color 0.25s ease-in-out;
    will-change: color;

    &:hover {
      color: var(--brand-red);
    }

    + a.icon + .icon {
      margin-left: 10px;
    }
  }
  svg {
    fill: var(--brand-blue);
    transition: fill 0.25s ease-in-out;
    will-change: fill;

    &:hover {
      fill: var(--brand-red);
    }
  }
}

@media only screen and (min-width: 600px) {
  #mobileMenu {
    display: none;
  }
  nav a + a {
    margin-left: 20px;
  }
}

@media only screen and (max-width: 599px) {
  nav {
    position: fixed;
    flex-direction: column;
    width: 300px;
    inset: 0 auto 0 0;

    &::before {
      content: '';
      position: absolute;
      inset: 0;
      background: #000;
      opacity: 0.7;
    }
    * {
      z-index: 1;
    }
  }
}
</style>
