<template>
  <NuxtLink to="/" class="logo">
    <img src="@/assets/images/logo.svg" alt="logo" />
  </NuxtLink>
</template>
<style lang="scss">
.logo {
  max-width: 125px;
  @media screen and (min-width: 2560px) {
    max-width: 164px;
  }
  img{
    width: 100%;
  }
}
</style>
