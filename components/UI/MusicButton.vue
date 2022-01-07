<template>
  <button :class="['music-button', { 'active': isMusicPlaying }]" @click="toggleMusic()" type="button">
    <span class="sr-only">Turn {{ isMusicPlaying ? 'off' : 'on' }} music</span>
  </button>
</template>

<script>
import clickSound from '~/mixins/clickSound';

export default {
  mixins: [clickSound],
  data() {
    return {
      isMusicPlaying: false,
    };
  },
  methods: {
    toggleMusic() {
      this.playClickSound();
      const musicPlayer = document.querySelector('#music-player');
      if (musicPlayer.paused) {
        musicPlayer.play().then(() => this.isMusicPlaying = true);
      }
      else {
        musicPlayer.pause();
        this.isMusicPlaying = false;
      };
    },
  },
};
</script>

<style lang="scss" scoped>
.music-button {
  display: inline-block;
  width: 2.25em;
  height: 2.25em;
  background-image: url('/img/music_button/off/default.png');
  background-size: cover;
  image-rendering: pixelated;
  image-rendering: -moz-crisp-edges;
  image-rendering: crisp-edges;

  @media (hover: hover) {
    &:hover {
      background-image: url('/img/music_button/off/hover.png');
    }
  }

  @include focus('.language-button') {
    background-image: url('/img/music_button/off/hover.png');
  }

  &.active {
    background-image: url('/img/music_button/on/default.png');

    @media (hover: hover) {
      &:hover {
        background-image: url('/img/music_button/on/hover.png');
      }
    }

    @include focus('.language-button') {
      background-image: url('/img/music_button/on/hover.png');
    }
  }
}
</style>