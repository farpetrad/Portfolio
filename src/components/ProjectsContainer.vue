<template>
  <teleport to="#target" :disabled="!showModal">
    <modal
      v-show="selectedProject !== null && slides.length > 0"
      @close="closeModal"
      :dismissOnClick="true"
      class="text-center"
    >
      <template v-slot:header>
        <h4>{{ selectedProject?.name ?? "" }}</h4>
      </template>
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
      :alt="project.alt"
    />
  </div>
</template>

<script lang="ts" setup>
import { ref, Ref, provide, computed } from "vue";
import ProjectItem from "@/types/ProjectItemProps";
import ProjectBox from "./ProjectBox.vue";
import CarouselComponent from "./CarouselComponent.vue";
import SlideItem from "@/types/SlideItem";

const selectedProject: Ref<ProjectItem | null> = ref(null);
const slides = computed<SlideItem[]>(() => {
  if (!selectedProject.value) return [];
  return selectedProject.value.slides;
});
const showModal = ref(false);
provide("selectedProject", selectedProject);
const projects: ProjectItem[] = [
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
    alt: "Screenshot of Splinterlands website",
    projectLink: "https://splinterlands.com",
    slides: [
      {
        img: require("../assets/splinterlands.png"),
        alt: "Screenshot of Splinterlands website",
      },
      {
        img: require("../assets/splinterlands2.png"),
        alt: "Screenshot of Praetoria map",
      },
      {
        img: require("../assets/splinterlands3.png"),
        alt: "Screenshot of Praetoria production overview",
      },
      {
        img: require("../assets/splinterlands4.png"),
        alt: "Screenshot of Region production overview",
      },
      {
        img: require("../assets/splinterlands5.png"),
        alt: "Screenshot of Buy SPS",
      },
      {
        img: require("../assets/splinterlands6.png"),
        alt: "Screenshot of Battle History",
      },
      {
        img: require("../assets/splinterlands7.png"),
        alt: "Screenshot of battle",
      },
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
    alt: "Screenshot of Pulte Mortgage Login website",
    projectLink: "https://login.pultemortgage.com/",
    slides: [
      {
        img: require("../assets/login_pulte_mortgage.png"),
        alt: "Screenshot of Pulte Mortgage Login website",
      },
      {
        img: require("../assets/myloan_dashboard.png"),
        alt: "Screenshot of MyLoan Dashboard with conditions",
      },
      {
        img: require("../assets/myloan_dashboard2.png"),
        alt: "Screenshot of MyLoan Dashboard Property Location",
      },
      {
        img: require("../assets/myloan_dashboard3.png"),
        alt: "Screenshot of MyLoan Dashboard profile management screen",
      },
      {
        img: require("../assets/loanquestionnaire.png"),
        alt: "Screenshot of Loan Questionnaire start screen",
      },
      {
        img: require("../assets/loanquestionnaire2.png"),
        alt: "Screenshot of Loan Questionnaire screen",
      },
    ],
  },
  {
    name: "Pulte Mortgage Articles",
    description: `Architectured and created a blog site for prospective home buyers using Vue.js 2, vue-router and vuex
        on the front end.  Articles are delivered to the site through a CMS.`,
    year: "2018 - 2020",
    role: "Digital Customer Experience .NET Solutions Architect and Lead Vue.js Developer",
    img: require("../assets/pulte_articles.png"),
    alt: "Screenshot of Pulte Articles website",
    projectLink:
      "https://articles.pultemortgage.com/article/when-a-first-time-buyer-is-also-a-first-time-builder",
    slides: [],
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
