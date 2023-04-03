<template>
 <div class="container">
    <header-nav :is-rtl="true">
      <template #nav-content>
        <div class="nav-content__text">
          <a href="">هل لديك حساب؟</a> تسجيل الدخول 
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
      layout: 'registration-rtl',
    };
  },
}
</script>

