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
    <div id="skills" class="row mt-5">
      <div class="offset-1 col-10 text-start">
        <h3>Skills</h3>
      </div>
      <div class="offset-xxl-1 col-sm-12 col-xxl-5 text-start">
        <div class="row">
          <div class="offset-1 col-10">
            <h4>Technologies</h4>
          </div>
        </div>
        <div class="row">
          <div class="col-4 col-md-2">
            <skill-box color="#044458" badgeText="CORE" skillText=".NET Core" />
          </div>
          <div class="col-4 col-md-2">
            <skill-box
              color="#CC9A06"
              badgeText=".NET"
              skillText=".NET Framework"
            />
          </div>
          <div class="col-4 col-md-2">
            <skill-box skillText="Node Js">
              <font-awesome-icon
                :icon="faNodeJs"
                size="3x"
                style="color: #193154"
              />
            </skill-box>
          </div>
          <div class="col-4 col-md-2">
            <skill-box color="#146C43" badgeText="WPF" skillText="WPF" />
          </div>
          <div class="col-4 col-md-2">
            <skill-box color="#087990" badgeText="WCF" skillText="WCF" />
          </div>
          <div class="col-4 col-md-2">
            <skill-box color="#842029" badgeText="REST" skillText="REST" />
          </div>
        </div>
        <div class="row">
          <div class="col-4 col-md-2">
            <skill-box skillText="SOAP">
              <font-awesome-icon
                :icon="faPumpSoap"
                size="3x"
                style="color: #193154"
              />
            </skill-box>
          </div>
          <div class="col-4 col-md-2">
            <skill-box color="#343A40" badgeText="TFVC" skillText="TFVC" />
          </div>
          <div class="col-4 col-md-2">
            <skill-box skillText="GIT">
              <font-awesome-icon
                :icon="faGitAlt"
                size="3x"
                style="color: #193154"
              />
            </skill-box>
          </div>
          <div class="col-4 col-md-2">
            <skill-box color="#75B798" badgeText="BB" skillText="Babel" />
          </div>
          <div class="col-4 col-md-2">
            <skill-box color="#198754" badgeText="TS" skillText="TypeScript" />
          </div>
          <div class="col-4 col-md-2">
            <skill-box color="#ADB5BD" badgeText="JQ" skillText="jQuery" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import AboutBox from "@/components/AboutBox.vue";
import ExperienceBox from "@/components/ExperienceBox.vue";
import HeadlineBox from "@/components/HeadlineBox.vue";
import SkillBox from "@/components/SkillBox.vue";
import {
  faComputerMouseScrollwheel,
  faPumpSoap,
} from "@fortawesome/pro-regular-svg-icons";
import { faNodeJs, faGitAlt } from "@fortawesome/free-brands-svg-icons";
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
