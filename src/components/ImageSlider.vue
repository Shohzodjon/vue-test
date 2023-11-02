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
      <button class="swiper-prev prev__shape" aria-label="button">
        <img :src="arrowLeft" alt="arrow img" />
      </button>
      <h2 class="section__title">Мероприятия</h2>
      <button class="swiper-next" aria-label="button">
        <img :src="arrowRight" alt="arrow right" />
      </button>
    </div>
    <div class="slider__wrapper">
      <Swiper
        :modules="modules"
        :slides-per-view="3"
        :space-between="32"
        effect="coverflow"
        :navigation="{
          nextEl: '.swiper-next',
          prevEl: '.swiper-prev',
        }"
        :breakpoints="{
          350: {
            slidesPerView: 1,
            spaceBetween: 10,
          },
          576: {
            slidesPerView: 2,
            spaceBetween: 10,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 25,
          },
          992: {
            slidesPerView: 3,
            spaceBetween: 25,
          },
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
      :breakpoints="{
        350: {
          slidesPerView: 1,
          spaceBetween: 10,
        },
        576: {
          slidesPerView: 2,
          spaceBetween: 15,
        },
        768: {
          slidesPerView: 2,
          spaceBetween: 25,
        },
        992: {
          slidesPerView: 3,
          spaceBetween: 25,
        },
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

/*  response */
@media screen and (min-width: 350px) and (max-width: 575px) {
  .slider__wrapper {
    padding-bottom: 28px;
  }
  .img__slider {
    width: 100%;
    max-width: 100%;
  }
  .testimonial__title {
    margin: 24px 0 38px;
  }
}

@media screen and (min-width: 576px) and (max-width: 764px) {
}

@media screen and (min-width: 765px) and (max-width: 991px) {
}

@media screen and (min-width: 992px) and (max-width: 1199px) {
}

@media screen and (min-width: 1200px) and (max-width: 1279px) {
}
</style>
