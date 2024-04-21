<template>
  <div class="row mt-5 mb-5">
    <div class="offset-1 col-10 text-start mt-5">
      <h2>Featured Projects</h2>
      <p>
        Here are some of the selected projects that showcase my passion for
        front-end development.
      </p>
    </div>
  </div>
  <div class="row mt-5" v-for="(project, index) in projects" :key="index">
    <project-box
      :name="project.name"
      :description="project.description"
      :year="project.year"
      :role="project.role"
      :img="project.img"
      :project-link="project.projectLink"
    />
  </div>
</template>

<script lang="ts" setup>
import ProjectItemProps from "@/types/ProjectItemProps";
import ProjectBox from "./ProjectBox.vue";
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
  },
];
</script>
