<template>
  <div v-if="isRtl === false">
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
  <div v-if="isRtl === true">
    <div class="form-wrapper">
      <nuxt-link to="/" class="back reverse form-back">
        <img src="@/assets/images/icons/arrow.svg" alt="arrow" />
      </nuxt-link>
      <form class="form">
        <h2 class="form-title">انضم إلى ساحة المعركة</h2>
        <ui-inputs-dynamic-label
          class="form-input"
          label="بريد إلكتروني"
          v-model="formModel.email"
          :valid="textValid"
          is-rtl
        />
        <ui-buttons-button-base
          class="form-btn"
          title="يكمل"
          :isLoading="isLoading"
          @click="toggleLoading"
          ></ui-buttons-button-base
        >
        <p class="form-terms">
          <a href="">بالمتابعة ، فإنك توافق على</a> Selfwork's شروط الخدمة 
          <a href="">سياسة الخصوصية</a>وتقر بأنك قرأت
        </p>
      </form>
      <div class="form-variants">
        <div class="form-variants-text">أو اشترك مع</div>
      </div>
      <social-list class="form-social" :is-rtl="true"/>
    </div>
  </div>
</template>

<script lang="ts">
export default {
  props: {
    isRtl:{
      default:false
    }
  },
  data() {
    return {
      textValid: {
        valid: true,
        text: "",
      },
      formModel: {
        email: "",
      },
      isLoading: false,
    };
  },
  methods: {
    toggleLoading() {
      this.textValid.valid = false
      this.textValid.text= this.isRtl ? "انتظر ، لا يبدو هذا كعنوان بريد إلكتروني" : "Wait, that doesn't look like an email address"
      this.isLoading = !this.isLoading;
    },
  },
};
</script>

