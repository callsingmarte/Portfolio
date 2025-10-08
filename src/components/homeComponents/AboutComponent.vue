<template>
  <section>
    <h2 class="text-uppercase">{{ $t('about.title') }}</h2>
    <article>
      <div class="row">
        <div class="col-3">
          <img
            src="/src/assets/images/Foto_MartinSanchez.jpg"
            class="img-fluid border rounded"
            width="300px"
          />
        </div>
        <div class="col">
          <p>{{ $t('about.description') }}</p>
          <div class="row">
            <div class="col-4">
              <span>{{ $t('about.contact') }}</span>
              <a
                href="https://www.linkedin.com/in/martín-sánchez-malate"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon
                  :icon="faLinkedin"
                  size="xl"
                  style="color: var(--color-linkedin)"
                />
              </a>
            </div>
            <div class="col-6">
              <span>{{ $t('about.check_my_projects') }}</span>
              <a href="https://github.com/callsingmarte" target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon :icon="faGithub" size="xl" style="color: #000000" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </article>
  </section>
</template>

<script setup lang="ts">
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
</script>

<style lang="scss" scoped>
@use '@/assets/baseStyles/base.scss';
</style>
