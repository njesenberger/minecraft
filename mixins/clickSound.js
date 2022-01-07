export default {
  methods: {
    playClickSound() {
      const audio = new Audio('/audio/sounds/click.mp3');
      audio.play();
    },
  },
};