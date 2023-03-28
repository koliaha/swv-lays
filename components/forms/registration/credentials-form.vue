<template>
  <div v-if="isRtl === 'false'">isRtl</div>
  <div v-if="isRtl === 'true'">
    <div class="form-wrapper">
      <nuxt-link to="/" class="back form-back">
        <img src="@/assets/images/icons/arrow.svg" alt="arrow" />
      </nuxt-link>
      <form class="form">
        <h2 class="form-title">Join the battlefield</h2>
        <ui-inputs-dynamic-label
          class="form-input"
          label="Text"
          v-model="formModel.email"
          :valid="textValid"
        />
        <ui-buttons-button-base
          class="form-btn"
          title="Continue"
          :isLoading="isLoading"
          @click="toggleLoading"
          ></ui-buttons-button-base
        >
        <p class="form-terms">
          By continuing, you agree to Selfwork's
          <a href="">Terms of Service</a> and acknowledge you've read our
          <a href="">Privacy Policy</a>
        </p>
      </form>
      <div class="form-variants">
        <div class="form-variants-text">Or sign up with</div>
      </div>
      <social-list class="form-social" />
    </div>
  </div>
</template>

<script lang="ts">
export default {
  props: ["isRtl"],
  data() {
    return {
      textValid: {
        valid: true,
        text: "Success Text",
      },
      formModel: {
        email: "",
      },
      isLoading: false,
    };
  },
  methods: {
    toggleLoading() {
      this.isLoading = !this.isLoading;
    },
  },
};
</script>
<style lang="scss">
.form {
  &-back{
    display: none;
    @media screen and (min-width: 1024px) {
      display: block;
    }
  }
  &-wrapper {
    max-width: 343px;
    @media screen and (min-width: 376px) {
      max-width: 360px;
    }
    width: 100%;
    height: 510px;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    position: relative;
    @media screen and (min-width: 768px) {
      justify-content: end;
    }
  }

  &-title {
    font-size: 28px;
    text-align: center;
    margin-bottom: 48px;
  }
  &-input {
    margin-bottom: 30px;
  }
  &-btn {
    margin-bottom: 16px;
  }
  &-terms {
    text-align: center;
    font-size: 12px;
    line-height: 16px;
    margin-bottom: 30px;
    color: $color-medium-tint;
    a {
      color: $color-base;
    }
  }
  &-variants {
    position: relative;
    text-align: center;
    font-size: 14px;
    color: $color-medium-tint;
    width: 100%;
    overflow-x: hidden;
    margin-bottom: 30px;
    &-text {
      position: relative;
      &::before,
      &::after {
        content: "";
        position: absolute;
        height: 1px;
        max-width: 100px;
        width: 100%;
        background: $color-light-tint;
        top: 50%;
        left: 8px;
      }
      &::after {
        left: auto;
        right: 8px;
      }
    }
  }
}

</style>
