<template>
  <h2 class="text-uppercase">{{ $t('sections.experience') }}</h2>
  <p>{{ $t('sections.experienceDescription') }}</p>
  <article
    class="experience row h-100"
    v-for="experience in experiences"
    :key="experience.key.index"
  >
    <div class="experience-img text-center col-md col-sm-12 col-12">
      <img
        class="img-thumbnail img-fluid"
        width="300px"
        :src="experience.key.companyLogo"
        alt="Company Logo"
      />
      <p class="text-center">{{ experience.key.company }}</p>
    </div>
    <div class="experience-container col">
      <div class="experience-header">
        <h2>{{ experience.key.job_title }}</h2>
        <p>{{ experience.key.duration }}</p>
      </div>
      <div class="experience-details">
        <p>
          {{
            props.shortDescription ? experience.key.shortDescription : experience.key.description
          }}
        </p>
      </div>
    </div>
  </article>
</template>

<script setup lang="ts">
const props = defineProps({ shortDescription: Boolean })
import { useI18n } from 'vue-i18n'
const { t } = useI18n()

interface ExperienceList {
  [key: string]: {
    index: number
    job_title: string
    description: string
    shortDescription: string
    company: string
    companyLogo: string
    duration: string
  }
}

interface ExperienceLogos {
  [key: string]: {
    logo: string
  }
}

const experienceKeys = ['internCampusYFormacion', 'gamersfy', 'internIlion']

const experienceLogos: ExperienceLogos = {
  internCampusYFormacion: {
    logo: '/src/assets/images/campusyformacionLogo.png',
  },
  gamersfy: {
    logo: '/src/assets/images/gamersfyLogo.png',
  },
  internIlion: {
    logo: '/src/assets/images/ilionanimationstudios_logo.png',
  },
}

const experiences: ExperienceList[] = []
experienceKeys.forEach((key, index) => {
  experiences.push({
    key: {
      index,
      job_title: t(`experience.${key}.job_title`),
      duration: t(`experience.${key}.duration`),
      description: t(`experience.${key}.description`),
      shortDescription: t(`experience.${key}.shortDescription`),
      company: t(`experience.${key}.company`),
      companyLogo: experienceLogos[key].logo,
    },
  })
})
</script>
<style scoped lang="scss">
.experience-img img {
  width: 300px;
  height: 300px;
  object-fit: cover;
}
</style>
