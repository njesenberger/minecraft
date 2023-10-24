<template>
  <main>
    <h1 class="language-page-title">{{ $t('title') }}</h1>
    <div class="languagues-container">
      <button
        :class="['language-button', { 'active': $root.$i18n.locale === locale.code }]"
        v-for="locale in $i18n.locales"
        :key="locale.iso"
        @click="$root.$i18n.locale = locale.code"
        type="button"
      >
        {{ locale.name }}
      </button>
    </div>
    <PrimaryButton class="done-button" :to="localePath('/')">{{ $t('done') }}</PrimaryButton>
  </main>
</template>

<i18n>
{
  "en": {
    "title": "Language...",
    "done": "Done"
  },
  "fr": {
    "title": "Langue...",
    "done": "Terminé"
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
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: auto 1fr auto;
  justify-items: center;
}

.language-page-title {
  margin-top: 40px;
}

.languagues-container {
  display: flex;
  flex-grow: 1;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 20px;
  padding: 0 20px;
  width: 100%;
  background-color: rgba(black, 0.6);
  box-shadow: inset 0 4px 8px black, inset 0 -4px 8px black;
}

.language-button {
  padding: .2em 0 .4em;
  border-width: .1em;
  border-style: solid;
  border-color: transparent;
  width: 100%;
  max-width: 540px;
  text-align: center;

  &.active {    
    border-color: white;
    background-color: black;
  }
}

.done-button {
  margin: 40px 0;
}
</style>