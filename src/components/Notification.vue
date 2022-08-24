<template>
  <div class="rounded-xl w-[20em] m-4 font-medium shadow-lg" :class="computedClass">
<!--  <div>A Successful Toast..</div>-->
    <div class="flex justify-between p-4">
      <div class="inline-flex items-center gap-2">
      <template v-if="type && type === 'negative' ">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM13 17H11V15H13V17ZM13 13H11V7H13V13Z" fill="currentColor"/>
        </svg>
      </template>
        <template v-if="type && type === 'positive' ">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M8.8002 15.9L4.6002 11.7L3.2002 13.1L8.8002 18.7L20.8002 6.69999L19.4002 5.29999L8.8002 15.9Z" fill="currentColor"/>
          </svg>
        </template>
        <p class="capitalize text-sm font-semibold">{{ type }}</p>
      </div>
      <div class="inline-flex items-center gap-2">
        <p class="text-xs font-semibold">11 mins ago</p>
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M19 6.41L17.59 5L12 10.59L6.41 5L5 6.41L10.59 12L5 17.59L6.41 19L12 13.41L17.59 19L19 17.59L13.41 12L19 6.41Z" fill="white"/>
        </svg>
      </div>
    </div>
    <div class="p-4">
      <p class="text-sm font-semibold">{{ message }}</p>
    </div>
  </div>
</template>
<script setup lang="ts">
import {computed} from "vue";
const props = defineProps({
  type: {
    type: String,
    default: ''
  }, message: {
    type: String,
    default: "This is a toast"
  }
})
const computedClass = computed(() => {
  let res = "";
  if(props.type){
    switch (props.type){
      case "negative":
        res = "negative";
      break;
      case "positive":
          res = "positive";
      break;
      default:
        res = "bg-white text-gray-500/60"
    }
  }
  return res
})
</script>
<style>
.negative {
  background: #E62E2E;
  /* Shadows/Red/20%/60b */
  box-shadow: 0px 30px 60px rgba(230, 46, 46, 0.2);
}
.positive {
  background: #29CC39;
  box-shadow: 0px 30px 60px rgba(41, 204, 57, 0.2);
}
</style>