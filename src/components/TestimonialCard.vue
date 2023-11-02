<script setup>
import QuoteIcon from "../assets/icons/QuoteIcon.vue";
import { defineProps } from "vue";

const props = defineProps({
  desc: String,
  img: String,
  name: String,
  location: String,
});
</script>
<template>
  <div class="testimonial__card">
    <div class="card__info">
      <QuoteIcon />
      <p>
        {{ props.desc }}
      </p>
      <span class="square__shape"></span>
    </div>
    <div class="card__img">
      <img :src="props.img" alt="img" />
      <h6>{{ props.name }}</h6>
      <p>{{ props.location }}</p>
    </div>
  </div>
</template>
<style scoped>
.testimonial__card {
  text-align: center;
  background: #fff;
  border-radius: 16px;
  padding-bottom: 12px;
  transition: all linear 0.5s;
  box-shadow: rgba(33, 35, 38, 0.1) 0px 10px 10px -10px;
}
.testimonial__card:hover {
  box-shadow: rgba(0, 0, 0, 0.15) 0px 5px 15px 0px;
}
.card__info {
  padding: 48px;
  background: #f3f4f6;
  border-radius: 16px;
  position: relative;
}
.card__info p {
  font-size: 16px;
  font-weight: 400;
  line-height: 150%;
  color: var(--grey700);
  margin-top: 16px;
}
.square__shape {
  width: 22.517px;
  height: 20px;
  background: #f3f4f6;
  display: inline-block;
  position: absolute;
  transform: translateX(-50%);
  bottom: -4%;
  transform: rotate(-45deg);
}
.card__img {
  margin-top: 40px;
  text-align: center;
}
.card__img h6 {
  font-size: 16px;
  font-weight: 600;
  line-height: 16px;
  color: var(--grey800);
  margin: 8px 0;
}
.card__img p {
  font-size: 16px;
  font-weight: 400;
  line-height: 16px;
  color: var(--grey800);
}
</style>
