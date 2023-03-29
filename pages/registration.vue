<template>
  <div class="container">
    <nav-bar>
      <template #nav-content>
        <div class="nav-content__text">
          Already have an account? <a href="">Sign in</a>
        </div>
      </template>
    </nav-bar>
    <NuxtLayout :name="layout" />
  </div>
</template>

<script lang="ts">
export default {
  data() {
    return {
      layout: "registration",
    };
  },
};
</script>

