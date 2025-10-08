<template>
  <section class="mt-5">
    <h2 class="text-uppercase">{{ $t('sections.certifications') }}</h2>
    <p>{{ $t('sections.certificationsDescription') }}</p>
    <div class="row">
      <article
        class="certification col border rounded shadow p-3 m-2"
        v-for="certification in certifications"
        :key="certification.key.index"
      >
        <div class="text-center">
          <a :href="certification.key.url" target="_blank">
            <img :src="certification.key.logo" alt="Certification Logo" class="certification-img" />
            <em class="text-block text-muted">{{ certification.key.issuer }}</em>
          </a>
        </div>
        <div class="certification-container">
          <div class="certification-header">
            <h2>{{ certification.key.title }}</h2>
            <div class="d-flex justify-content-between">
              <p class="text-success">{{ certification.key.date }}</p>
              <p class="text-danger">{{ certification.key.expiration }}</p>
            </div>
          </div>
          <div class="certification-details">
            <p>{{ certification.key.description }}</p>
            <a :href="certification.key.url" target="_blank">{{
              $t('common.go_to_certification')
            }}</a>
          </div>
        </div>
      </article>
    </div>
  </section>
</template>
<script setup lang="ts">
import { useI18n } from 'vue-i18n'
const { t } = useI18n()

interface Certification {
  key: {
    index: number
    title: string
    date: string
    expiration: string
    description: string
    issuer: string
    logo: string
    url: string
  }
}

interface CertificationLogo {
  [key: string]: {
    logo: string
  }
}

const certificationKeys = ['AzureDeveloperAssociate', 'AwsDeveloperAssociate', 'Pl400']
const certificationLogos: CertificationLogo = {
  AzureDeveloperAssociate: {
    logo: 'https://learn.microsoft.com/es-es/media/learn/certification/badges/microsoft-certified-associate-badge.svg',
  },
  AwsDeveloperAssociate: {
    logo: '/src/assets/images/awsDevAssociateBadge.png',
  },
  Pl400: {
    logo: 'https://learn.microsoft.com/es-es/media/learn/certification/badges/microsoft-certified-associate-badge.svg',
  },
}
const certifications: Certification[] = []
certificationKeys.forEach((key, index) => {
  certifications.push({
    key: {
      index,
      title: t(`certifications.${key}.title`),
      date: t(`certifications.${key}.date`),
      expiration: t(`certifications.${key}.expiration`),
      description: t(`certifications.${key}.description`),
      issuer: t(`certifications.${key}.issuer`),
      logo: certificationLogos[key].logo,
      url: t(`certifications.${key}.url`),
    },
  })
})
</script>
<style scoped lang="scss">
.text-block {
  display: block;
  margin-top: 0.5rem;
}
.certification-img {
  max-width: 300px;
}
</style>
