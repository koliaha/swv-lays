<template>
  <main class="registration-wrapper">
    <nuxt-link to="/" class="back reverse registration-back">
      <img src="@/assets/images/icons/arrow.svg" alt="arrow" />
    </nuxt-link>
    <forms-registration-credentials-form :is-rtl="true" />
    <img src="/img/registration.svg" class="registration-image" />
  </main>
</template>