<template>
  <div class="about_box">
    <img src="../assets/me.jpg" class="img-cropped" />
    <div class="text-center">
      <h4>Neal</h4>
      <h5>Full-stack developer</h5>
    </div>
    <div class="text-start content-item">
      <font-awesome-icon
        :icon="faEnvelope"
        style="color: white; margin-right: 5px"
      />
      <a href="mailto:neal.cynkus@gmail.com">neal.cynkus@gmail.com</a>
    </div>
    <div class="text-start content-item">
      <font-awesome-icon
        :icon="faLocationDot"
        style="color: white; margin-right: 5px"
      />
      <span>Denver, Co</span>
    </div>
    <div class="text-start content-item">
      <font-awesome-icon
        :icon="faSuitcase"
        style="color: white; margin-right: 5px"
      />
      <span>Vue / React Full-stack</span>
    </div>
    <div class="text-start content-item">
      <font-awesome-icon
        :icon="faLink"
        style="color: white; margin-right: 5px"
      />

      <a href="https://myportfolio-beta-hazel.vercel.app/"
        >https://myportfolio-beta-hazel.vercel.app/</a
      >
    </div>
    <div class="row">
      <div class="col-12 mt-3">
        <div
          class="badge rounded-pill bg-warning me-2 mt-2 skill"
          v-for="(skill, index) in skills"
          :key="index"
        >
          {{ skill }}
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import {
  faEnvelope,
  faLocationDot,
  faSuitcase,
  faLink,
} from "@fortawesome/sharp-regular-svg-icons";

const skills = ["Vue.js", "React", "C#", "C/C++"];
</script>

<style lang="scss">
.about_box {
  border-radius: 80px 0px 80px 0px;
  border: solid 4px black;
  border-width: 2px;
  background-color: $primary;
  filter: drop-shadow(-4px -4px 2px $secondary);
  padding: 15px;
  min-height: 45vh;

  .img-cropped {
    margin-top: 20px;
    width: 150px;
    height: 150px;
    border-radius: 50%;
  }
  h4 {
    color: white;
  }
  h5 {
    color: white;
  }
  .content-item {
    margin-left: 10px;
    color: white;
  }
  .skill {
    color: #044458;
  }
}
</style>
