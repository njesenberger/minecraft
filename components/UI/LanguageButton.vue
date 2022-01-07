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
  background-image: url('/img/language_button/language-button.png');
  background-size: cover;
  image-rendering: pixelated;
  image-rendering: -moz-crisp-edges;
  image-rendering: crisp-edges;

  @media (hover: hover) {
    &:hover {
      background-image: url('/img/language_button/language-button-hover.png');
    }
  }

  @include focus('.language-button') {
    background-image: url('/img/language_button/language-button-hover.png');
  }
}
</style>