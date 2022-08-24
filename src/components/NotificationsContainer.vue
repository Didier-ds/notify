<template>
  <div class="notifications-container">
    <div :class="'fixed notifications '+position" v-for="(position, index) in positionList" :key="index">
      <transition-group name="list">
        <Notification v-for="(notification, index) in notificationList" :type="notification.type" :key="index"/>
      </transition-group>
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
.list-enter-active,
.list-leave-active {
  transition: all 0.5s ease;
}
.list-enter-from,
.list-leave-to {
  opacity: 0;
  transform: translateX(30px);
}
</style>