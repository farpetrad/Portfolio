<template>
  <div class="carousel">
    <div ref="inner" :style="innerStyles" class="inner">
      <div v-for="(card, index) in images" :key="index" class="card">
        <img :src="card" class="img-fluid" />
      </div>
    </div>
  </div>
  <div class="carousel-nav">
    <button @click="prev">prev</button>
    <button @click="next">next</button>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, defineProps, watch } from "vue";
import CarouselItemProps from "@/types/CarouselItemProps";

const props = defineProps<CarouselItemProps>();

// eslint-disable-next-line @typescript-eslint/no-unused-vars
watch(props, (newValue: CarouselItemProps, oldValue: CarouselItemProps) => {
  setStep();
});

const innerStyles = ref({});
const step = ref("");
const transitioning = ref(false);
const inner = ref(null);

function setStep() {
  const innerWidth = inner.value.scrollWidth;
  const totalCards = props.images.length;
  step.value = `${innerWidth / totalCards}px`;
}

function next() {
  if (transitioning.value) return;
  transitioning.value = true;

  moveLeft();
  afterTransition(() => {
    // eslint-disable-next-line vue/no-mutating-props
    const card = props.images.shift();
    // eslint-disable-next-line vue/no-mutating-props
    props.images.push(card);
    resetTranslate();
    transitioning.value = false;
  });
}

function prev() {
  if (transitioning.value) return;
  transitioning.value = true;

  moveRight();
  afterTransition(() => {
    // eslint-disable-next-line vue/no-mutating-props
    const card = props.images.pop();
    // eslint-disable-next-line vue/no-mutating-props
    props.images.unshift(card);
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

function afterTransition(callback) {
  const listener = () => {
    callback();
    inner.value.removeEventListener("transitionend", listener);
  };
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
  button {
    margin-right: 5px;
    margin-top: 10px;
  }
}
</style>
