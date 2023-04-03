<template>
  <div class="lottie">
    <LottieAnimation
      :animation-data="RegistrationJSON"
      :loop="true"
      :auto-play="true"
    />
  </div>
</template>
<script setup>
import { LottieAnimation } from "lottie-web-vue";
import RegistrationJSON from "/src/registration2.json";
</script>
