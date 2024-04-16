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
      <div class="offset-sm-1 offset-xl-2 col-sm-10 col-md-4 col-xl-2">
        <about-box />
      </div>
      <div class="col-4 text-start">
        <headline-box />
      </div>
      <div class="col-sm-10 col-md-4 col-xxl-2">
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
</template>

<script setup lang="ts">
import AboutBox from "@/components/AboutBox.vue";
import ExperienceBox from "@/components/ExperienceBox.vue";
import HeadlineBox from "@/components/HeadlineBox.vue";
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
