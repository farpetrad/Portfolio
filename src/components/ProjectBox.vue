<template>
  <div
    class="offset-1 col-10 col-xxl-4 project-img"
    :style="{ cursor: slides.length > 0 ? 'pointer' : 'initial' }"
    @click="doShowProjectModal"
  >
    <img :src="img" class="img-fluid" />
  </div>
  <div
    class="offset-1 col-10 col-xxl-6 mt-3 mt-xxl-0 project-description text-start"
  >
    <h3>{{ name }}</h3>
    <p>
      {{ description }}
    </p>
    <div class="row mx-auto project-info">
      <div class="col-12"><h4>Project Info</h4></div>
    </div>
    <div class="row mx-auto project-info mt-4">
      <div class="col-6 p-0">Year</div>
      <div class="col-6 text-end">{{ year }}</div>
    </div>
    <div class="row mx-auto project-info mt-4">
      <div class="col-6 p-0">Role</div>
      <div class="col-6 text-end">{{ role }}</div>
    </div>
    <div class="d-flex project-links mb-5">
      <a :href="projectLink" target="_blank" rel="noreferrer" v-if="projectLink"
        >View Project <img src="../assets/arrow.svg" alt="arrow up right"
      /></a>
      <a :href="codepenLink" target="_blank" rel="noreferrer" v-if="codepenLink"
        >Live Demo <img src="../assets/arrow.svg" alt="arrow up right"
      /></a>
      <a :href="githubLink" target="_blank" rel="noreferrer" v-if="githubLink"
        >See on GitHub <font-awesome-icon :icon="faGithub"
      /></a>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import ProjectItemProps from "@/types/ProjectItemProps";
import { defineProps, inject, Ref } from "vue";

let project = inject<Ref<ProjectItemProps>>("selectedProject");
const props = defineProps<ProjectItemProps>();

function doShowProjectModal() {
  if (project) project.value = props;
}
</script>

<style lang="scss" scoped>
.project-img {
  padding: 5rem;
  justify-content: center;
  align-items: center;
  background-color: #343a40;
  img {
    border-radius: 12px;
    border: 1px solid black;
  }
}
.project-description {
  color: #ffffff;
  .project-info {
    border-bottom: 1px solid #ffffff;
  }
  .project-links {
    margin-top: 8rem;
    a {
      color: $secondary !important;
      font-family: "Open Sans";
      font-size: 16px;
      font-style: normal;
      font-weight: 700;
      line-height: 150%;
      margin-right: 2rem;
      text-decoration: none;
      border-bottom: 1px solid $secondary;
    }
  }
}
</style>
