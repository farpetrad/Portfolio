<template>
  <div class="home container-fluid sitepage" style="align-content: center">
    <div class="row mt-5">
      <div class="offset-sm-1 col-sm-10 col-md-4 col-xxl-2">
        <about-box />
      </div>
      <div class="col-10 col-md-6 text-start">
        <headline-box />
      </div>
      <div class="col-sm-10 offset-sm-1 offset-xxl-0 col-md-4 col-xxl-2">
        <experience-box />
      </div>
    </div>
    <div class="row mouse">
      <div class="col-12 mouse-scroll-container">
        <font-awesome-icon :icon="faComputerMouseScrollwheel" size="2x" />
      </div>
      <div class="col-12 mouse-scroll-container mt-2">
        <img src="../assets/Arrow 1.svg" class="mouse-icon" />
      </div>
    </div>
  </div>
  <div class="container-fluid" id="skills">
    <lazy-loader :min-height="300" :unrender="true" class="row p-0">
      <skills-container />
    </lazy-loader>
  </div>
  <div class="container-fluid" id="projects">
    <lazy-loader :min-height="300" :unrender="true" class="row p-0">
      <projects-container />
    </lazy-loader>
  </div>
  <lazy-loader :min-height="300" :unrender="true" class="row p-0">
    <about-container />
  </lazy-loader>
  <lazy-loader :min-height="300" :unrender="true" class="row p-0">
    <contact-container />
  </lazy-loader>
</template>

<script setup lang="ts">
import AboutBox from "@/components/AboutBox.vue";
import ExperienceBox from "@/components/ExperienceBox.vue";
import HeadlineBox from "@/components/HeadlineBox.vue";
import SkillsContainer from "@/components/SkillsContainer.vue";
import ProjectsContainer from "@/components/ProjectsContainer.vue";
import AboutContainer from "@/components/AboutContainer.vue";
import ContactContainer from "@/components/ContactContainer.vue";
import LazyLoader from "@/components/LazyLoader.vue";
import { faComputerMouseScrollwheel } from "@fortawesome/pro-regular-svg-icons";
</script>

<style lang="scss">
.home {
  min-height: 100vh;
  .overlay {
    display: block;
    position: fixed;
    top: 0;
    width: 100vw;
    height: 100vh;
    background: rgba(0, 0, 0, 0.7);
    z-index: 1100;
    opacity: 1;
  }

  .mouse {
    margin-top: 10rem !important;
    color: $primary;
    .mouse-scroll-container {
      align-content: center;
      .mouse-icon {
        width: 80px;
        height: 80px;
      }
    }
  }
  p {
    a {
      color: blue !important;
    }
  }
}
#skills {
  min-height: 96vh;
  align-content: center;
  background: url("../assets/skills_bg2.png") lightgray -0.286px 0px / 100.03% 137.19%
    no-repeat;
}
#projects {
  min-height: 96vh;
  background-color: $primary;
  color: #ffffff;
}
</style>
