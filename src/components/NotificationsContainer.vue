<template>
  <div class="notifications-container">
    <div :class="'fixed notifications '+position" v-for="(position, index) in positionList" :key="index">
      <transition-group name="list">
        <Notification v-for="(notification, index) in notificationList[position].value" :config="notification" :key="index"/>
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

.notifications {
  position: fixed
}
.notifications.top-left {
  top: 0;
  left: 0;
}
.notifications.top-right {
  top: 0;
  right: 0;
}
.notifications.bottom-left {
  bottom: 0;
  left: 0;
}
.notifications.bottom-right {
  bottom: 0;
  right: 0;
}
</style>