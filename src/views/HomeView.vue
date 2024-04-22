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
  <div class="container-fluid" id="about-me">
    <lazy-loader :min-height="300" :unrender="true" class="row p-0">
      <div class="row about-me-container">
        <div class="col-10 offset-1 col-md-4">
          <h2>ABOUT ME</h2>
        </div>
        <div class="col-10 offset-1 offset-md-0 col-md-6 text-start">
          <p class="about-me-highlight">
            I am a Full-Stack developer based in Denver, Colorado. I have a
            diverse background across financial, travel, gaming and governement
            industries.
          </p>
          <p>
            I am a Full-Stack developer based in Denver, Colorado looking for
            exciting opportunities. I Have a degree in Game and Simulation
            programming but have diverse experience from low level C/C++ game
            development to higher level C# application and service development
            to JavaScript/TypeScript experience designing and developing fully
            responsive websites. I have a strong passion for learning and am
            always up for a challenge. When not programming I enjoy 3D printing,
            exploring the great outdoors, reading and satisfying my desire to
            learn new things.
          </p>
        </div>
      </div>
    </lazy-loader>
  </div>
</template>

<script setup lang="ts">
import AboutBox from "@/components/AboutBox.vue";
import ExperienceBox from "@/components/ExperienceBox.vue";
import HeadlineBox from "@/components/HeadlineBox.vue";
import SkillsContainer from "@/components/SkillsContainer.vue";
import ProjectsContainer from "@/components/ProjectsContainer.vue";
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
#about-me {
  min-height: 96vh;
  background: url("../assets/AboutMe.png") lightgrey 0px 0px / 100.03% 100%;

  .about-me-container {
    margin-top: 25rem;
    h2 {
      color: $primary;
      font-family: "Open Sans";
      font-size: 32px;
      font-style: normal;
      font-weight: 700;
      line-height: 120%;
    }
    p {
      color: $primary;
    }
    p.about-me-highlight {
      font-family: "Open Sans";
      font-size: 24px;
      font-style: normal;
      font-weight: 800;
      line-height: 120%;
    }
  }
}
</style>
