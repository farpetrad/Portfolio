<template>
  <div class="container-fluid" id="about-me">
    <div class="row about-me-container mb-5">
      <div class="col-10 offset-1 col-md-4">
        <h2>ABOUT ME</h2>
      </div>
      <div class="col-10 offset-1 offset-md-0 col-md-5 text-start">
        <p class="about-me-highlight">
          I am a Full-Stack developer based in Denver, Colorado looking for
          exciting opportunities. I have a diverse background across financial,
          travel, gaming and governement industries.
        </p>
        <p>
          I Have a degree in Game and Simulation programming but have diverse
          experience from low level C/C++ game development as well as in mission
          critical systems to higher level C# application and service
          development to JavaScript/TypeScript experience designing and
          developing fully responsive websites. I have a strong passion for
          learning and am always up for a challenge. When not programming I
          enjoy 3D printing, exploring the great outdoors, reading and
          satisfying my desire to learn new things.
        </p>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
#about-me {
  height: 100vh;
  background: url("../assets/AboutMe.png") lightgrey;
  align-content: center;

  .about-me-container {
    h2 {
      color: $primary;
      font-family: "Open Sans";
      font-size: 32px;
      font-style: normal;
      font-weight: 700;
      line-height: 120%;
    }
    p {
      color: $primary;
    }
    p.about-me-highlight {
      font-family: "Open Sans";
      font-size: 24px;
      font-style: normal;
      font-weight: 800;
      line-height: 120%;
    }
  }
}
</style>
