<template>
  <a :href="data.link" class="solial-link">
    <img :src="data.icon" :alt="data.icon" />
  </a>
</template>
<script>
export default {
  props: ["data"],
  computed: {},
  methods: {
    getImg(icon) {
      return new URL(`~/assets/images/icons/${icon}.svg`, import.meta.url);
    },
  },
};
</script>
<style lang="scss">
.solial-link {
  width: 60px;
  height: 60px;
  border-radius: 50%;
  background: $color-white-shade;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: 0.2s ease-in;
  &:hover{
    opacity: 0.6;
  }
}
</style>
