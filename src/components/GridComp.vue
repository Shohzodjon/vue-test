<template>
  <div class="grid__box">
    <div v-for="(img, index) in props.images" :key="index" class="grid__item">
      <img :src="img" alt="img" />
    </div>
  </div>
</template>

<script setup>
import { defineProps } from "vue";

const props = defineProps({
  images: {
    type: Array,
    required: true,
  },
});
// import img from '../assets/images/'
</script>

<style scoped>
.grid__box {
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  gap: 20px;
}
.grid__item {
  border-radius: 16px;
  overflow: hidden;
}
.grid__item:nth-child(1),
.grid__item:nth-child(4) {
  grid-column-start: span 8;
}
.grid__item:nth-child(2),
.grid__item:nth-child(3) {
  grid-column-start: span 4;
}
.grid__item img {
  width: 100%;
  transition: all linear 0.4s;
  height: 100%;
}
.grid__item:hover img {
  transform: scale(1.1);
}

/*   responsive  */

@media screen and (min-width: 350px) and (max-width: 575px) {
  .grid__box {
    gap: 12px;
  }
}

@media screen and (min-width: 576px) and (max-width: 764px) {
}

@media screen and (min-width: 765px) and (max-width: 991px) {
}
</style>
