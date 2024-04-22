<template>
  <div class="carousel">
    <div ref="inner" :style="innerStyles" class="inner">
      <div v-for="(card, index) in model" :key="index" class="card">
        <img :src="card" class="img-fluid" />
      </div>
    </div>
  </div>
  <div class="carousel-nav">
    <font-awesome-icon
      @click="prev"
      :icon="faCircleArrowLeft"
      size="3x"
      style="color: #193154"
      class="me-2 carousel-btn"
    />
    <font-awesome-icon
      @click="next"
      :icon="faCircleArrowRight"
      size="3x"
      style="color: #193154"
      class="ms-2 carousel-btn"
    />
  </div>
</template>

<script setup lang="ts">
import { ref, Ref, onMounted, watch, defineModel } from "vue";
import {
  faCircleArrowLeft,
  faCircleArrowRight,
} from "@fortawesome/pro-regular-svg-icons";
const model = defineModel<string[]>();

watch(model, (newValue: string[], oldValue: string[]) => {
  if (newValue.length !== oldValue.length) setStep();
});

const innerStyles = ref({});
const step = ref("");
const transitioning = ref(false);
const inner: Ref<HTMLDivElement | null> = ref(null);

function setStep() {
  if (!inner.value || !model.value) return;
  const innerWidth = inner.value.scrollWidth;
  const totalCards = model.value.length;
  step.value = `${innerWidth / totalCards}px`;
}

function next() {
  if (transitioning.value) return;
  transitioning.value = true;

  moveLeft();
  afterTransition(() => {
    if (!model.value || !model.value.length) return;
    const card = model.value.shift() as string;
    model.value.push(card);
    resetTranslate();
    transitioning.value = false;
  });
}

function prev() {
  if (transitioning.value) return;
  transitioning.value = true;

  moveRight();
  afterTransition(() => {
    if (!model.value || !model.value.length) return;
    const card: string = model.value.pop() as string;
    if (card) {
      model.value.unshift(card);
    }
    resetTranslate();
    transitioning.value = false;
  });
}

function moveLeft() {
  innerStyles.value = {
    transform: `translateX(-${step.value})
                  translateX(-${step.value})`,
  };
}

function moveRight() {
  innerStyles.value = {
    transform: `translateX(${step.value})
                  translateX(-${step.value})`,
  };
}

function afterTransition(callback: () => void) {
  const listener = () => {
    callback();
    if (!inner.value) return;
    inner.value.removeEventListener("transitionend", listener);
  };
  if (!inner.value) return;
  inner.value.addEventListener("transitionend", listener);
}

function resetTranslate() {
  innerStyles.value = {
    transition: "none",
    transform: `translateX(-${step.value})`,
  };
}

onMounted(() => {
  setStep();
  resetTranslate();
});
</script>

<style lang="scss" scoped>
.carousel {
  width: 75vw;
  overflow: hidden;
  .inner {
    transition: transform 0.2s;
    white-space: nowrap;
  }
  .card {
    margin-right: 10px;
    display: inline-flex;
    color: white;
    border-radius: 4px;
    align-items: center;
    justify-content: center;
    min-width: 20rem;
  }
}

@include media-breakpoint-up(md) {
  .carousel {
    width: 40vw;
  }
}

.carousel-nav {
  display: flex;
  flex-direction: row;
  position: relative;
  .carousel-btn {
    cursor: pointer;
  }
}
</style>
