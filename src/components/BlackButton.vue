<template>
  <component :is="as" @click="$emit('click')">Hit me</component>
</template>
<script setup>
defineProps(['as'])
</script>