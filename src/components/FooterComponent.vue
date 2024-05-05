<template>
  <div class="container-fluid footer">
    <div class="row h-100">
      <div class="col-6 col-md-2 text-content">
        <span>find me@: </span>
      </div>
      <div class="col-4 col-xxl-1">
        <div class="contact-icon">
          <a
            href="https://www.linkedin.com/in/neal-c-2749305b/"
            target="_blank"
            rel="noreferrer"
            ><font-awesome-icon
              :icon="faLinkedin"
              size="2x"
              style="color: #ffffff"
              alt="LinkedIn icon with link to profile"
              title="LinkedIn icon with link to profile"
          /></a>
        </div>
      </div>
      <div class="col-6 offset-2 offset-xxl-6 col-xxl-2 text-content">
        @farpetrad
        <a href="https://github.com/farpetrad" target="_blank" rel="noreferrer">
          <font-awesome-icon
            :icon="faGithub"
            size="2x"
            style="color: #ffffff"
            alt="GitHub icon with link to profile"
            title="GitHub icon with link to profile"
        /></a>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";
</script>

<style lang="scss">
.footer {
  background-color: $primary;
  color: $secondary;
  font-family: "Open Sans";
  font-size: 16px;
  font-style: normal;
  font-weight: 700;
  line-height: 150%;
  .text-content {
    align-content: center;
    text-align: right;
    height: 3rem;
  }
  .contact-icon {
    border-left: 1px solid white;
    border-right: 1px solid white;
    height: 100% !important;
    align-content: center;
    width: 50%;
  }
}
</style>
