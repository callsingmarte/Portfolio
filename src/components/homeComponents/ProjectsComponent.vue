<script setup lang="ts">
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

const projectsList = [
  {
    key: {
      index: 0,
      title: 'Project One',
      description: 'Description of project one.',
      image: 'https://via.placeholder.com/150',
      name: 'Project One',
      url: 'https://github.com/callsingmarte/project-one',
    },
  },
  {
    key: {
      index: 1,
      title: 'Project Two',
      description: 'Description of project two.',
      image: 'https://via.placeholder.com/150',
      name: 'Project Two',
      url: 'https://github.com/callsingmarte/project-two',
    },
  },
]
</script>

<template>
  <section>
    <h2 class="text-uppercase">{{ $t('sections.projects') }}</h2>
    <p>{{ $t('sections.projectsDescription') }}</p>
    <div class="row">
      <article v-for="projects in projectsList" :key="projects.key.index" class="col project">
        <div class="row">
          <div class="col project-img">
            <img :src="projects.key.image" alt="Project Image" />
            <p>{{ projects.key.name }}</p>
          </div>
          <div class="col project-container">
            <h3>{{ projects.key.title }}</h3>
            <p>{{ projects.key.description }}</p>
            <a :href="projects.key.url" target="_blank">
              <FontAwesomeIcon :icon="faGithub" />
              {{ $t('projects.viewProject') }}</a
            >
          </div>
        </div>
      </article>
    </div>
  </section>
</template>
