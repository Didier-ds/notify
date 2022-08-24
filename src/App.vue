<template>
  <div>Hi There hbjnk</div>
  <Notification :count="count"/>
  <inline-svg :src="'./vite.svg'"></inline-svg>
  <button @click="alertMe">Notify</button>
</template>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
<script setup lang="ts">
import InlineSvg from 'vue-inline-svg';
import Notification from "./components/Notification.vue";
import notify from "./plugin/notify";
import {ref} from "vue";
const count = ref(2)
const alertMe = () => {
  // console.log("me")
  const config = {
    type: 'positive',
    message: "Successful",
    position: "top-left"
  }
  notify.notify(config)
}
</script>