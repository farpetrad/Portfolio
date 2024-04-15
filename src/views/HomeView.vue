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
          <template v-slot:header>
            <h4>{{ selectedSlide?.title ?? "" }}</h4>
          </template>
          <template v-slot:body>
            <component :is="selectedSlide?.component"></component>
          </template>
        </modal>
      </teleport>
      <transition name="leftSlide" mode="in-out">
        <div class="overlay" key="overlay" v-show="showDrawer"></div>
      </transition>
    </div>
    <div class="row mt-5">
      <div
        class="offset-sm-1 offset-md-2 col-sm-10 col-md-4 col-xl-2 about_box"
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
              class="badge rounded-pill bg-warning me-2 skill"
              v-for="(skill, index) in skills"
              :key="index"
            >
              {{ skill }}
            </div>
          </div>
        </div>
      </div>
      <div class="col-6 text-start">
        <h1>&#60;h1&#62; I'm Neal,</h1>
        <h1>a Full-stack developer&#60;/h1&#62;</h1>
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

const skills = ["C/C++", "C#", "Javascript", "Typescript", "Vue.js", "React"];
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
}
</style>
