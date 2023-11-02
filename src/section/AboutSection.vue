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
</style>
