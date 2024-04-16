<template>
  <div class="home container-fluid sitepage">
    <div class="col-12">
      <teleport to="#target" :disabled="!showDrawer">
        <drawer
          v-show="showDrawer"
          @close-drawer="handleClose"
          key="drawer"
          title="Navigation Drawer"
        >
          <div class="col-12 text-start">A drawer!</div>
        </drawer>
      </teleport>
      <teleport to="#target" :disabled="!showModal">
        <modal
          v-show="showModal"
          @close="showModal = false"
          :dismissOnClick="true"
          :closeInHeader="true"
          class="text-center"
        >
          <template v-slot:header></template>
          <template v-slot:body></template>
        </modal>
      </teleport>
      <transition name="leftSlide" mode="in-out">
        <div class="overlay" key="overlay" v-show="showDrawer"></div>
      </transition>
    </div>
    <div class="row mt-5">
      <div
        class="offset-sm-1 offset-xl-2 col-sm-10 col-md-4 col-xl-2 about_box d-none d-md-block"
      >
        <img src="../assets/me.jpg" class="img-cropped" />
        <div class="text-center">
          <h4>Neal</h4>
          <h5>Full-stack developer</h5>
        </div>
        <div class="text-start content-item">
          <font-awesome-icon
            :icon="faEnvelope"
            style="color: white; margin-right: 5px"
          />
          <a href="mailto:neal.cynkus@gmail.com">neal.cynkus@gmail.com</a>
        </div>
        <div class="text-start content-item">
          <font-awesome-icon
            :icon="faLocationDot"
            style="color: white; margin-right: 5px"
          />
          <span>Denver, Co</span>
        </div>
        <div class="text-start content-item">
          <font-awesome-icon
            :icon="faSuitcase"
            style="color: white; margin-right: 5px"
          />
          <span>Vue / React Full-stack</span>
        </div>
        <div class="text-start content-item">
          <font-awesome-icon
            :icon="faLink"
            style="color: white; margin-right: 5px"
          />

          <a href="https://myportfolio-beta-hazel.vercel.app/"
            >https://myportfolio-beta-hazel.vercel.app/</a
          >
        </div>
        <div class="row">
          <div class="col-12 mt-3">
            <div
              class="badge rounded-pill bg-warning me-2 mt-2 skill"
              v-for="(skill, index) in skills"
              :key="index"
            >
              {{ skill }}
            </div>
          </div>
        </div>
      </div>
      <div class="col-4 text-start main-title">
        <p class="code">&#60;h1&#62;</p>
        <h1>I'm <span class="name">Neal</span>,</h1>
        <span>
          <h1>a Full-stack developer</h1>
          <span class="code">&#60;/h1&#62;</span>
        </span>
        <p class="code mt-4">&#60;p&#62;</p>
        <p>
          I help business grow by crafting amazing web experiences. If you’re
          looking for a developer that likes to get stuff done,
        </p>
        <p class="code">&#60;/p&#62;</p>
      </div>
      <div class="col-sm-10 col-md-4 col-xxl-2 experience-box">
        <div class="experience-container">
          <div class="row">
            <div class="col-sm-12 col-xxl-4">
              <h4>4</h4>
            </div>
            <div class="col-sm-12 col-xxl-8 highlight">
              Programming Languages
            </div>
          </div>
          <div class="row">
            <div class="col-sm-12 col-xxl-4">
              <h4>6</h4>
            </div>
            <div class="col-sm-12 col-xxl-8 highlight">Development Tools</div>
          </div>
          <div class="row">
            <div class="col-sm-12 col-xxl-4">
              <h4>16</h4>
            </div>
            <div class="col-sm-12 col-xxl-8 highlight">Years of Experience</div>
          </div>
        </div>
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
</template>

<script setup lang="ts">
import {
  provide,
  inject,
  readonly,
  ref,
  computed,
  defineAsyncComponent,
  defineComponent,
  Ref,
} from "vue";
import {
  faEnvelope,
  faLocationDot,
  faSuitcase,
  faLink,
} from "@fortawesome/sharp-regular-svg-icons";
import { faComputerMouseScrollwheel } from "@fortawesome/pro-regular-svg-icons";
const showModal = ref(false);
const showDrawer = ref(false);
provide("modalOpen", readonly(showModal));
provide("drawerOpen", readonly(showDrawer));

function handleClose() {
  showDrawer.value = !showDrawer.value;
}

function drawerClick(event: Event) {
  showDrawer.value = !showDrawer.value;
  event.stopImmediatePropagation();
  event.stopPropagation();
}
function modalClick(event: Event) {
  showModal.value = true;
  event.stopImmediatePropagation();
  event.stopPropagation();
}

const skills = [
  "C/C++",
  "C#",
  "Javascript",
  "Typescript",
  "Vue.js",
  "React",
  "CSS",
  "SASS",
];
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

  .about_box {
    border-radius: 80px 0px 80px 0px;
    border: solid 4px black;
    border-width: 2px;
    background-color: $primary;
    filter: drop-shadow(-4px -4px 2px $secondary);
    padding: 15px;

    .img-cropped {
      margin-top: 20px;
      width: 150px;
      height: 150px;
      border-radius: 50%;
    }
    h4 {
      color: white;
    }
    h5 {
      color: white;
    }
    .content-item {
      margin-left: 10px;
      color: white;
    }
    .skill {
      color: #044458;
    }
  }
  .main-title {
    align-content: center;
    padding: 4rem;
    h1 {
      font-weight: bold;
      span.name {
        color: $secondary;
      }
    }
    span {
      h1 {
        white-space: nowrap;
        display: inline;
      }
    }
    .code {
      color: $primary;
      font-weight: bold;
    }
  }
  .experience-box {
    padding: 2rem;
    .experience-container {
      background-color: $secondary;
      width: 100%;
      height: 100%;
      border-radius: 40px;
      padding: 4rem 3rem 0rem 3rem;

      h4 {
        font-family: "Open Sans";
        font-size: 56px;
        font-style: normal;
        font-weight: 700;
        line-height: 120%;
        text-align: center;
        color: $primary;
      }

      .highlight {
        align-content: center;
        color: #ffffff;
      }
    }
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
