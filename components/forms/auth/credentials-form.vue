<template>
  <div v-if="isRtl === 'false'">
    <form style="padding:100px">
      <div style="padding-bottom:10px">
        <label>
          Username
          <input
            v-model="username"
            style="border:solid 1px black"
            name="username"
            type="text"
          >
        </label>
      </div>
      <div style="padding-bottom:10px">
        <label>
          Password
          <input
            v-model="password"
            style="border:solid 1px black"
            name="password"
            type="password"
          >
        </label>
      </div>
    </form>
    <div style="padding-left:100px">
      <button @click="auth()">
        login
      </button>
    </div>
  </div>
  <div v-if="isRtl === 'true'">
    form rtl
  </div>
  {{ errors }}
</template>

<script lang="ts">
  export default {
    props: ['isRtl'],
    data() {
      return {
        username: '',
        password: '',
        errors: ''
      };
    },
    methods: {
      async auth() {
      }
    }
  };
</script>