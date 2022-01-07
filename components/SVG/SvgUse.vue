<template>
  <svg>
    <slot></slot>
    <use :href="`#${spriteId}`"/>
  </svg>
</template>

<script>
export default {
  props: {
    sprite: {
      type: String,
      required: true,
    },
    variant: {
      type: String,
      required: false,
    },
    colored: {
      type: Boolean,
      required: false,
      default: false,
    },
    type: {
      type: String,
      required: false,
      validator: (value) => ['fill', 'outline'].includes(value),
    },
  },
  computed: {
    spriteId() {
      let spriteId = this.sprite;
      if (this.variant) spriteId = `${this.variant}-${spriteId}`;
      if (this.colored) spriteId += '-colored';
      if (this.type) spriteId += `-${this.type}`;
      return spriteId;
    },
  },
  mounted() {
    const {x, y, width, height} = document.querySelector(`#${this.spriteId}`).viewBox.baseVal;
    this.$el.setAttribute('viewBox', `${x} ${y} ${width} ${height}`);
  },
};
</script>