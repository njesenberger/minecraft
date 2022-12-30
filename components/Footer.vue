<template>
  <footer class="footer">
    <p>
      {{ $t('watermark') }}
      <a class="footer-link" href="https://www.linkedin.com/in/nicolas-jesenberger/" target="_blank" rel="noopener noreferrer">Nicolas J.</a>
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
  padding: 8px;
  width: 100%;
  font-size: 24px;
  color: white;
  text-shadow: #3d3d3d .1em .1em;

  @media (max-width: 740px) {
    flex-direction: column;
  }
}

.footer-link {
  position: relative;

  &::after {
    content: '';
    position: absolute;
    right: 0;
    bottom: -.1em;
    width: 100%;
    height: .1em;
    background-color: white;
    box-shadow: .1em .1em #3d3d3d;
  }

  @include focus {
    background-color: rgba(#000, .9);
    color: #fcfc00;
    text-shadow: #3f3f00 .1em .1em;

    &::after {
      background-color: #fcfc00;
      box-shadow: .1em .1em #3e3e00;
    }
  }
}

.test {
  white-space: nowrap;
}
</style>