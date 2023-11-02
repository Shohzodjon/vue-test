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

/*  responvise */

@media screen and (min-width: 576px) and (max-width: 764px) {
  .base__btn {
    border-radius: 10px;
    padding: 10px;
    font-size: 11px;
    line-height: 14px;
  }
}

@media screen and (min-width: 765px) and (max-width: 991px) {
  .base__btn {
    border-radius: 12px;
    padding: 10px;
    font-size: 12px;
    line-height: 12px;
  }
}

@media screen and (min-width: 992px) and (max-width: 1199px) {
  .base__btn {
    padding: 14px;
  }
}
</style>
