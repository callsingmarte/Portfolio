<script setup lang="ts">
import AboutComponent from '@/components/homeComponents/AboutComponent.vue'
import ProjectsComponent from '@/components/homeComponents/ProjectsComponent.vue'
import ResumeComponent from '@/components/homeComponents/ResumeComponent.vue'
import LangSelector from '@/components/LangSelector.vue'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons'
import { faMoon, faSun } from '@fortawesome/free-regular-svg-icons'
import { ref } from 'vue'

const isDarkMode = ref(false)

function darkTheme() {
  isDarkMode.value = true
  document.documentElement.setAttribute('data-theme', 'dark')
}
function lightTheme() {
  isDarkMode.value = false
  document.documentElement.setAttribute('data-theme', 'light')
}

function isDarkModeActive(darkIcon: boolean) {
  if (darkIcon) return isDarkMode.value ? 'active-icon' : 'disabled-icon'
  else return isDarkMode.value ? 'disabled-icon' : 'active-icon'
}
</script>

<template>
  <header>
    <div class="header-content">
      <div class="header-profile">
        <h1>Martin Sanchez</h1>
        <div class="social-icons">
          <a
            href="https://www.linkedin.com/in/martín-sánchez-malate"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon :icon="faLinkedin" size="xl" style="color: var(--color-linkedin)" />
          </a>
          <a href="https://github.com/callsingmarte" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon :icon="faGithub" size="xl" style="color: var(--color-github)" />
          </a>
        </div>
      </div>
      <nav>
        <a href="#home">{{ $t('nav.home') }}</a>
        <a href="#about">{{ $t('nav.about') }}</a>
        <a href="#resume">{{ $t('nav.resume') }}</a>
        <a href="#projects">{{ $t('nav.projects') }}</a>
      </nav>
      <div class="theme-toggle">
        <div class="toggle-icons">
          <button :class="['btn', isDarkModeActive(false)]" @click="lightTheme">
            <FontAwesomeIcon :icon="faSun" size="xl" style="color: var(--color-sun)" />
          </button>
          <button :class="['btn', isDarkModeActive(true)]" @click="darkTheme">
            <FontAwesomeIcon :icon="faMoon" size="xl" style="color: var(--color-moon)" />
          </button>
        </div>
      </div>
      <LangSelector />
    </div>
  </header>
  <main class="container mt-8">
    <AboutComponent />
    <ResumeComponent />
    <ProjectsComponent />
  </main>
</template>

<style lang="scss" scoped>
@use '@/assets/baseStyles/base.scss';
.mt-8 {
  margin-top: 80px;
}

@media only screen and (min-width: 992px) {
  .theme-toggle {
    cursor: pointer;
    position: absolute;
    right: 15%;

    & .toggle-icons {
      padding: 2px;
      display: flex;
      gap: 10px;
      color: var(--color-text);
      align-items: center;
      border: 1px solid #000000;
      border-radius: 10px;
      & .active-icon {
        color: #ffffff;
        opacity: 1;
      }
      & .disabled-icon {
        color: #111111;
        opacity: 0.5;
      }
    }
  }

  header {
    width: 100%;
    position: fixed;
    top: 0px;
    left: 0;
    right: 0;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 0 auto;
    padding: 1.5rem;
    background-color: var(--color-menu-background);
    z-index: 1000;
  }
  .header-content {
    max-width: 1200px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 1rem;
    .header-profile {
      position: absolute;
      left: 50px;
      display: flex;
      align-items: center;
      gap: 1rem;
      h1 {
        font-size: 1.5rem;
        margin: 0;
        color: var(--color-text);
        display: block;
      }
    }
  }
  .social-icons {
    display: flex;
    gap: 1rem;
    font-size: 1.5rem;
    color: var(--color-text);
    a:hover {
      color: var(--color-secondary);
      opacity: 0.8;
    }
  }

  nav {
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    display: flex;
    align-items: center;
    gap: 1rem;
  }

  a {
    font-family: 'Courier New', Courier, monospace;
    color: var(--color-text);
    text-decoration: none;
    &:hover {
      text-decoration: underline;
    }
  }
}
@media only screen and (min-width: 768px) and (max-width: 992px) {
  header {
    width: 100%;
    position: fixed;
    top: 15px;
    left: 0;
    right: 0;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 0 auto;
    padding: 1rem;
    background-color: var(--color-background);
    z-index: 1000;
  }
  .header-content {
    max-width: 1200px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 1rem;
    .header-profile {
      position: absolute;
      left: 50px;
      display: flex;
      align-items: center;
      gap: 1rem;
      h1 {
        font-size: 1.5rem;
        margin: 0;
        color: var(--color-text);
        display: none;
      }
    }
  }
  .social-icons {
    display: flex;
    gap: 1rem;
    font-size: 1.5rem;
    color: var(--color-text);
    a:hover {
      color: var(--color-secondary);
      opacity: 0.8;
    }
  }

  nav {
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    display: flex;
    align-items: center;
    gap: 1rem;
  }

  a {
    font-family: 'Courier New', Courier, monospace;
    color: var(--color-text);
    text-decoration: none;
    &:hover {
      text-decoration: underline;
    }
  }
}

@media only screen and (min-width: 600px) and (max-width: 768px) {
  // Styles for tablets
  // Añadir estilos de menu desplegable quizas?
  //Menu abajo de la pagina
}

@media only screen and (max-width: 600px) {
  // Styles for mobile devices
}
</style>
