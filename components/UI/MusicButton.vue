<template>
  <button :class="['music-button', { 'active': isMusicPlaying }]" @click="toggleMusic()" type="button">
    <span class="sr-only">Toggle music</span>
  </button>
</template>

<script>
import clickSound from '~/mixins/clickSound';
let musicPlayer;

export default {
  mixins: [clickSound],
  data() {
    return {
      isMusicPlaying: false,
    };
  },
  mounted() {
    this.initMusicPlayer();
  },
  methods: {
    initMusicPlayer() {
      musicPlayer = document.querySelector('#music-player');

      if ('mediaSession' in navigator) {
        navigator.mediaSession.setActionHandler('play', this.playMusic);
        navigator.mediaSession.setActionHandler('pause', this.pauseMusic);
      };
    },
    toggleMusic() {
      this.playClickSound();
      musicPlayer.paused ? this.playMusic() : this.pauseMusic();
    },
    playMusic() {
      musicPlayer.play().then(() => this.isMusicPlaying = true);
    },
    pauseMusic() {
      musicPlayer.pause();
      this.isMusicPlaying = false;
    },
  },
};
</script>

<style lang="scss" scoped>
.music-button {
  display: inline-block;
  width: 2.25em;
  height: 2.25em;
  background-image: url('/img/music-button-sprites.jpg');
  background-size: 200%;
  image-rendering: pixelated;
  image-rendering: -moz-crisp-edges;
  image-rendering: crisp-edges;
  cursor: default;

  &.active {
    background-position-y: 100%;
  }

  @media (hover: hover) {
    &:hover {
      background-position-x: 100%;
    }
  }

  @include focus {
    background-position-x: 100%;
  }
}
</style>