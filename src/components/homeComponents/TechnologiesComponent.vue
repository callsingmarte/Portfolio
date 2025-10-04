<script setup lang="ts">
import {
  faReact,
  faAngular,
  faHtml5,
  faCss,
  faNodeJs,
  faLaravel,
  faSass,
  faBootstrap,
  faGithub,
  faDocker,
  faTrello,
  faJs,
  type IconDefinition,
  faGitAlt,
} from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import IconsComponent from '../IconsComponent.vue'

interface Technology {
  icon: IconDefinition
  name: string
  type: string
  color?: string
}

const technologies: Technology[] = [
  { icon: faReact, name: 'React', type: 'Framework', color: '#00d8ff' },
  { icon: faAngular, name: 'Angular', type: 'Framework', color: '#f637e3' },
  { icon: faHtml5, name: 'HTML5', type: 'Language', color: '#e54c21' },
  { icon: faCss, name: 'CSS3', type: 'Language', color: '#0b73b8' },
  { icon: faJs, name: 'JavaScript', type: 'Language', color: '#f7e025' },
  { icon: faNodeJs, name: 'Node.js', type: 'Framework', color: 'rgb(104, 159, 99)' },
  { icon: faLaravel, name: 'Laravel', type: 'Framework', color: 'rgb(255, 45, 32)' },
  { icon: faSass, name: 'Sass', type: 'Framework', color: 'rgb(207, 100, 154)' },
  { icon: faBootstrap, name: 'Bootstrap', type: 'Framework', color: '#6f11f5' },
  { icon: faGitAlt, name: 'Git', type: 'Version Control', color: '#f05639' },
  { icon: faGithub, name: 'GitHub', type: 'Version Control' },
  { icon: faDocker, name: 'Docker', type: 'Containerization', color: '#00153c' },
  { icon: faTrello, name: 'Trello', type: 'Collaboration', color: 'rgb(12 98 221)' },
]
const frameworks = technologies.filter((tech) => tech.type === 'Framework')
const languages = technologies.filter((tech) => tech.type === 'Language')
const versionControl = technologies.filter((tech) => tech.type === 'Version Control')
const containerization = technologies.filter((tech) => tech.type === 'Containerization')
const collaboration = technologies.filter((tech) => tech.type === 'Collaboration')

interface IconTech {
  icon: string
  size?: string[]
  color?: string[]
  type?: string
}

const iconsTech: IconTech[] = [
  { icon: 'AWS', size: ['3em', '3em'], type: 'Cloud' },
  { icon: 'Java', size: ['3em', '3em'], type: 'Language' },
  { icon: 'Net', size: ['3em', '3em'], type: 'Framework' },
  { icon: 'Azure', size: ['3em', '3em'], type: 'Cloud' },
  { icon: 'Teams', size: ['3em', '3em'], type: 'Collaboration' },
  { icon: 'PowerPlatform', size: ['3em', '3em'], type: 'Cloud' },
  { icon: 'Php', size: ['3em', '3em'], type: 'Language' },
  { icon: 'Python', size: ['3em', '3em'], type: 'Language' },
  { icon: 'Slack', size: ['3em', '3em'], type: 'Collaboration' },
  { icon: 'Spring', size: ['3em', '3em'], type: 'Framework' },
  { icon: 'Vue', size: ['3em', '3em'], type: 'Framework' },
]
const cloudIcons = iconsTech.filter((icon) => icon.type === 'Cloud')
const languageIcons = iconsTech.filter((icon) => icon.type === 'Language')
const frameworkIcons = iconsTech.filter((icon) => icon.type === 'Framework')
const collabIcons = iconsTech.filter((icon) => icon.type === 'Collaboration')
</script>

<template>
  <section>
    <h2>{{ $t('sections.technologies') }}</h2>
    <table class="table table-borderless">
      <tbody>
        <tr>
          <td class="align-middle">
            <h5>{{ $t('sections.frameworks') }}</h5>
          </td>
          <td class="text-center" v-for="tech in frameworks" :key="tech.name">
            <FontAwesomeIcon
              :icon="tech.icon"
              :style="{ color: tech.color, width: '3em', height: '3em' }"
            />
          </td>
          <td class="text-center" v-for="tech in frameworkIcons" :key="tech.icon">
            <IconsComponent :icon="tech.icon" :size="tech.size" :color="tech.color" />
          </td>
        </tr>
        <tr>
          <td class="align-middle">
            <h5>{{ $t('sections.languages') }}</h5>
          </td>
          <td class="text-center" v-for="tech in languages" :key="tech.name">
            <FontAwesomeIcon
              :icon="tech.icon"
              :style="{ color: tech.color, width: '3em', height: '3em' }"
            />
          </td>
          <td class="text-center" v-for="tech in languageIcons" :key="tech.icon">
            <IconsComponent :icon="tech.icon" :size="tech.size" :color="tech.color" />
          </td>
        </tr>
        <tr>
          <td class="align-middle">
            <h5>{{ $t('sections.cloud') }}</h5>
          </td>
          <td class="text-center" v-for="tech in cloudIcons" :key="tech.icon">
            <IconsComponent :icon="tech.icon" :size="tech.size" :color="tech.color" />
          </td>
        </tr>
        <tr>
          <td class="align-middle">
            <h5>{{ $t('sections.versionControl') }}</h5>
          </td>
          <td class="text-center" v-for="tech in versionControl" :key="tech.name">
            <FontAwesomeIcon
              :icon="tech.icon"
              :style="{ color: tech.color, width: '3em', height: '3em' }"
            />
          </td>
        </tr>
        <tr>
          <td class="align-middle">
            <h5>{{ $t('sections.containerization') }}</h5>
          </td>
          <td class="text-center" v-for="tech in containerization" :key="tech.name">
            <FontAwesomeIcon
              :icon="tech.icon"
              :style="{ color: tech.color, width: '3em', height: '3em' }"
            />
          </td>
        </tr>
        <tr>
          <td class="align-middle">
            <h5>{{ $t('sections.collaboration') }}</h5>
          </td>
          <td class="text-center" v-for="tech in collaboration" :key="tech.name">
            <FontAwesomeIcon
              :icon="tech.icon"
              :style="{ color: tech.color, width: '3em', height: '3em' }"
            />
          </td>
          <td class="text-center" v-for="tech in collabIcons" :key="tech.icon">
            <IconsComponent :icon="tech.icon" :size="tech.size" :color="tech.color" />
          </td>
        </tr>
      </tbody>
    </table>
  </section>
</template>
