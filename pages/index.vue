<template>
  <main>
    <div class="menu-logo-container">
      <img class="menu-logo" ref="logo" src="/img/minecraft-logo.png" alt="Minecraft">
      <!-- <q class="menu-splash-text" ref="splash-text"></q> -->
      <!-- <svg class="menu-splash-text-container" ref="splash-text-container">
        <text class="menu-splash-text-shadow" ref="splash-text-shadow" x="0" y="0" dx="2.4" dy="2.4" fill="#3e3e00"></text>
        <text class="menu-splash-text" ref="splash-text" x="0" y="0" fill="#fcfc00"></text>
      </svg> -->
      <SplashText />
    </div>
    <nav class="menu-container">
      <div class="menu-top-container">
        <PrimaryButton class="menu-link" to="/singleplayer">{{ $t('singleplayer') }}</PrimaryButton>
        <PrimaryButton class="menu-link" type="button">{{ $t('multiplayer') }}</PrimaryButton>
        <PrimaryButton class="menu-link" href="https://www.minecraft.net" target="_blank" rel="noopener noreferrer">{{ $t('website') }}</PrimaryButton>
      </div>
      <div class="menu-bottom-container">
        <LanguageButton class="menu-language-button" />
        <div class="menu-double-links-container">
          <PrimaryButton class="menu-link" :to="localePath('/options')">{{ $t('options') }}</PrimaryButton>
          <PrimaryButton class="menu-link" to="/">{{ $t('quit') }}</PrimaryButton>
        </div>
        <MusicButton class="menu-music-button" />
      </div>
    </nav>
    <Footer />
    <Panorama />
  </main>
</template>

<i18n>
{
  "en": {
    "title": "Title Screen",
    "singleplayer": "Singleplayer",
    "multiplayer": "Multiplayer",
    "website": "Minecraft Official Site",
    "options": "Options...",
    "quit": "Quit game"
  },
  "fr": {
    "title": "Écran titre",
    "singleplayer": "Solo",
    "multiplayer": "Multijoueur",
    "website": "Site officiel Minecraft",
    "options": "Options...",
    "quit": "Quitter le jeu"
  }
}
</i18n>

<script>
export default {
  head() {
    return {
      title: this.$t('title'),
    };
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
  margin: 60px 20px 0;
  max-width: 100%;
}

.menu-logo {
  width: 680px;
  max-width: 100%;
  image-rendering: pixelated;
  image-rendering: -moz-crisp-edges;
  image-rendering: crisp-edges;
}

// .menu-splash-text-container {
//   position: absolute;
//   right: 20%;
//   bottom: 0;
//   z-index: 1;
//   height: 0;
//   transform: translateX(50%) scale(1) rotate(-20deg);
//   overflow: visible;
//   animation: splashText .48s ease-in-out infinite paused;
// }

// @keyframes splashText {
// 	0% {
// 		transform: translateX(50%) scale(1) rotate(-20deg);
// 	}
// 	50% {
// 		transform: translateX(50%) scale(1.05) rotate(-20deg);
// 	}
// 	100% {
// 		transform: translateX(50%) scale(1) rotate(-20deg);
// 	}
// }

// .menu-splash-text::selection {
//   fill: #221dff;
// }

.menu-container {
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  // margin-top: 120px;
  padding: 0 20px;
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
  row-gap: .4em;
  margin-top: 2em;

  @media (max-width: 700px) {
    grid-template-columns: 1fr 1fr;
    max-width: 520px;
    width: 100%;
  }
}

.menu-language-button {
}

.menu-double-links-container {
  display: grid;
  grid-template-columns: 1fr 1fr;
  column-gap: .4em;
  width: 100%;
  max-width: 520px;

  @media (max-width: 700px) {
    grid-area: 1 / 1 / 2 / 3;
  }
}

.menu-music-button {
  justify-self: end;
}
</style>