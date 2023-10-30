<template>
  <main>
    <div class="options-container">
      <PrimaryButton class="options-button" @click.native="changePanorama()" type="button">{{ $t('panorama') }} {{ currentPanoramaName }}</PrimaryButton>
      <PrimaryButton class="options-button" @click.native="togglePanoramaOverlay()" type="button">{{ $t('panoramaOverlay') }} {{ panoramaOverlay ? $t('on') : $t('off') }}</PrimaryButton>
    </div>
    <PrimaryButton class="done-button" :to="localePath('/')">{{ $t('done') }}</PrimaryButton>
  </main>
</template>

<i18n>
{
  "en": {
    "panorama": "Panorama:",
    "panoramaOverlay": "Panorama Overlay:",
    "done": "Done",
    "on": "ON",
    "off": "OFF"
  },
  "fr": {
    "panorama": "Panorama :",
    "panoramaOverlay": "Overlay du panorama :",
    "done": "Terminé",
    "on": "Oui",
    "off": "Non"
  }
}
</i18n>

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
    en: 'Caves & Cliffs I',
    fr: 'Cavernes et Falaises I',
    value:'caves_cliffs',
  },
  {
    en: 'Caves & Cliffs II',
    fr: 'Cavernes et Falaises II',
    value:'caves_cliffs_2',
  },
  {
    en: 'The Wild Update',
    fr: 'La mise à jour sauvage',
    value:'the_wild_update',
  },
  {
    en: 'OFF',
    fr: 'Non',
    value:'off',
  },
];

export default {
  head: {
    title: 'Options...',
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
  padding: 0 20px;
}

.options-container {
  display: grid;
  grid-template-columns: max(380px) max(380px);
  justify-items: center;
  column-gap: .4em;
  row-gap: .4em;

  @media (max-width: 840px) {
    grid-template-columns: minmax(0, 480px);
  }
}

.done-button {
  width: min(100%, 480px);
}
</style>
