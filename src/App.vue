<template>
  <div id="wrap">
    <div class="main">
      <nav-bar alignment="right">
        <template #brand> Neal Cynkus </template>
        <template #content>
          <template v-for="(item, index) in navItems">
            <nav-item-text
              v-if="!item.icon"
              :key="`i${index}`"
              :link="item"
            ></nav-item-text>
            <nav-item-text v-else :key="`e${index}`" :link="item">
              <font-awesome-icon
                :icon="item.icon"
                size="2x"
                :alt="item.alt"
                :title="item.alt"
              />
            </nav-item-text>
          </template>
        </template>
      </nav-bar>
      <router-view></router-view>
      <footer-component />
    </div>
  </div>
</template>

<script setup lang="ts">
import NavItemText from "./components/Navigation/NavItemText.vue";
import NavItemTextProps from "@/types/NavItemProps";
import FooterComponent from "./components/FooterComponent.vue";
const navItems: NavItemTextProps[] = [
  { href: "#skills", label: "Skills" },
  { href: "#projects", label: "Projects" },
  { href: "#about-me", label: "About" },
  { href: "#contact", label: "Contact" },
  {
    href: "https://www.linkedin.com/in/neal-c-2749305b/",
    label: "LinkedIn",
    target: "_blank",
    icon: "fa-brands fa-linkedin",
    alt: "LinkedIn icon",
  },
  {
    href: "https://github.com/farpetrad/Portfolio",
    label: "Github",
    target: "_blank",
    icon: "fa-brands fa-github",
    alt: "GitHub icon",
  },
];
</script>
