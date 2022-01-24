<template>
  <header>
    <div class="container">
      <nuxt-link id="logo" to="/">
        <logo :width="50" />
      </nuxt-link>
      <div id="links" :class="{ show: showMobileNav }">
        <nav id="nav">
          <nuxt-link v-for="item in nav" :key="item.url" :to="item.url">
            {{ item.title }}
          </nuxt-link>
        </nav>
        <div id="social">
          <a
            v-for="item in social"
            :key="item.url"
            :href="item.url"
            target="_blank"
            :title="item.title"
          >
            <icons :icon="item.icon" />
          </a>
        </div>
        <button aria-label="Close" @click="showMobileNav = false"></button>
      </div>
      <button id="mobileMenuButton" @click="showMobileNav = true"></button>
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
      showMobileNav: false,
    }
  },
})
</script>

<style lang="scss" scoped>
header {
  padding: 50px 0;

  @include media(mobile) {
    padding-top: 20px;
  }
}
.container {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
#links {
  display: flex;
  align-items: center;

  > * {
    display: flex;
  }
  a {
    text-decoration: none;
    transition: color 0.25s ease-in-out;
    will-change: color;

    &:hover {
      color: var(--brand-red);
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
  button {
    position: absolute;
    inset: 10px 10px auto auto;
    height: 50px;
    width: 50px;
    border: none;
    background: none;

    &::before,
    &::after {
      content: '';
      position: absolute;
      width: 5px;
      height: 50px;
      background-color: var(--brand-red);
      border-radius: 3px;
      inset: 50% 0 0 50%;
      transform: translate(-50%, -50%) rotate(45deg);
    }
    &::after {
      transform: translate(-50%, -50%) rotate(-45deg);
    }
  }

  @include media(not-mobile) {
    button {
      display: none;
    }
  }
  @include media(mobile) {
    position: absolute;
    z-index: 1;
    inset: 0 auto 0 -100%;
    width: 100%;
    flex-direction: column;
    justify-content: center;
    transform: translateX(0);
    transition: transform 0.35s ease-in-out;
    will-change: transform;

    &::before {
      content: '';
      position: absolute;
      inset: 0;
      background: var(--brand-dark-navy);
      opacity: 0.95;
    }
    > * {
      position: relative;
    }

    &.show {
      transform: translateX(100%);
    }
  }
}
#social {
  a {
    height: 24px;

    + a {
      margin-left: 10px;
    }
  }

  @include media(mobile) {
    margin-top: 10px;

    a,
    svg {
      width: 50px;
      height: 50px;
    }
  }
}
#nav {
  @include media(not-mobile) {
    a {
      margin-right: 20px;
    }
  }
  @include media(mobile) {
    flex-direction: column;

    a {
      margin-bottom: 15px;
      font-size: 3rem;
    }
  }
}

#mobileMenuButton {
  position: relative;
  border: none;

  &::before,
  &::after,
  & {
    width: 50px;
    height: 5px;
    background: var(--brand-aqua);
    border-radius: 3px;
  }

  &::before,
  &::after {
    content: '';
    position: absolute;
    top: -15px;
    left: 0;
  }

  &::after {
    top: 15px;
  }

  @include media(not-mobile) {
    display: none;
  }
}
</style>
