<template>
  <main class="registration-wrapper">
    <nuxt-link to="/" class="back registration-back">
      <img src="@/assets/images/icons/arrow.svg" alt="arrow" />
    </nuxt-link>
    <img src="/img/registration.svg" class="registration-image" />
    <forms-registration-credentials-form is-rtl="true" />
  </main>
</template>
<style lang="scss">
.registration {
  &-back{
    top: 7px !important;
    display: block;
    z-index: 10;
    @media screen and (min-width: 1024px) {
      display: none;
    }
  }
  &-wrapper {
    margin-top: 61px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-direction: column;
    position: relative;
    
    @media screen and (min-width: 1024px) {
      flex-direction: row;
      margin-top: 35px;
    }
    @media screen and (min-width: 1440px) {
      margin-top: 59px;
    }
    @media screen and (min-width: 1920px) {
      margin-top: 76px;
    }
    @media screen and (min-width: 2560px) {
      margin-top: 129px;
    }
  }
  &-image {
    display: none;
    @media screen and (min-width: 768px) {
      max-width: 369px;
      display: block;
    }
    @media screen and (min-width: 1024px) {
      max-width: 468px;
    }
    @media screen and (min-width: 1440px) {
      max-width: 714px;
    }
    @media screen and (min-width: 1920px) {
      max-width: 714px;
    }
    @media screen and (min-width: 2560px) {
      max-width: 895px;
    }
  }
}
</style>
