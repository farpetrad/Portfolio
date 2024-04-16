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
  padding: 4rem;
  h1 {
    font-weight: bold;
    span.name {
      color: $secondary;
    }
  }
  span {
    h1 {
      white-space: nowrap;
      display: inline;
    }
  }
  .code {
    color: $primary;
    font-weight: bold;
  }
}
</style>
