<template>
  <main class="registration-wrapper registration-wrapper-reverse"  v-cloak>
    <nuxt-link to="/" class="back reverse registration-back">
      <img src="@/assets/images/icons/arrow.svg" alt="arrow" />
    </nuxt-link>
    <forms-registration-credentials-form :is-rtl="true" />
    <lottie-registration class="registration-image" />
  </main>
</template>
<script>
export default {
  mounted() {
    this.$nextTick(() => {
      document.querySelector('[v-cloak]').removeAttribute('v-cloak');
    });
  },
};
</script>
<style scoped>
[v-cloak] {
  display: none;
}
</style>