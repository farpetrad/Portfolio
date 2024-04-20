<template>
  <div class="home container-fluid sitepage">
    <div class="row mt-5">
      <div class="offset-sm-1 col-sm-10 col-md-4 col-xxl-2">
        <about-box />
      </div>
      <div class="col-10 col-md-6 text-start">
        <headline-box />
      </div>
      <div class="col-sm-10 offset-sm-1 offset-xxl-0 col-md-4 col-xxl-2">
        <experience-box />
      </div>
    </div>
    <div class="row mouse">
      <div class="col-12 mouse-scroll-container">
        <font-awesome-icon :icon="faComputerMouseScrollwheel" size="2x" />
      </div>
      <div class="col-12 mouse-scroll-container mt-2">
        <img src="../assets/Arrow 1.svg" class="mouse-icon" />
      </div>
    </div>
    <div id="skills" class="row mt-5 mb-5">
      <lazy-loader :min-height="300" :unrender="true" class="row p-0">
        <skills-container />
      </lazy-loader>
    </div>
    <div id="projects" class="row mt-5 mb-5">
      <div class="offset-xxl-1 col-12 col-md-10 text-start">
        <h3>Projects</h3>
      </div>
      <div class="offset-xxl-1 col-12 col-md-10 text-start">
        <h4>Splinterlands</h4>
      </div>
      <div class="offset-xxl-1 col-12 col-md-4 text-start">
        <p>
          <a href="https://splinterlands.com" rel="noreferrer" target="_blank"
            >Splinterlands</a
          >
          is a web3 online collectible card game on the Hive blockchain. Every
          card in the game in the game is a
          <a
            href="https://en.wikipedia.org/wiki/Non-fungible_token"
            target="_blank"
            rel="noreferrer"
            >non fungible token (NFT)</a
          >
          and can be traded or sold in online markets. Splinterlands takes
          places in a fantasy world on the continent of Praetoria. In the game
          players auto battle each other under random rulesets and splinters
          (colors) to earn the in game governance token
          <a
            href="https://sps.splinterlands.com/"
            target="_blank"
            rel="noreferrer"
            >splintershards (SPS)</a
          >.
        </p>
        <p>
          When I started at Steemmonsters corp working on Splinterlaneds the
          website was designed using custom css, vanilla javascript and jQuery.
          After a few months a new project called v-next, was kicked off. This
          project was to replace the site with a modern web framework, React and
          TypeScript. From there until April 2024 I worked on a team converting
          all existing pages and creating new pages for the Land expansion in
          React, TypeScript and Stiches for styling. This was an almost two year
          long project that has resulted in the legacy site being retired other
          than the actual battles page which is writtten in WebGL through
          <a href="Pixel.js" rel="noreferrer" target="blank">Pixel.js.</a>
        </p>
        <p>
          In addition to the front end being redone in a modern framework, a
          similar approach was taken with the back end. The origional code was
          written using Javascript running on an Express.js server on node.js,
          however existing code was not going to be re-wrriten. Instead a new
          back end server written in Next.js was created for new microservice
          based REST apis . New block processing code was written also written
          in Next.js and TypeScript and built into npm packages that would be
          consumed by the existing Express.js server.
        </p>
      </div>
      <div class="col-12 col-md-6">
        <img src="../assets/splinterlands.png" class="img-fluid" />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import AboutBox from "@/components/AboutBox.vue";
import ExperienceBox from "@/components/ExperienceBox.vue";
import HeadlineBox from "@/components/HeadlineBox.vue";
import SkillsContainer from "@/components/SkillsContainer.vue";
import LazyLoader from "@/components/LazyLoader.vue";
import { faComputerMouseScrollwheel } from "@fortawesome/pro-regular-svg-icons";
</script>

<style lang="scss">
.home {
  .overlay {
    display: block;
    position: fixed;
    top: 0;
    width: 100vw;
    height: 100vh;
    background: rgba(0, 0, 0, 0.7);
    z-index: 1100;
    opacity: 1;
  }

  .mouse {
    color: $primary;
    .mouse-scroll-container {
      align-content: center;
      .mouse-icon {
        width: 80px;
        height: 80px;
      }
    }
  }
  p {
    a {
      color: blue !important;
    }
  }
}
</style>
