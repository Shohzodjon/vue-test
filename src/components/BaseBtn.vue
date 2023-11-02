<template>
  <button class="base__btn">{{ props.btnContent }}</button>
</template>
<script setup>
import { defineProps } from "vue";
const props = defineProps({
  btnContent: String,
});
</script>
<style scoped>
.base__btn {
  border-radius: 16px;
  border: 1px dashed var(--orange-color);
  padding: 16px;
  font-size: 16px;
  color: #fff;
  background: var(--orange-color);
  font-weight: 500;
  line-height: 16px;
  cursor: pointer;
}
</style>
