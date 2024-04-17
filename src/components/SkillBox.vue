<template>
  <div class="skill-container">
    <div class="skill-badge">
      <slot>{{ badgeText }}</slot>
    </div>
    {{ skillText }}
  </div>
</template>

<script setup lang="ts">
import SkillBoxProps from "@/types/SkillProps";
import { defineProps } from "vue";
defineProps<SkillBoxProps>();
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
    text-align: end;
    font-family: "Open Sans";
    font-size: 14px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    align-content: end;
  }
}
</style>
