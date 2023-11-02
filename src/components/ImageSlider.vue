<script setup>
import { defineProps } from "vue";
import { Swiper, SwiperSlide } from "swiper/vue";
import { Navigation, A11y } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import arrowLeft from "@/assets/images/arrow-left.svg";
import arrowRight from "@/assets/images/arrow-right.svg";
import TestimonialCard from "./TestimonialCard.vue";
const modules = [Navigation, A11y];

const props = defineProps({
  images: {
    typeof: Array,
    require: true,
  },
  testimonial: {
    typeof: Array,
    require: true,
  },
});
</script>

<template>
  <div>
    <div class="swiper__btns">
      <button class="swiper-next" aria-label="button">
        <img :src="arrowLeft" alt="arrow img" />
      </button>
      <h2 class="section__title">Мероприятия</h2>
      <button class="swiper-prev prev__shape" aria-label="button">
        <img :src="arrowRight" alt="arrow right" />
      </button>
    </div>
    <div class="slider__wrapper">
      <Swiper
        :modules="modules"
        :slides-per-view="3"
        :space-between="32"
        :navigation="{
          nextEl: '.swiper-next',
          prevEl: '.swiper-prev',
        }"
      >
        <SwiperSlide v-for="(img, index) in props.images" :key="index">
          <div class="img__slider">
            <img :src="img" alt="slider img" />
          </div>
        </SwiperSlide>
      </Swiper>
    </div>

    <h2 class="section__title testimonial__title">Наши довольные вендоры</h2>
    <Swiper
      :modules="modules"
      :slides-per-view="3"
      :space-between="32"
      :navigation="{
        nextEl: '.swiper-next',
        prevEl: '.swiper-prev',
      }"
    >
      <SwiperSlide v-for="(item, i) in props.testimonial" :key="i">
        <TestimonialCard
          :desc="item.desc"
          :img="item.img"
          :name="item.name"
          :location="item.location"
        />
      </SwiperSlide>
    </Swiper>
  </div>
</template>
<style scoped>
.swiper__btns {
  display: flex;
  justify-content: space-between;
  margin-bottom: 60px;
}
.swiper__btns .swiper-next,
.swiper__btns .swiper-prev {
  border: none;
  background: none;
  cursor: pointer;
}
.swiper__btns img {
  width: 30px;
  height: 30px;
}

.slider__wrapper {
  padding-bottom: 48px;
}
.img__slider {
  width: 100%;
  max-width: 405px;
}
.img__slider img {
  width: 100%;
}
.swiper-initialized {
  padding-bottom: 10px;
}
.testimonial__title {
  margin: 34px 0 48px;
}
</style>
