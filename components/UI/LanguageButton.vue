<template>
  <nuxt-link class="language-button" to="/" @click.native="playClickSound()">
    <span class="sr-only">Language</span>
  </nuxt-link>
</template>

<script>
import clickSound from '~/mixins/clickSound';

export default {
  mixins: [clickSound],
};
</script>

<style lang="scss" scoped>
.language-button {
  display: inline-block;
  width: 2.25em;
  height: 2.25em;
  background-image: url('/img/language-button-sprites.png');
  background-size: 100%;
  image-rendering: pixelated;
  image-rendering: -moz-crisp-edges;
  image-rendering: crisp-edges;
  cursor: default;

  @media (hover: hover) {
    &:hover {
      background-position-y: 100%;
    }
  }

  @include focus {
    background-position-y: 100%;
  }
}
</style>