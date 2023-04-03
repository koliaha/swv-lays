<template>
  <div class="container">
    <header-nav>
      <template #nav-content>
        <div class="nav-content__text">
          Already have an account? <a href="" class="link">Sign in</a>
        </div>
      </template>
    </header-nav>
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

