<template>
  <div class="row mt-5 mb-5">
    <div class="offset-1 col-10 text-start">
      <h3>Skills</h3>
    </div>
    <div class="offset-xxl-1 col-12 col-xxl-5 text-start mt-2 p-0">
      <div class="row">
        <div class="offset-1 offset-md-0 col-10">
          <h4>Technologies</h4>
        </div>
      </div>
      <template v-for="(itemRow, index) in technologies" :key="index">
        <div :class="{ row: true, 'mt-3': index > 0 }">
          <div
            v-for="(skill, skillIndex) in itemRow"
            :key="`${skillIndex}-skill.skillText`"
            class="col-4 col-md-2"
          >
            <skill-box
              :color="skill.color"
              :badgeText="skill.badgeText"
              :skillText="skill.skillText"
              v-if="!skill.slotContent"
            />
            <skill-box v-else :skillText="skill.skillText">
              <font-awesome-icon
                :icon="skill.slotContent"
                size="3x"
                style="color: #193154"
              />
            </skill-box>
          </div>
        </div>
      </template>
    </div>
    <div class="offset-0 offset-xxl-1 col-12 col-xxl-5 text-start mt-2 p-0">
      <div class="row">
        <div class="offset-1 offset-md-0 col-10">
          <h4>Languages</h4>
        </div>
      </div>
      <template v-for="(itemRow, index) in languages" :key="index">
        <div :class="{ row: true, 'mt-3': index > 0 }">
          <div
            v-for="(skill, skillIndex) in itemRow"
            :key="`${skillIndex}-skill.skillText`"
            class="col-4 col-md-2"
          >
            <skill-box
              :color="skill.color"
              :badgeText="skill.badgeText"
              :skillText="skill.skillText"
              v-if="!skill.slotContent"
            />
            <skill-box v-else :skillText="skill.skillText">
              <font-awesome-icon
                :icon="skill.slotContent"
                size="3x"
                style="color: #193154"
              />
            </skill-box>
          </div>
        </div>
      </template>
    </div>
  </div>
</template>

<script lang="ts" setup>
import SkillBox from "@/components/SkillBox.vue";
import { faPumpSoap, faC, faHashtag } from "@fortawesome/pro-regular-svg-icons";
import {
  faNodeJs,
  faGitAlt,
  faVuejs,
  faReact,
  faHtml5,
  faCss3,
  faSass,
} from "@fortawesome/free-brands-svg-icons";
import SkillBoxProps from "@/types/SkillProps";

const technologies: SkillBoxProps[][] = [
  [
    {
      badgeText: "CORE",
      skillText: ".NET Core",
      color: "#044458",
    },
    {
      badgeText: ".NET",
      skillText: ".NET Framework",
      color: "#CC9A06",
    },
    {
      skillText: "Node Js",
      slotContent: faNodeJs,
    },
    {
      badgeText: "WPF",
      skillText: "WPF",
      color: "#146C43",
    },
    {
      badgeText: "WCF",
      skillText: "WCF",
      color: "#087990",
    },
    {
      badgeText: "REST",
      skillText: "REST",
      color: "#842029",
    },
  ],
  [
    {
      skillText: "SOAP",
      slotContent: faPumpSoap,
    },
    {
      badgeText: "TFVC",
      skillText: "TFVC",
      color: "#343A40",
    },
    {
      skillText: "GIT",
      slotContent: faGitAlt,
    },
    {
      badgeText: "BB",
      skillText: "Babel",
      color: "#75B798",
    },
    {
      badgeText: "TS",
      skillText: "TypeScript",
      color: "#198754",
    },
    {
      badgeText: "JQ",
      skillText: "jQuery",
      color: "#ADB5BD",
    },
  ],
];

const languages: SkillBoxProps[][] = [
  [
    {
      skillText: "Vue.js",
      slotContent: faVuejs,
    },
    {
      skillText: "React",
      slotContent: faReact,
    },
    {
      skillText: "C/C++",
      slotContent: faC,
    },
    {
      skillText: "C#",
      slotContent: faHashtag,
    },
  ],
  [
    {
      skillText: "HTML",
      slotContent: faHtml5,
    },
    {
      skillText: "CSS",
      slotContent: faCss3,
    },
    {
      skillText: "SASS",
      slotContent: faSass,
    },
    {
      badgeText: "JS",
      skillText: "JavaScript",
      color: "#193154",
    },
  ],
];
</script>
