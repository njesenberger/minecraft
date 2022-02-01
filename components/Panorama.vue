<template>
  <div class="panorama-container">
    <div class="panorama-overlay" v-if="panoramaOverlay && panoramaHasOverlay"></div>
    <div :class="['panorama-cube-container', { 'blur': panoramaOverlay && panorama === 'classic' }]" v-if="panorama !== 'off'">
      <div class="panorama-cube">
        <div class="panorama-cube-face front" :style="{ 'background-image': `url('/img/panoramas/${panorama}/front.png')` }"></div>
        <div class="panorama-cube-face back" :style="{ 'background-image': `url('/img/panoramas/${panorama}/back.png')` }"></div>
        <div class="panorama-cube-face left" :style="{ 'background-image': `url('/img/panoramas/${panorama}/left.png')` }"></div>
        <div class="panorama-cube-face right" :style="{ 'background-image': `url('/img/panoramas/${panorama}/right.png')` }"></div>
        <div class="panorama-cube-face top" :style="{ 'background-image': `url('/img/panoramas/${panorama}/top.png')` }"></div>
        <div class="panorama-cube-face bottom" :style="{ 'background-image': `url('/img/panoramas/${panorama}/bottom.png')` }"></div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    panorama() {
      return this.$storage.state.panorama;
    },
    panoramaOverlay() {
      return this.$storage.state.panoramaOverlay;
    },
    panoramaHasOverlay() {
      return ['classic', 'aquatic', 'village_pillage', 'buzzy_bees'].includes(this.panorama);
    },
  },
};
</script>

<style lang="scss" scoped>
.panorama-container {
  position: fixed;
  z-index: -1;
  width: 100%;
  height: 100%;
}

.panorama-overlay {
  position: absolute;
  z-index: 1;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-image: linear-gradient(to bottom, rgba(255, 255, 255, .5) 40%, rgba(255, 255, 255, 0));
}

.panorama-cube-container {
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  overflow: hidden;
  perspective: 325px;

  &.blur {
    filter: blur(4px);
  }
}

.panorama-cube {
  position: absolute;
  top: 50%;
  left: 50%;
  margin: calc(-50 * var(--vmax, 1vmax)) 0 0 calc(-50 * var(--vmax, 1vmax));
  width: calc(100 * var(--vmax, 1vmax));
  height: calc(100 * var(--vmax, 1vmax));
  transform: translate3d(0px, 0px, 325px) rotateY(0deg);
  transform-style: preserve-3d;
  animation: panorama 120s linear infinite;
  will-change: transform;
}

.panorama-cube-face {
  position: absolute;
  width: inherit;
  height: inherit;
  background-repeat: no-repeat;
  background-size: cover;
  transform-style: preserve-3d;
  background-color: #000;

  &.front {
    transform: translateZ(calc(-50 * var(--vmax, 1vmax) + 2px));
  }

  &.back {
    transform: rotateY(180deg) translateZ(calc(-50 * var(--vmax, 1vmax) + 2px));
  }

  &.left {
    transform: rotateY(90deg) translateZ(calc(-50 * var(--vmax, 1vmax) + 2px));
  }

  &.right {
    transform: rotateY(-90deg) translateZ(calc(-50 * var(--vmax, 1vmax) + 2px));
  }

  &.top {
    transform: rotateX(-90deg) translateZ(calc(-50 * var(--vmax, 1vmax) + 2px));
  }

  &.bottom {
    transform: rotateX(90deg) translateZ(calc(-50 * var(--vmax, 1vmax) + 2px));
  }
}

@keyframes panorama {
  from {
    transform: translate3d(0px, 0px, 325px) rotateY(0deg);
  }
  to {
    transform: translate3d(0px, 0px, 325px) rotateY(360deg);
  }
}
</style>