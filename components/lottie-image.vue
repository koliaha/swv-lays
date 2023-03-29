<template>
  <LottieAnimation
    :animation-data="RegistrationJSON"
    :loop="true"
    :auto-play="true"
  />
</template>
<script setup>
import { LottieAnimation } from "lottie-web-vue";
import RegistrationJSON from "@/public/animation/registration2.json";
</script>
