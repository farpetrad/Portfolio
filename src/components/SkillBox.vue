<template>
  <div class="skill-container">
    <div class="skill-badge">
      <slot>{{ badgeText }}</slot>
    </div>
    {{ skillText }}
  </div>
</template>

<script setup lang="ts">
import { defineProps } from "vue";
defineProps({
  color: {
    type: String,
    required: false,
    default: "transparent",
  },
  badgeText: {
    type: String,
    required: false,
    default: "",
  },
  skillText: {
    type: String,
    required: true,
    default: "",
  },
});
</script>

<style lang="scss">
.skill-container {
  width: 127px;
  height: 74px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 10px;
  flex: 1 0 0;

  .skill-badge {
    color: #ffffff;
    background-color: v-bind(color);
    width: 44px;
    height: 44px;
    text-align: center;
    font-family: "Open Sans";
    font-size: 14px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    align-content: end;
  }
}
</style>
