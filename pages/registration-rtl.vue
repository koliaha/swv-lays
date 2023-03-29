<template>
 <div class="container">
    <nav-bar :is-rtl="true">
      <template #nav-content>
        <div class="nav-content__text">
          <a href="">هل لديك حساب؟</a> تسجيل الدخول 
        </div>
      </template>
    </nav-bar>
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

