<template>
  <audio id="music-player" ref="music-player" @ended="playNextTrack()"></audio>
</template>

<script>
const trackList = [
  '/audio/musics/menu1.mp3',
  '/audio/musics/menu2.mp3',
  '/audio/musics/menu3.mp3',
  '/audio/musics/menu4.mp3',
];

export default {
  methods: {
    initPlayer() {
      this.$refs['music-player'].src = this.getRandomTrack();
    },
    getRandomTrack() {
      const filteredTrackList = trackList.filter(track => track !== this.$refs['music-player'].src);
      return filteredTrackList[Math.floor(Math.random() * filteredTrackList.length)];
    },
    playNextTrack() {
      const currentTrackIndex = trackList.indexOf(this.$refs['music-player'].getAttribute('src'));
      const nextTrackIndex = (currentTrackIndex + 1) % trackList.length;
      this.$refs['music-player'].src = trackList[nextTrackIndex];
      this.$refs['music-player'].play();
    },
  },
  mounted() {
    this.initPlayer();
  },
};
</script>

<style lang="scss" scoped>

</style>