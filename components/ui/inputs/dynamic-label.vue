<template>
  <div class="">
    <div
      :class="[
        'input-container',
        { active: isFocused },
        { disabled },
        valid.valid ? 'valid' : 'invalid',
      ]"
    >
      <input
        :dir="isRtl ? 'rtl' : 'ltr'"
        type="text"
        :id="idLabel"
        :name="idLabel"
        class="input-field"
        :value="modelValue"
        @blur="onBlur"
        @focus="onFocus"
        @input="$emit('update:modelValue', $event.target.value)"
        ref="inputRef"
        :disabled="disabled"
      />
      <label
        :for="idLabel"
        :class="[
          'input-label',
          { active: isFocused || modelValue },
          { toRight: isRtl },
        ]"
        >{{ label }}</label
      >
      <!-- <span class="input-box"></span> -->
      <span
        :class="[
          'input-border input-box',
          { active: isFocused },
          { invalid: !valid.valid },
        ]"
      ></span>
      <span
        :class="[
          'input-border',
          { active: isFocused },
          { invalid: !valid.valid },
        ]"
      ></span>
    </div>
    <div
      v-if="!!valid.text.length"
      :class="['input-bottom', { invalid: !valid.valid }, { toRight: isRtl }]"
    >
      {{ valid.text }}
    </div>
  </div>
</template>
<script>
export default {
  props: {
    label: {
      type: String,
      default: "Label",
    },
    disabled: {
      type: Boolean,
      default: false,
    },
    modelValue: {
      type: String,
      default: "",
    },
    valid: {
      type: Object,
      default: () => {
        return {
          valid: true,
          text: "",
        };
      },
    },
    isRtl: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      isFocused: false,
      idLabel: "input-id",
    };
  },
  methods: {
    onFocus() {
      this.isFocused = true;
    },
    onBlur() {
      this.isFocused = false;
    },
    updateValue(val) {
      emit("update:modelValue", val.target.value);
    },
  },
  watch: {
    isFocused: function (val) {
      if (!val) {
        this.isFocused = false;
        this.$refs.inputRef.blur();
      } else {
        this.$refs.inputRef.focus();
        this.isFocused = true;
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.input {
  &-container {
    position: relative;
    min-width: 280px;
    border-radius: 3px;
    overflow: hidden;
    height: 60px;
    padding: 10px 0;
    cursor: pointer;
    transition: 0.2s ease;
    display: flex;
    align-items: flex-end;

    &.disabled {
      background: $color-white-shade;
      cursor: default;
    }
    &.valid {
      background: $color-white-shade;
      border: 1px solid $color-white-shade;
      &:hover {
        background: $color-white-hover;
      }
    }
    &.invalid {
      background: $color-danger-light;
      border: 1px solid $color-white-shade;
      &:hover {
        background: $color-danger-shade;
      }
    }
    &.active {
      background: $color-white-base;
      border: 1px solid $color-light-tint;
      &:hover {
        background: $color-white-base;
      }
    }
  }
  &-field {
    padding: 0px 16px;
    border: none;
    cursor: inherit;
    outline: none;
    font-size: 16px;
    line-height: 24px;
    color: $color-black-tint;
    width: 100%;
    background-color: transparent;
    &::selection {
      background: rgba(244, 187, 73, 0.3);
    }
  }
  &-label {
    position: absolute;
    padding-left: 16px;
    top: 0px;
    padding-top: 18px;
    width: 100%;
    height: 100%;
    font-weight: 400;
    font-size: 16px;
    color: $color-medium-tint;
    transition: all 0.2s ease-in-out;
    transform-origin: left;
    z-index: 10;
    &.active {
      padding-top: 5px;
      padding-bottom: 5px;
      height: auto;
      // transform: translateY(-10px);
      font-size: 12px;
      color: $color-black-base;
    }
    &.toRight {
      text-align: right;
      left: auto;
      right: 16px;
    }
  }

  &-border {
    position: absolute;
    bottom: 0;
    z-index: 2;
    left: 50%;
    width: 0%;
    height: 5px;
    background-color: $color-base;
    transform: translateX(-50%) scaleX(0);
    transform-origin: center;
    transition: 0.2s ease;
    &.active {
      width: 100%;
      transform: translateX(-50%) scaleX(1);
    }
    &.invalid {
      background-color: $color-danger-base;
    }
  }
  &-box {
    height: 3px;
    bottom: 2.5px;
    border-radius: 0 0 2px 2px;
    width: 100%;
    z-index: 3;
    background-color: $color-white-base;
    transition: 0.2s ease;
    &.invalid {
      background-color: $color-white-base;
    }
  }
  &-bottom {
    margin-top: 8px;
    font-weight: 400;
    font-size: 12px;
    color: $color-medium-tint;
    &.invalid {
      color: $color-danger-base;
    }
    &.toRight {
      text-align: right;
    }
  }
}
</style>
