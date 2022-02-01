<template>
  <main>
    <div class="options-container">
      <PrimaryButton @click.native="changePanorama()" type="button">Panorama: {{ currentPanoramaName }}</PrimaryButton>
      <PrimaryButton @click.native="togglePanoramaOverlay()" type="button">Panorama Overlay: {{ panoramaOverlay ? 'ON' : 'OFF' }}</PrimaryButton>
    </div>
    <PrimaryButton class="done-button" to="/">Done</PrimaryButton>
  </main>
</template>

<script>
const panoramas = [
  {
    en: 'Classic',
    fr: 'Classique',
    value:'classic',
  },
  {
    en: 'Aquatic',
    fr: 'Aquatique',
    value:'aquatic',
  },
  {
    en: 'Village & Pillage',
    fr: 'Village et Pillage',
    value:'village_pillage',
  },
  {
    en: 'Buzzy Bees',
    fr: 'Abeilles Bourdonnantes',
    value:'buzzy_bees',
  },
  {
    en: 'Nether',
    fr: 'Nether',
    value:'nether',
  },
  {
    en: 'Caves & Cliffs: I',
    fr: 'Grottes et Falaises : I',
    value:'caves_cliffs',
  },
  {
    en: 'Caves & Cliffs: II',
    fr: 'Grottes et Falaises : II',
    value:'caves_cliffs_2',
  },
  {
    en: 'OFF',
    fr: 'Non',
    value:'off',
  },
];

export default {
  head: {
    title: 'Options',
  },
  computed: {
    currentPanorama() {
      return this.$storage.state.panorama;
    },
    currentPanoramaName() {
      return panoramas.find(panorama => panorama.value === this.currentPanorama).en;
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