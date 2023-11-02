<template>
  <div class="select__box">
    <label :for="props.selectType">{{ props.label }}</label>
    <select :id="props.selectType">
      <option :value="item.id" v-for="(item, i) in props.data" :key="i">
        {{ item.name }}
      </option>
    </select>
  </div>
</template>
<script setup>
import { defineProps } from "vue";
const props = defineProps({
  data: Array,
  selectType: String,
  label: String,
});
</script>
<style scoped>
.select__box {
  display: flex;
  flex-direction: column;
  gap: 8px;
}
.select__box label {
  font-size: 20px;
  font-weight: 500;
  color: var(--grey700);
}
.select__box select {
  border-radius: 8px;
  padding: 12px;
  border: 1px solid #9ca3af;
  background: #fff;
  color: #9ca3af;
  font-size: 18px;
  font-weight: 400;
  line-height: 24px;
  outline: none;
}
/*  responsive  */

@media screen and (min-width: 350px) and (max-width: 575px) {
  .select__box {
    display: flex;
    flex-direction: column;
    gap: 8px;
  }
  .select__box label {
    font-size: 16px;
  }
  .select__box select {
    border-radius: 8px;
    padding: 8px;
    font-size: 18px;
    line-height: 18px;
  }
}

@media screen and (min-width: 576px) and (max-width: 764px) {
  .select__box {
    display: flex;
    flex-direction: column;
    gap: 8px;
  }
  .select__box label {
    font-size: 16px;
  }
  .select__box select {
    border-radius: 8px;
    padding: 8px;
    font-size: 18px;
    line-height: 18px;
  }
}

@media screen and (min-width: 765px) and (max-width: 991px) {
  .select__box {
    display: flex;
    flex-direction: column;
    gap: 8px;
  }
  .select__box label {
    font-size: 16px;
  }
  .select__box select {
    border-radius: 8px;
    padding: 8px;
    font-size: 18px;
    line-height: 18px;
  }
}
@media screen and (min-width: 992px) and (max-width: 1199px) {
  .select__box select {
    border-radius: 8px;
    padding: 8px;
    font-size: 18px;
    line-height: 18px;
  }
}
</style>
