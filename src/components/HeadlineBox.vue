<template>
  <div class="main-title">
    <p class="code">&#60;h1&#62;</p>
    <h1>I'm <span class="name">Neal</span>,</h1>
    <span>
      <h1>a Full-stack developer</h1>
      <span class="code">&#60;/h1&#62;</span>
    </span>
    <p class="code mt-4">&#60;p&#62;</p>
    <p>
      I help business grow by crafting amazing web experiences. If you’re
      looking for a developer that likes to get stuff done,
    </p>
    <p class="code">&#60;/p&#62;</p>
  </div>
</template>

<style lang="scss">
.main-title {
  align-content: center;
  padding: 2rem;
  h1 {
    font-size: 40px;
    font-style: normal;
    font-weight: 800;
    line-height: 120%;
    span.name {
      color: $secondary;
    }
  }
  span {
    h1 {
      display: inline;
    }
  }
  .code {
    color: $primary;
    font-family: Consolas;
    font-size: 20px;
    font-style: normal;
    font-weight: 400;
    line-height: 150%; /* 30px */
  }
  p {
    font-family: "Open Sans";
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: 150%; /* 24px */
  }
}

@include media-breakpoint-up(md) {
  .main-title {
    padding: 4rem;
  }
}
</style>
