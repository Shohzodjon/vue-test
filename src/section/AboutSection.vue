<script setup>
import AboutCard from "../components/AboutCard.vue";

import rocet from "@/assets/images/rocet.png";
import chart from "@/assets/images/chart.png";
import treasure from "@/assets/images/treasure.png";
const items = [
  {
    img: rocet,
    title: "Универсальная платформа",
    desc: "Предназначенная для самозанятых женщин превратить свое хобби в прибыльный бизнес",
    id: 1,
  },
  {
    img: chart,
    title: "Универсальная платформа",
    desc: "Предназначенная для самозанятых женщин превратить свое хобби в прибыльный бизнес",
    id: 1,
  },
  {
    img: treasure,
    title: "Универсальная платформа",
    desc: "Предназначенная для самозанятых женщин превратить свое хобби в прибыльный бизнес",
    id: 1,
  },
];
</script>
<template>
  <section class="about__section" id="about">
    <div class="container">
      <h2 class="section__title">Почему Coozin?</h2>
      <div class="about__card__flex">
        <AboutCard :items="items" />
      </div>
    </div>
  </section>
</template>
<style scoped>
.about__section {
  padding: 104px 0 80px;
}
.section__title {
  margin-bottom: 48px;
}

/*  responsive  */

@media screen and (min-width: 350px) and (max-width: 575px) {
  .about__section {
    padding: 22px 0;
  }
  .section__title {
    margin-bottom: 28px;
  }
}

@media screen and (min-width: 576px) and (max-width: 764px) {
  .about__section {
    padding: 30px 0;
  }
  .section__title {
    margin-bottom: 32px;
  }
}

@media screen and (min-width: 765px) and (max-width: 991px) {
  .about__section {
    padding: 50px 0;
  }
}

@media screen and (min-width: 992px) and (max-width: 1199px) {
  .about__section {
    padding: 70px 0 80px;
  }
}

@media screen and (min-width: 1200px) and (max-width: 1279px) {
}
</style>
