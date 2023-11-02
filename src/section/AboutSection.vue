<script setup>
import AboutCard from "../components/AboutCard.vue";
</script>
<template>
  <section class="about__section">
    <div class="container">
      <h2 class="section__title">Почему Coozin?</h2>
      <div class="about__card__flex">
        <AboutCard />
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
