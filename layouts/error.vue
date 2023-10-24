<template>
  <main>
    <h1 class="language-page-title">{{ $t('title') }}</h1>
    <PrimaryButton to="/">{{ $t('back') }}</PrimaryButton>
  </main>
</template>

<i18n>
  {
    "en": {
      "title": "404 Error — Page not found",
      "back": "Back"
    },
    "fr": {
      "title": "Erreur 404 - Page non trouvée",
      "back": "Retour"
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
  computed: {
    currentPanorama() {
      return this.$storage.state.panorama;
    },
    currentPanoramaName() {
      return panoramas.find(panorama => panorama.value === this.currentPanorama)[this.$i18n.locale];
    },
    panoramaOverlay() {
      return this.$storage.state.panoramaOverlay;
    },
  },
  methods: {
    changePanorama() {
      const currentPanoramaIndex = panoramas.findIndex(panorama => panorama.value === this.currentPanorama);
      const nextPanoramaIndex = (currentPanoramaIndex + 1) % panoramas.length;
      const newPanorama = panoramas[nextPanoramaIndex].value;
      this.$storage.setUniversal('panorama', newPanorama);
    },
    togglePanoramaOverlay() {
      this.$storage.setUniversal('panoramaOverlay', !this.panoramaOverlay);
    },
  },
};
</script>

<style lang="scss" scoped>
main {
  display: grid;
  place-items: center;
}

.options-container {
  display: grid;
  grid-template-columns: max(380px) max(380px);
  column-gap: .4em;
  row-gap: .4em;
}

.done-button {
  width: 480px;
}
</style>
