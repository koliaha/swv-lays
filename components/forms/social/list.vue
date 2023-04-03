<template>
  <div class="solial-links" :class="{ socialReverse: isRtl }">
    <forms-social-item
      v-for="(item, index) in socialList"
      :key="index"
      :data="item"
    />
  </div>
</template>
<script setup>
const isRtl = defineProps();
const images = import.meta.glob(["assets/images/icons/social/*.svg"], {
  import: "default",
  eager: true,
  as: "url",
});
const socialList = [
  {
    id: 1,
    link: "",
    icon: images["/assets/images/icons/social/apple-dark.svg"],
    iconHover: images["/assets/images/icons/social/apple.svg"],
  },
  {
    id: 2,
    link: "",
    icon: images["/assets/images/icons/social/google-dark.svg"],
    iconHover: images["/assets/images/icons/social/google.svg"],
  },
  {
    id: 3,
    link: "",
    icon: images["/assets/images/icons/social/fb-dark.svg"],
    iconHover: images["/assets/images/icons/social/fb.svg"],
  },
  {
    id: 4,
    link: "",
    icon: images["/assets/images/icons/social/twitter-dark.svg"],
    iconHover: images["/assets/images/icons/social/twitter.svg"],
  },
  {
    id: 5,
    link: "",
    icon: images["/assets/images/icons/social/linked-dark.svg"],
    iconHover: images["/assets/images/icons/social/linked.svg"],
  },
];
</script>
<style lang="scss">
.solial-links {
  display: flex;
  gap: 15px;
  &.socialReverse {
    flex-direction: row-reverse;
  }
}
</style>
