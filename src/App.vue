<script setup>
import { onMounted } from "vue";
import Navbar from "./components/Navbar.vue";
import HeaderSection from "./section/HeaderSection.vue";
import EduSection from "./section/EduSection.vue";
import AboutSection from "./section/AboutSection.vue";
import ContactSection from "./section/ContactSection.vue";
import EventSection from "./section/EventSection.vue";
import Footer from "./section/Footer.vue";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

onMounted(() => {
  let tl = gsap.timeline();
  tl.from(".first__title", {
    delay: 0.5,
    opacity: 0,
    duration: 2,
    ease: "bounce",
    y: -200,
  });
  tl.from(".grid__item", {
    opacity: 0,
    duration: 2,
    ease: "easy",
    x: 200,
  });
  gsap.from(".about__card", {
    opacity: 0,
    duration: 2,
    ease: "easy",
    y: -300,
    scrollTrigger: ".about__card",
  });
  gsap.from(".edu__flex__left", {
    opacity: 0,
    duration: 2,
    ease: "easy",
    y: 300,
    skewX: 5,
    skewY: 10,
    scrollTrigger: ".edu__flex__left",
  });
  gsap.from(".edu__flex__right", {
    opacity: 0,
    duration: 2,
    ease: "easy",
    x: 300,
    scrollTrigger: ".edu__flex__right",
  });
  gsap.from(".contact__img", {
    opacity: 0,
    duration: 2,
    ease: "easy",
    scale: 2.5,
    x: 500,
    scrollTrigger: ".contact__img",
  });
});
</script>

<template>
  <section>
    <Navbar />
    <HeaderSection />
    <EduSection />
    <AboutSection />
    <ContactSection />
    <EventSection />
    <Footer />
  </section>
</template>

<style scoped></style>
