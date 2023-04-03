<template>
  <div class="solial-links" :class="{ socialReverse: isRtl }">
    <forms-social-item v-for="(item, index) in socialList" :key="index" :data="item" />
  </div>
</template>
<script setup>
  const isRtl = defineProps()
const images = import.meta.glob(["assets/images/icons/*.svg"], {
  import: "default",
  eager: true,
  as: "url",
});
const socialList = [
  {
    id: 1,
    link: "",
    icon: images["/assets/images/icons/apple.svg"],
  },
  {
    id: 2,
    link: "",
    icon: images["/assets/images/icons/google.svg"],
  },
  {
    id: 3,
    link: "",
    icon: images["/assets/images/icons/fb.svg"],
  },
  {
    id: 4,
    link: "",
    icon: images["/assets/images/icons/twitter.svg"],
  },
  {
    id: 5,
    link: "",
    icon: images["/assets/images/icons/linked.svg"],
  },
];
</script>
<style lang="scss">
.solial-links{
    display: flex;
    gap: 15px;
    &.socialReverse{
    flex-direction: row-reverse;
    }
}
</style>
