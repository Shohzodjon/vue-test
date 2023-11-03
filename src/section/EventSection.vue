<script setup>
import ImageSlider from "../components/ImageSlider.vue";
import img1 from "@/assets/images/testimonial1.png";
import img2 from "@/assets/images/testimonial2.png";
import img3 from "@/assets/images/testimonial3.png";
import slider from "@/assets/images/slider-img.png";
import slider2 from "@/assets/images/slider-img2.png";
import slider3 from "@/assets/images/slider-img3.png";
const sliderImages = [slider, slider2, slider3, slider, slider2, slider3];
const testimonial = [
  {
    img: img1,
    desc: "When our designs need an expert opinion or approval, I know I can rely on your agency Thank you for all your help-I will be recommending you to everyone",
    name: "Livia",
    location: "USA",
  },
  {
    img: img2,
    desc: "When our designs need an expert opinion or approval, I know I can rely on your agency Thank you for all your help-I will be recommending you to everyone",
    name: "Safia",
    location: "Asia",
  },
  {
    img: img3,
    desc: "When our designs need an expert opinion or approval, I know I can rely on your agency Thank you for all your help-I will be recommending you to everyone",
    name: "Rano",
    location: "Uzbekistan",
  },
  {
    img: img1,
    desc: "When our designs need an expert opinion or approval, I know I can rely on your agency Thank you for all your help-I will be recommending you to everyone",
    name: "Livia",
    location: "USA",
  },
  {
    img: img2,
    desc: "When our designs need an expert opinion or approval, I know I can rely on your agency Thank you for all your help-I will be recommending you to everyone",
    name: "Jane",
    location: "Poland",
  },
];
</script>
<template>
  <section id="event">
    <div class="container">
      <ImageSlider :images="sliderImages" :testimonial="testimonial" />
    </div>
  </section>
</template>
<style scoped>
section {
  padding: 50px 0;
}

@media screen and (min-width: 350px) and (max-width: 575px) {
  section {
    padding: 20px 0;
  }
}

@media screen and (min-width: 576px) and (max-width: 764px) {
  section {
    padding: 25px 0;
  }
}

@media screen and (min-width: 765px) and (max-width: 991px) {
  section {
    padding: 30px 0;
  }
}

@media screen and (min-width: 992px) and (max-width: 1199px) {
  section {
    padding: 35px 0;
  }
}
</style>
