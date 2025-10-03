<template>
  <h2>{{ $t('sections.education') }}</h2>
  <p>{{ $t('sections.educationDescription') }}</p>
  <article class="education row h-100" v-for="education in educations" :key="education.key.index">
    <div class="text-center education-img col-md col-sm-12 col-12">
      <img
        class="img-fluid img-thumbnail"
        :src="education.key.institutionLogo"
        alt="Institution Logo"
      />
      <p class="text-center">{{ education.key.institution }}</p>
    </div>
    <div class="education-container col">
      <div class="education-header">
        <h2>{{ education.key.degree }}</h2>
        <p>{{ education.key.duration }}</p>
      </div>
      <div class="education-details">
        <p>{{ education.key.description }}</p>
      </div>
    </div>
  </article>
</template>
<script setup lang="ts">
const props = defineProps({ maxEducationItems: Number })
import { useI18n } from 'vue-i18n'
const { t } = useI18n()
interface Education {
  key: {
    index: number
    degree: string
    duration: string
    description: string
    institution: string
    institutionLogo: string
  }
}
const educationKeys = [
  'masterFullStackTajamar',
  'cfgsDawNelson',
  'cfgsDamJuanDeLaCierva',
  'cfgsAjeiUtad',
  'bachilleratoCiencias',
]
const educations: Education[] = []

educationKeys.forEach((key, index) => {
  educations.push({
    key: {
      index,
      degree: t(`education.${key}.degree`),
      duration: t(`education.${key}.duration`),
      description: t(`education.${key}.description`),
      institution: t(`education.${key}.institution`),
      institutionLogo: t(`education.${key}.institutionLogo`),
    },
  })
})

educations.splice(props.maxEducationItems || educations.length)
</script>
<style scoped lang="scss">
.education-img img {
  width: 300px;
  height: 300px;
  object-fit: cover;
}
</style>
