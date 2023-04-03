<template>
  <a :href="data.link" class="solial-link" @mouseover="hovered = true" @mouseleave="hovered = false">
    <img v-if="!hovered" :src="data.icon" :alt="data.icon" />
    <img v-else :src="data.iconHover" :alt="data.iconHover" />
  </a>
</template>
<script>
export default {
  props: ["data"],
  computed: {},
  data() {
    return {
      hovered: false,
    };
  },
};
</script>
<style lang="scss">
.solial {
  &-link {
    width: 60px;
    height: 60px;
    border-radius: 50%;
    background: $color-white-shade;
    display: flex;
    align-items: center;
    justify-content: center;
    outline: none;
    transition: 0.1s background;
    user-select: none;
    &:hover {
      background: $color-white-hover;
    }
  }
}
</style>
