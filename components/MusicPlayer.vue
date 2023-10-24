<template>
  <audio id="music-player" @ended="playNextTrack()"></audio>
</template>

<script>
let musicPlayer;

const trackList = [
  '/audio/musics/menu1.mp3',
  '/audio/musics/menu2.mp3',
  '/audio/musics/menu3.mp3',
  '/audio/musics/menu4.mp3',
];

export default {
  methods: {
    initMusicPlayer() {
      musicPlayer = document.querySelector('#music-player')
      musicPlayer.src = this.getRandomTrack();

      if ('mediaSession' in navigator) {
        navigator.mediaSession.setActionHandler('previoustrack', () => {
          musicPlayer.currentTime < 3 ? this.playPreviousTrack() : musicPlayer.currentTime = 0;
        });
        navigator.mediaSession.setActionHandler('nexttrack', this.playNextTrack);
      };
    },
    getRandomTrack() {
      return trackList[Math.floor(Math.random() * trackList.length)];
    },
    playPreviousTrack() {
      const currentTrackIndex = this.getCurrentTrackIndex();
      const previousTrackIndex = (currentTrackIndex === 0) ? trackList.length : (currentTrackIndex - 1);
      musicPlayer.src = trackList[previousTrackIndex];
      musicPlayer.play();
    },
    playNextTrack() {
      const currentTrackIndex = this.getCurrentTrackIndex();
      const nextTrackIndex = (currentTrackIndex + 1) % trackList.length;
      musicPlayer.src = trackList[nextTrackIndex];
      musicPlayer.play();
    },
    getCurrentTrackIndex() {
      return trackList.indexOf(musicPlayer.getAttribute('src'));
    }
  },
  mounted() {
    this.initMusicPlayer();
  },
};
</script>

<style lang="scss" scoped>

</style>
