<template>
  <svg class="menu-splash-text-container" ref="splash-text-container">
    <text class="menu-splash-text-shadow" ref="splash-text-shadow" x="0" y="0" dx="2.4" dy="2.4" fill="#3e3e00"></text>
    <text class="menu-splash-text" ref="splash-text" x="0" y="0" fill="#fcfc00"></text>
  </svg>
</template>

<script>
import splashes from '~/static/splashes.txt';

export default {
  mounted() {
    this.initSplashText();
  },
  methods: {
    initSplashText() {
      const splashTexts = splashes.split('\n');
      const randomSplashText = splashTexts[Math.floor(Math.random() * splashTexts.length)];
      this.$refs['splash-text-shadow'].textContent = randomSplashText;
      this.$refs['splash-text'].textContent = randomSplashText;
      this.$nextTick().then(() => {
        const svg = this.$refs['splash-text-container'];
        const { x, y, width, height } = svg.getBBox();
        svg.setAttribute('viewBox', `${x} ${y} ${width} ${height}`);
        svg.style.height = `${Math.max(40 - randomSplashText.length / 2, 12)}%`;
        svg.style.animationPlayState = 'running';
      });
    },
  },
};
</script>

<style lang="scss" scoped>
.menu-splash-text-container {
  position: absolute;
  right: 20%;
  bottom: 0;
  z-index: 1;
  height: 0;
  transform: translateX(50%) scale(1) rotate(-20deg);
  overflow: visible;
  animation: splashText .48s ease-in-out infinite paused;
}

@keyframes splashText {
	0% {
		transform: translateX(50%) scale(1) rotate(-20deg);
	}
	50% {
		transform: translateX(50%) scale(1.05) rotate(-20deg);
	}
	100% {
		transform: translateX(50%) scale(1) rotate(-20deg);
	}
}

.menu-splash-text::selection {
  fill: #221dff;
}
</style>