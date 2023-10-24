<template>
  <component
    class="primary-button"
    :is="$attrs.to ? 'nuxt-link' : $attrs.href ? 'a' : 'button'"
    v-bind="$attrs"
    @click="$attrs.to ? null : playClickSound()"
    @click.native="$attrs.to ? playClickSound() : null">
      <slot></slot>
  </component>
</template>

<script>
import clickSound from '~/mixins/clickSound';

export default {
  mixins: [clickSound],
}
</script>

<style lang="scss" scoped>
.primary-button {
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  z-index: 0;
  padding-bottom: .24em;
  width: 100%;
  max-width: 540px;
  height: 2.25em;
  color: white;
  text-align: center;
  white-space: nowrap;
  text-shadow: #3f3f3f .1em .1em;
  image-rendering: pixelated;
  image-rendering: -moz-crisp-edges;
  image-rendering: crisp-edges;
  cursor: default;
  
  &, &::after {
    background-image: url('/img/button-sprites.png');
    background-size: auto 300%;
    background-position-y: 50%;
    background-repeat: no-repeat;
  }

  &::after {
    content: '';
    position: absolute;
    top: 0;
    right: 0;
    z-index: -1;
    width: .4em;
    height: 100%;
    background-position-x: 100%;
  }

  @media (hover: hover) {
    &:hover, &:hover::after {
      background-position-y: 100%;
    }
  }

  @include focus {
    &, &::after {
      background-position-y: 100%;
    }
  }

  &:disabled, &:disabled::after {
    color: #a0a0a0;
    text-shadow: #282828 .1em .1em;
    background-position-y: 0;
  }
}
</style>