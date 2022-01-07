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
const panoramas = ['classic', 'aquatic', 'village_pillage', 'buzzy_bees', 'nether', 'caves_cliffs', 'caves_cliffs_2', 'off'];

const panorama = {
  classic: {
    en: 'Classic',
    fr: 'Classique',
  },
  aquatic: {
    en: 'Aquatic',
    fr: 'Aquatique',
  },
  village_pillage: {
    en: 'Village & Pillage',
    fr: 'Village et Pillage',
  },
  buzzy_bees: {
    en: 'Buzzy Bees',
    fr: 'Abeilles Bourdonnantes'
  },
  nether: {
    en: 'Nether',
    fr: 'Nether',
  },
  caves_cliffs: {
    en: 'Caves & Cliffs: I',
    fr: 'Grottes et Falaises : I',
  },
  caves_cliffs_2: {
    en: 'Caves & Cliffs: II',
    fr: 'Grottes et Falaises : II',
  },
  off: {
    en: 'OFF',
    fr: 'Non',
  },
};

export default {
  head: {
    title: 'Options',
  },
  computed: {
    currentPanorama() {
      return this.$storage.state.panorama;
    },
    currentPanoramaName() {
      return panorama[this.currentPanorama].en;
    },
    panoramaOverlay() {
      return this.$storage.state.panoramaOverlay;
    },
  },
  methods: {
    changePanorama() {
      const currentPanoramaIndex = panoramas.indexOf(this.currentPanorama);
      const nextPanoramaIndex = (currentPanoramaIndex + 1) % panoramas.length;
      const newPanorama = panoramas[nextPanoramaIndex];
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