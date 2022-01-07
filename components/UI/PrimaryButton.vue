<template>
  <component class="primary-button" :is="$attrs.to ? 'nuxt-link' : $attrs.href ? 'a' : 'button'" v-bind="$attrs" @click="$attrs.to ? null : playClickSound()" @click.native="$attrs.to ? playClickSound() : null">
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
  padding-bottom: .24em;
  height: 2.25em;
  background-image: url('/img/button/default/left.png'), url('/img/button/default/right.png'), url('/img/button/default/inner.png');
  background-size: contain, contain, auto 100%;
  background-position: left, right, center;
  background-repeat: no-repeat, no-repeat, repeat;
  font-size: 24px;
  color: white;
  text-align: center;
  white-space: nowrap;
  text-shadow: #3f3f3f .1em .1em;
  image-rendering: pixelated;
  image-rendering: -moz-crisp-edges;
  image-rendering: crisp-edges;

  @media (hover: hover) {
    &:hover {
      background-image: url('/img/button/hover/left.png'), url('/img/button/hover/right.png'), url('/img/button/hover/inner.png');
    }
  }
}

@include focus('.primary-button') {
  background-image: url('/img/button/hover/left.png'), url('/img/button/hover/right.png'), url('/img/button/hover/inner.png');
}
</style>