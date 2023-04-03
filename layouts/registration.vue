<template>
  <main class="registration-wrapper">
    <nuxt-link to="/" class="back registration-back">
      <img src="@/assets/images/icons/arrow.svg" alt="arrow" />
    </nuxt-link>
    <lottie-registration class="registration-image" />
    <forms-registration-credentials-form :is-rtl="false" />
  </main>
</template>
