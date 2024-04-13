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
          <template v-slot:header>
            <h4>{{ selectedSlide?.title ?? "" }}</h4>
          </template>
          <template v-slot:body>
            <pulte-login />
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
    <div
      class="offset-sm-1 offset-md-2 offset-xl-4 col-sm-10 col-md-8 col-xl-4 mt-5"
    >
      <Carousel
        :items-to-show="2"
        :wrap-around="true"
        :breakpoints="breakPoints"
      >
        <Slide v-for="(slide, index) in slides" :key="index">
          <div class="carousel__item">
            <div class="card" @click="slideClicked($event, slide)">
              <div class="card-body">
                <h5 class="card-title">{{ slide.title }}</h5>
                <img :src="slide.img" :alt="slide.alt" style="width: 250px" />
              </div>
            </div>
          </div>
        </Slide>

        <template #addons>
          <Navigation />
        </template>
      </Carousel>
    </div>
  </div>
</template>

<script setup lang="ts">
import "vue3-carousel/dist/carousel.css";
import { Carousel, Slide, Navigation } from "vue3-carousel";
const PulteLogin = defineAsyncComponent(
  () => import("../components/Projects/PulteLogin.vue")
);
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
import { SlideContent } from "@/types/SlideContent";

const selectedSlide: Ref<SlideContent> = ref(null);
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

function slideClicked(e: Event, slide: SlideContent) {
  selectedSlide.value = slide;
  e.stopPropagation();
}

const breakPoints = {
  300: {
    itemsToShow: 1,
  },
  2100: {
    itemsToShow: 2,
  },
};

const slides: SlideContent[] = [
  {
    img: require("../assets/login_pulte_mortgage.png"),
    alt: "login.pultemortgage.com",
    title: "Pulte Mortgage",
    component: "",
  },
  {
    img: require("../assets/blog_pultemortgage.png"),
    alt: "blog.pultemortgage.com",
    title: "Pulte Mortgage Blog",
    component: "",
  },
  {
    img: require("../assets/splinterlands.png"),
    alt: "Splinterlands.com",
    title: "Splinterlands",
    component: "",
  },
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

  .carousel__item {
    .card {
      width: 350px;
      min-height: 200px;
      border: 2px solid black;

      &:hover {
        cursor: pointer;
      }
    }
  }
  .carousel__prev {
    left: -3vw;
  }
  .carousel__next {
    right: -3vw;
  }
}
</style>
