<template>
  <div class="experience-box">
    <div class="experience-container">
      <div class="row">
        <div class="col-sm-12 col-xxl-4">
          <h4>4</h4>
        </div>
        <div class="col-sm-12 col-xxl-8 highlight">Programming Languages</div>
      </div>
      <div class="row">
        <div class="col-sm-12 col-xxl-4">
          <h4>6</h4>
        </div>
        <div class="col-sm-12 col-xxl-8 highlight">Development Tools</div>
      </div>
      <div class="row">
        <div class="col-sm-12 col-xxl-4 p-0">
          <h4>16</h4>
        </div>
        <div class="col-sm-12 col-xxl-8 highlight">Years of Experience</div>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
.experience-box {
  padding: 2rem 1rem 2rem 1rem;
  .experience-container {
    background-color: $secondary;
    width: 100%;
    height: 100%;
    border-radius: 40px;
    padding: 5rem 3rem 5rem 3rem;

    h4 {
      font-family: "Open Sans";
      font-size: 56px;
      font-style: normal;
      font-weight: 700;
      line-height: 120%;
      text-align: center;
      color: $primary;
    }

    .highlight {
      align-content: center;
      color: #ffffff;
    }
  }
}
</style>
