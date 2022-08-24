<template>
  <div class="rounded-lg h-20 w-[20em] m-4 font-medium bg-blue-500 shadow-lg flex justify-center items-center">
  <div>A Successful Toast..</div>
    {{ count }}
  </div>
</template>
<script setup lang="ts">
defineProps(["count"])
</script>