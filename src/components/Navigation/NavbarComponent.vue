<template>
  <div id="navbar-component">
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark fixed-top py-0">
      <div class="navbar-header my-2">
        <a class="navbar-brand ms-5 me-0" href="#" title="Brand Logo">
          <slot name="brand" />
        </a>
      </div>

      <button
        class="navbar-toggler ml-auto collapsed"
        type="button"
        id="navbar-toggler"
        ref="navbarToggler"
        aria-controls="navbarContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
        @click="toggleMenu"
      >
        <span class="navbar-toggler-icon" />
      </button>

      <div
        class="collapse navbar-collapse pl-2"
        ref="navbarContent"
        id="navbarContent"
      >
        <div
          :class="{
            'navbar-nav': true,
            'ms-auto': alignment === 'right',
            'me-auto': alignment === 'left',
          }"
        >
          <slot name="content" />
        </div>
      </div>
    </nav>
  </div>
</template>

<script setup lang="ts">
import { ref, defineProps } from "vue";

const navbarToggler = ref<HTMLButtonElement>();
const navbarContent = ref<HTMLDivElement>();

defineProps({
  alignment: {
    type: String,
    required: true,
    default: "left",
    validator: (value: string) => {
      const lower = value.toLowerCase();
      return lower === "left" || lower === "right";
    },
  },
});

function toggleMenu($event: MouseEvent) {
  if (!navbarToggler.value || !navbarContent.value) {
    return;
  }

  navbarToggler.value.classList.toggle("collapsed");
  navbarContent.value.classList.toggle("show");

  if (navbarToggler.value.ariaExpanded === "true") {
    navbarToggler.value.ariaExpanded = "false";
  } else {
    navbarToggler.value.ariaExpanded = "true";
  }
  $event.preventDefault();
}
</script>

<style lang="scss">
#navbar-component {
  nav {
    &.navbar {
      .navbar-header {
        max-height: 64px;

        .navbar-brand {
          max-width: 78px;
          max-height: 78px;
          min-width: 64px;
          min-height: 64px;
          background-repeat: no-repeat;
        }
      }
    }
  }
}
</style>
