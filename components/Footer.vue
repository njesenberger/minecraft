<template>
  <footer class="footer">
    <p>
      {{ $t('watermark') }}
      <a class="footer-link" href="https://twitter.com/njesenberger" target="_blank" rel="noopener noreferrer">Nicolas Jesenberger</a>
    </p>
    <p>{{ $t('affiliation') }}</p>
  </footer>
</template>

<i18n>
{
  "en": {
    "watermark": "Made by",
    "affiliation": "Not affiliated with Mojang or Microsoft!"
  },
  "fr": {
    "watermark": "Fait par",
    "affiliation": "Non affilié à Mojang ou Microsoft !"
  }
}
</i18n>

<script>
export default {

}
</script>

<style lang="scss" scoped>
.footer {
  display: flex;
  justify-content: space-between;
  column-gap: 1.5em;
  padding: 8px;
  width: 100%;
  font-size: 24px;
  color: white;
  text-shadow: #3d3d3d .1em .1em;

  @media (max-width: 860px) {
    flex-direction: column;
  }
}

.footer-link {
  position: relative;
  text-decoration-line: underline;
  text-underline-offset: .1em;
  text-decoration-thickness: .1em;

  @include focus {
    background-color: rgba(#000, .9);
    color: #fcfc00;
    text-shadow: #3f3f00 .1em .1em;
  }
}

.test {
  white-space: nowrap;
}
</style>
