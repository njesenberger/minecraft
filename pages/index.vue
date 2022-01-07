<template>
  <main>
    <div class="menu-logo-container">
      <img class="menu-logo" src="/img/minecraft-logo.png" alt="">
      <q class="menu-splash-text" ref="splash-text">{{ $options.randomSplashText }}</q>
    </div>
    <nav class="menu-container">
      <div class="menu-top-container">
        <PrimaryButton class="menu-link" to="/singleplayer">Singleplayer</PrimaryButton>
        <PrimaryButton class="menu-link" to="/">Multiplayer</PrimaryButton>
        <PrimaryButton class="menu-link" href="https://www.minecraft.net" target="_blank" rel="noopener noreferrer">Minecraft Website</PrimaryButton>
      </div>
      <div class="menu-bottom-container">
        <LanguageButton />
        <div class="menu-double-links-container">
          <PrimaryButton class="menu-link" to="/options">Options...</PrimaryButton>
          <PrimaryButton class="menu-link" to="/">Quit game</PrimaryButton>
        </div>
        <MusicButton />
      </div>
    </nav>
    <Footer />
    <Panorama />
  </main>
</template>

<script>
import splashes from '@/static/splashes.txt';

const splashTexts = splashes.split('\n');
const randomSplashText = splashTexts[Math.floor(Math.random() * splashTexts.length)];
const splashTextSize = `${Math.max(48 - randomSplashText.length, 18)}px`;

export default {
  randomSplashText,
  head: {
    title: 'Title Screen',
  },
  mounted() {
    this.setSplashTextSize();
  },
  methods: {
    setSplashTextSize() {
      this.$refs['splash-text'].style.fontSize = splashTextSize;
    },
  },
};
</script>

<style lang="scss" scoped>
main {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  position: relative;
}

.menu-logo-container {
  position: relative;
  width: fit-content;

  @media (max-width: 780px) {
    transform: scale(.8);
  }
}

.menu-logo {
  margin-top: 60px;
  width: 680px;
  image-rendering: pixelated;
  image-rendering: -moz-crisp-edges;
  image-rendering: crisp-edges;
}

.menu-splash-text {
  display: inline-block;
  position: absolute;
  right: 20%;
  bottom: 0;
  transform: translateX(50%) scale(1) rotate(-20deg);
  font-size: 24px;
  color: #ff0;
  text-shadow: #3f3f00 .1em .1em;
  white-space: nowrap;
  quotes: none;
  animation: splashText .48s ease-in-out infinite;
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

.menu-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
}

.menu-top-container {
  display: grid;
  grid-template-columns: 1fr;
  column-gap: .4em;
  row-gap: .4em;
  width: 100%;
  max-width: 520px;
}

.menu-bottom-container {
  display: grid;
  grid-template-columns: auto max(520px) auto;
  column-gap: .4em;
  margin-top: 2em;
}

.menu-double-links-container {
  display: grid;
  grid-template-columns: 1fr 1fr;
  column-gap: .4em;
  width: 100%;
  max-width: 520px;
}

.menu-link {
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 1em .24em;
  height: 2.25em;
  background-image: url('/img/button/default/left.png'), url('/img/button/default/right.png'), url('/img/button/default/inner.png');
  background-size: contain, contain, auto 100%;
  background-position: left, right, center;
  background-repeat: no-repeat, no-repeat, repeat;
  font-size: 24px;
  color: white;
  text-align: center;
  text-shadow: #3f3f3f .1em .1em;
  image-rendering: pixelated;
  image-rendering: -moz-crisp-edges;
  image-rendering: crisp-edges;
  cursor: default;

  @media (hover: hover) {
    &:hover {
      background-image: url('/img/button/hover/left.png'), url('/img/button/hover/right.png'), url('/img/button/hover/inner.png');
    }
  }
}
</style>