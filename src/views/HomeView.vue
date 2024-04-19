<template>
  <div class="home container-fluid sitepage">
    <div class="row mt-5">
      <div class="offset-sm-1 offset-xxl-2 col-sm-10 col-md-4 col-xxl-2">
        <about-box />
      </div>
      <div class="col-sm-10 col-md-4 text-start">
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
    <div id="skills" class="row mt-5 mb-5">
      <lazy-loader :min-height="300" :unrender="true" class="row">
        <skills-container />
      </lazy-loader>
    </div>
  </div>
</template>

<script setup lang="ts">
import AboutBox from "@/components/AboutBox.vue";
import ExperienceBox from "@/components/ExperienceBox.vue";
import HeadlineBox from "@/components/HeadlineBox.vue";
import SkillsContainer from "@/components/SkillsContainer.vue";
import LazyLoader from "@/components/LazyLoader.vue";
import { faComputerMouseScrollwheel } from "@fortawesome/pro-regular-svg-icons";
</script>

<style lang="scss">
.home {
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
    color: $primary;
    .mouse-scroll-container {
      align-content: center;
      .mouse-icon {
        width: 80px;
        height: 80px;
      }
    }
  }
}
</style>
