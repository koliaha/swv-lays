<template>
  <div class="nav">
    <Logo class="nav-logo" />
    <div class="nav-text">
      <slot name="nav-content" />
    </div>
  </div>
</template>
<script lang="ts"></script>

<style lang="scss">
.nav {
  padding: 29px 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
  &-logo {
    margin: 0 auto;
    @media screen and (min-width: 768px) {
        margin: 0 ;
  }
  }
  &-text {
    display: none;
    @media screen and (min-width: 768px) {
        display: block;
  }
  }
}
</style>
