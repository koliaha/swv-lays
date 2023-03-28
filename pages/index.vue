<template>
  <h1>Selfwork Layouts</h1>
  <nav>
    <ul>
      <li>
        <nuxt-link to="/authorization">Authorization</nuxt-link>
      </li>
      <li>
        <nuxt-link to="/authorization-rtl">Authorization RTL</nuxt-link>
      </li>
      <li>
        <nuxt-link to="/registration">Registration</nuxt-link>
      </li>
      <li>
        <nuxt-link to="/registration-rtl">Registration RTL</nuxt-link>
      </li>
      <li>
        <nuxt-link to="/reset-password">Reset Password</nuxt-link>
      </li>
      <li>
        <nuxt-link to="/reset-password-rtl">Reset Password RTL</nuxt-link>
      </li>
    </ul>
  </nav>
</template>


<script lang="ts">
// all places use vue basic syntax

//for example

//import { useFiltersStore } from '~/stores/filters'
//import { storeToRefs } from 'pinia'

//export default {
//  async setup() {
//    const { locale, t } = useI18n()
//    const localePath = useLocalePath()

//    return {
//      locale,
//      t,
//    }
//  },

//  data() {
//    return {
//      layout: 'main',
//      inputVal: ref(''),
//    };
//  },

//  methods: {
//    async logClient() {
//      await useFetch('/api/logs/client', {
//        method: 'post',
//        body: {
//          _csrf: this.csrf,
//          level: 'info',
//          message: 'log',
//          service: 'swc-frontend-client',
//        }
//      })
//    }
//  }
//}
</script>

<style lang="scss">
</style>
