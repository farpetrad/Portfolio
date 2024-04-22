<template>
  <teleport to="#target" :disabled="!showModal">
    <modal
      v-show="selectedProject !== null"
      @close="closeModal"
      :dismissOnClick="true"
      class="text-center"
    >
      <template v-slot:header> {{ selectedProject?.name ?? "" }} </template>
      <template v-slot:body>
        <div class="container-fluid modal-body">
          <div class="row">
            <div class="col-12 carousel-container">
              <CarouselComponent v-model="slides" />
            </div>
          </div>
        </div>
      </template>
    </modal>
  </teleport>
  <div class="row mt-5 mb-5">
    <div class="offset-1 col-10 text-start mt-5">
      <h2>Featured Projects</h2>
      <p>
        Here are some of the selected projects that showcase my passion for
        front-end development.
      </p>
    </div>
  </div>
  <div
    :class="{ 'row mt-5': true, 'mb-5': index === projects.length - 1 }"
    v-for="(project, index) in projects"
    :key="index"
  >
    <project-box
      :name="project.name"
      :description="project.description"
      :year="project.year"
      :role="project.role"
      :img="project.img"
      :project-link="project.projectLink"
      :codepen-link="project.codepenLink"
      :github-link="project.githubLink"
      :slides="project.slides"
    />
  </div>
</template>

<script lang="ts" setup>
import { ref, Ref, provide, computed } from "vue";
import ProjectItemProps from "@/types/ProjectItemProps";
import CarouselItemProps from "@/types/CarouselItemProps";
import ProjectBox from "./ProjectBox.vue";
import CarouselComponent from "./CarouselComponent.vue";

const selectedProject: Ref<ProjectItemProps | null> = ref(null);
const slides = computed<CarouselItemProps>(() => {
  if (!selectedProject.value) return [];
  return selectedProject.value.slides;
});
const showModal = ref(false);
provide("selectedProject", selectedProject);
const projects: ProjectItemProps[] = [
  {
    name: "Splinterlands",
    description: `Worked with a team of developers to re-write a jQuery website in React,
      Typescript and Stitches. In addition architectured and designed postgres
      database schema, REST based microservices and block operations for the
      games first expansion Land using Express.js, Nest.js running on Node.js in
      TypeScript.`,
    year: "2022 - 2024",
    role: "Full-Stack Developer / Architect",
    img: require("../assets/splinterlands.png"),
    projectLink: "https://splinterlands.com",
    slides: [
      require("../assets/splinterlands.png"),
      require("../assets/splinterlands2.png"),
      require("../assets/splinterlands3.png"),
      require("../assets/splinterlands4.png"),
      require("../assets/splinterlands5.png"),
      require("../assets/splinterlands6.png"),
      require("../assets/splinterlands7.png"),
    ],
  },
  {
    name: "Pulte Mortgage Login and Secure sites",
    description: `Architectured and created login site (login.pultemortgage.com) and the 
        secure sites hidden behind the login, the MyLoan dashboard (secure.pultemortgage.com) 
        and the Loan Questionnaire (start.pultemortgage.com) using Vue.js 2, vue-router and vuex
        on the front end, in addition to designing and architecturing REST based microservices using 
        .NET Core, MS SQLServer and GraphQL on the back end`,
    year: "2018 - 2020",
    role: "Digital Customer Experience .NET Solutions Architect and Lead Vue.js Developer",
    img: require("../assets/login_pulte_mortgage.png"),
    projectLink: "https://login.pultemortgage.com/",
    slides: [
      require("../assets/login_pulte_mortgage.png"),
      require("../assets/myloan_dashboard.png"),
      require("../assets/myloan_dashboard2.png"),
      require("../assets/myloan_dashboard3.png"),
      require("../assets/loanquestionnaire.png"),
      require("../assets/loanquestionnaire2.png"),
    ],
  },
];

function closeModal() {
  showModal.value = false;
  selectedProject.value = null;
}
</script>

<style lang="scss">
.modal-body {
  overflow: hidden;
  .carousel-container {
    align-content: center;
    align-items: center;
    justify-content: center;
    justify-items: center;
    display: flex;
    flex-direction: column;
    min-height: 35vh;
  }
}
</style>
