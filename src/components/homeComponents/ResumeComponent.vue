<template>
  <section>
    <TechnologiesComponent />
    <div class="row gap-3 mt-3" id="resume">
      <h2>{{ $t('sections.resume') }}</h2>
      <p>{{ $t('sections.resumeDescription') }}</p>
      <section class="col-lg col-md-12 col-sm-12 col-12 card p-3 shadow">
        <ExperienceComponent :shortDescription="true" />
      </section>
      <section class="col-lg col-md-12 col-sm-12 col-12 card p-3 shadow">
        <EducationComponent :maxEducationItems="3" />
        <RouterLink to="/education" class="btn btn-primary">Ver Más</RouterLink>
      </section>
    </div>
    <CertificationsComponent />
  </section>
</template>

<script setup lang="ts">
import TechnologiesComponent from './TechnologiesComponent.vue'
import ExperienceComponent from './ExperienceComponent.vue'
import EducationComponent from './EducationComponent.vue'
import CertificationsComponent from './CertificationsComponent.vue'
</script>
<style scoped lang="scss"></style>
