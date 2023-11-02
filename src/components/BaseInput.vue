<script setup>
defineProps({
  id: String,
  labelText: String,
  modelValue: String,
  type: String,
});
</script>
<template>
  <div class="base__input">
    <label :for="id">{{ labelText }}</label>
    <input
      :value="modelValue"
      @change="$emit('update:modelValue', $event.target.value)"
      :id="id"
      :type="type"
      autocomplete="off"
    />
  </div>
</template>
<style scoped>
.base__input {
  display: flex;
  flex-direction: column;
  gap: 8px;
}
.base__input label {
  font-size: 20px;
  font-weight: 500;
  color: var(--grey700);
}
.base__input input {
  border-radius: 8px;
  padding: 12px;
  border: 1px solid #9ca3af;
  background: #fff;
  color: #9ca3af;
  font-size: 20px;
  font-weight: 400;
  line-height: 24px;
  outline: none;
}
</style>
