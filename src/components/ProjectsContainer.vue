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
  <div class="row mt-5">
    <div class="offset-1 col-10 col-xxl-4 project-img">
      <img src="../assets/splinterlands.png" class="img-fluid" />
    </div>
    <div
      class="offset-1 col-10 col-xxl-6 mt-3 mt-xxl-0 project-description text-start"
    >
      <h3>Splinterlands</h3>
      <p>
        Worked with a team of developers to re-write a jQuery website in React,
        Typescript and Stitches. In addition architectured and designed postgres
        database schema, REST based microservices and block operations for the
        games first expansion Land using Express.js, Nest.js running on Node.js
        in TypeScript..
      </p>
      <div class="row mx-auto project-info">
        <div class="col-12"><h4>Project Info</h4></div>
      </div>
      <div class="row mx-auto project-info mt-4">
        <div class="col-6 p-0">Year</div>
        <div class="col-6 text-end">2022 - 2024</div>
      </div>
      <div class="row mx-auto project-info mt-4">
        <div class="col-6 p-0">Role</div>
        <div class="col-6 text-end">Full-stack Developer / Arhitect</div>
      </div>
      <div class="row project-links">
        <a href="https://splinterlands.com" target="_blank" rel="noreferrer"
          >View Project <img src="../assets/arrow.svg" alt="arrow up right"
        /></a>
      </div>
    </div>
  </div>
</template>

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
    }
  }
}
</style>
