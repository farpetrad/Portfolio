<template>
  <div class="home container-fluid sitepage">
    <div class="col-12">
      <img alt="Vue logo" src="../assets/logo.png" />
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
          <template v-slot:header> Header </template>
          <template v-slot:body>
            <div class="container">
              <div class="row text-center">This is a body</div>
              <img alt="Vue logo" src="../assets/logo.png" />
            </div>
          </template>
        </modal>
      </teleport>
      <transition name="leftSlide" mode="in-out">
        <div class="overlay" key="overlay" v-show="showDrawer"></div>
      </transition>
    </div>
    <div class="col-12 mt-5">
      <button @click="drawerClick">Show Drawer</button>
      <button @click="modalClick">Show Modal</button>
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
} from "vue";
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
}
</style>
