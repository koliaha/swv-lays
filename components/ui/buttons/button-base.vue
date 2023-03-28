<template>
  <div class="btn">
    {{ title || 'Go' }}
    <slot />
  </div>
  <!-- @click="onClick" -->
  <!-- <button :class="['loading-button', { 'is-loading': isLoading }]">
    <span v-if="isLoading" class="loader"></span>
    <slot></slot>
  </button> -->
</template>
<script lang="ts">
export default {
  props: {
    title:{
      type:String
    },
    isLoading: {
      type: Boolean,
      default: false,
    },
  },
  methods: {
    onClick() {
      this.$emit('click');
    },
  },
};
</script>
<style lang="scss">
.btn {
  max-width: 360px;
  width: 100%;
  background: $color-base;
  border-radius: 3px;
  font-size: 16px;
  text-align: center;
  color: white;
  font-weight: 400;
  padding: 18px;
  cursor: pointer;
}
.loading-button {
  position: relative;
  padding: 0.5rem 1rem;
  font-size: 1rem;
  border: none;
  outline: none;
  cursor: pointer;
  background-color: $color-shade;
  color: $color-white-base;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: darken($color-shade, 10%);
  }

  &.is-loading {
    cursor: default;

    &:hover {
      background-color: $color-shade;
    }
  }
}

.loader {
  position: absolute;
  left: 50%;
  top: 50%;
  width: 16px;
  height: 16px;
  margin: -8px 0 0 -8px;
  border: 2px solid $color-white-base;
  border-top-color: transparent;
  border-radius: 50%;
  animation: spin 1s linear infinite;
}

@keyframes spin {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
</style>
