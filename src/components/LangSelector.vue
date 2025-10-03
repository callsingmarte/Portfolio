<template>
  <div class="lang-selector-dropdown">
    <button class="dropbtn">
      <img
        :src="`${languages[locale].flagUrl}`"
        :alt="`Flag of ${languages[locale].flagName}`"
        width="50px"
      />
      <span>{{ languages[locale].name }}</span>
    </button>
    <div class="lang-selector">
      <li v-for="lang in availableLocales" :key="lang" class="lang-option">
        <button @click="locale = lang" class="lang-option-button">
          <img
            :src="`${languages[lang].flagUrl}`"
            :alt="`Flag of ${languages[lang].flagName}`"
            width="50px"
            height="30px"
          />
          <span>{{ languages[lang].name }}</span>
        </button>
      </li>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useI18n } from 'vue-i18n'
import { computed } from 'vue'
const { t, locale, availableLocales } = useI18n()

interface Language {
  [key: string]: {
    code: string
    name: string
    flagName: string
    flagUrl: string
  }
}

const languages = computed<Language>(() => ({
  es: {
    code: 'es',
    name: t('languages.spanish'),
    flagName: t('countries.spain'),
    flagUrl: 'https://cdn.countryflags.com/thumbs/spain/flag-800.png',
  },
  en: {
    code: 'en',
    name: t('languages.english'),
    flagName: t('countries.united_kingdom'),
    flagUrl: 'https://cdn.countryflags.com/thumbs/united-kingdom/flag-800.png',
  },
  fr: {
    code: 'fr',
    name: t('languages.french'),
    flagName: t('countries.france'),
    flagUrl: 'https://cdn.countryflags.com/thumbs/france/flag-800.png',
  },
}))
</script>
<style scoped lang="scss">
@use '@/assets/baseStyles/base.scss';
span {
  font-family: 'Courier New', Courier, monospace;
  font-size: 16px;
  color: var(--color-text);
}
.lang-selector-dropdown {
  position: absolute;
  display: inline-block;
  right: 50px;
  &:hover .lang-selector {
    display: block;
  }
}
.dropbtn {
  background-color: var(--color-background);
  color: var(--color-text);
  padding: 10px;
  font-size: 16px;
  border: none;
  cursor: pointer;
  border-radius: 5px;
  width: 100%;
  display: flex;
  align-items: center;
  &:hover {
    background-color: var(--color-secondary);
  }
  span {
    margin-left: 10px;
  }
}

.lang-selector {
  display: none;
  position: absolute;
  min-width: 200px;
  box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
  z-index: 1;
  list-style: none;
  padding: 5px;
  gap: 12px;
}

.lang-option {
  margin-bottom: 3px;
  &:hover {
    opacity: 0.8;
  }
  span {
    margin-left: 10px;
    vertical-align: middle;
  }
  .lang-option-button {
    cursor: pointer;
    display: flex;
    align-items: center;
    background-color: var(--color-background);
    color: var(--color-text);
    border: none;
    padding: 10px;
    width: 100%;
    text-align: left;
    border-radius: 5px;
    &:hover {
      background-color: var(--color-secondary);
    }
  }
}
</style>
