<template>
  <div id="wrap">
    <div class="main">
      <nav-bar>
        <template #content>
          <nav-item-text
            v-for="(item, index) in navItems"
            :key="index"
            :link="item"
          >
          </nav-item-text>
        </template>
      </nav-bar>
      <router-view></router-view>
    </div>
  </div>
</template>

<script setup lang="ts">
import NavItemText from "./components/Navigation/NavItemText.vue";
import NavItemTextProps from "@/types/NavItemProps";
const navItems: NavItemTextProps[] = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  {
    href: "https://github.com/farpetrad/Portfolio",
    label: "Github",
    target: "_blank",
  },
  {
    href: "https://www.linkedin.com/in/neal-c-2749305b/",
    label: "LinkedIn",
    target: "_blank",
  },
];
</script>

<style lang="scss">
@import "scss/site.scss";
</style>
