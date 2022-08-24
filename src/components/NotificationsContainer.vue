<template>
  <div class="notifications-container">
    <div :class="'fixed notifications '+position" v-for="(position, index) in positionList" :key="index">
      <Notification v-for="(notification, index) in notificationList" :key="index"/>
    </div>
  </div>
</template>
<script setup lang="ts">
import Notification from "../components/Notification.vue";

defineProps(['positionList', 'notificationList'])
</script>
<style lang="css">
.notifications--top {

}
</style>