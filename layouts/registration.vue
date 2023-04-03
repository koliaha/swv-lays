<template>
  <main class="registration-wrapper" v-cloak>
    <nuxt-link to="/" class="back registration-back">
      <img src="@/assets/images/icons/arrow.svg" alt="arrow" />
    </nuxt-link>
    <lottie-registration class="registration-image" />
    <forms-registration-credentials-form :is-rtl="false" />
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