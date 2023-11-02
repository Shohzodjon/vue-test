<template>
  <div class="drop__down">
    <span>UZ</span>
    <!-- <ul class="lang__list">
      <li>RU</li>
      <li>EN</li>
      <li>UZ</li>
    </ul> -->
  </div>
</template>
<script setup>
import { ref } from "vue";
const show = ref(false);
const toggleFunc = () => {
  show.value = !show.value;
};
</script>
<style scoped>
.drop__down {
  background: #f3f4f6;
  width: 48px;
  height: 48px;
  border-radius: 16px;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
}
.drop__down span {
  font-size: 16px;
  font-weight: 500;
  line-height: 24px;
  color: var(--grey800);
}
.lang__list {
  margin-top: 10px;
}

@media screen and (min-width: 576px) and (max-width: 764px) {
  .drop__down {
    width: 38px;
    height: 38px;
    border-radius: 12px;
  }
  .drop__down span {
    font-size: 14px;
  }
}

@media screen and (min-width: 765px) and (max-width: 991px) {
  .drop__down {
    width: 38px;
    height: 38px;
    border-radius: 10px;
  }
  .drop__down span {
    font-size: 14px;
  }
}
</style>
