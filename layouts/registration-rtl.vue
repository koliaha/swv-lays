<template>
  <main class="registration-wrapper registration-wrapper-reverse">
    <nuxt-link to="/" class="back reverse registration-back">
      <img src="@/assets/images/icons/arrow.svg" alt="arrow" />
    </nuxt-link>
    <forms-registration-credentials-form :is-rtl="true" />
    <lottie-image class="registration-image" />
  </main>
</template>
