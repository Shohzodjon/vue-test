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

/*  responsive  */

@media screen and (min-width: 350px) and (max-width: 575px) {
  .base__input {
    display: flex;
    flex-direction: column;
    gap: 8px;
  }
  .base__input label {
    font-size: 16px;
  }
  .base__input input {
    border-radius: 8px;
    padding: 8px;
    font-size: 18px;
    line-height: 18px;
  }
}

@media screen and (min-width: 576px) and (max-width: 764px) {
  .base__input {
    display: flex;
    flex-direction: column;
    gap: 8px;
  }
  .base__input label {
    font-size: 16px;
  }
  .base__input input {
    border-radius: 8px;
    padding: 8px;
    font-size: 18px;
    line-height: 18px;
  }
}

@media screen and (min-width: 765px) and (max-width: 991px) {
  .base__input {
    display: flex;
    flex-direction: column;
    gap: 8px;
  }
  .base__input label {
    font-size: 16px;
  }
  .base__input input {
    border-radius: 8px;
    padding: 8px;
    font-size: 18px;
    line-height: 18px;
  }
}
@media screen and (min-width: 992px) and (max-width: 1199px) {
  .base__input input {
    border-radius: 8px;
    padding: 8px;
    font-size: 18px;
    line-height: 18px;
  }
}
</style>
