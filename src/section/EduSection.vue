<script setup>
import CheckCourse from "../components/CheckCourse.vue";
</script>
<template>
  <section class="edu__section">
    <div class="container">
      <div class="edu__flex">
        <div class="edu__flex__left">
          <img src="@/assets/images/img4.png" alt="img" />
        </div>
        <div class="edu__flex__right">
          <h2 class="edu__section__title">EDU COOZIN</h2>
          <p class="edu__section__desc">
            Онлайн-академия Coozin предоставляет обучение и помощь в развитии
            бизнеса.
          </p>
          <CheckCourse />
        </div>
      </div>
    </div>
  </section>
</template>
<style scoped>
.edu__section {
  padding: 48px 0;
  background: #fff;
}
.edu__flex {
  display: flex;
  gap: 140px;
  align-items: center;
}
.edu__flex__left {
  max-width: 569px;
  border-radius: 16px;
  width: 100%;
  overflow: hidden;
}
.edu__flex__left img {
  width: 100%;
  border-radius: 16px;
}
.edu__flex__right .edu__section__title {
  font-size: 36px;
  font-weight: 600;
  line-height: 36px;
  color: var(--grey800);
  margin-bottom: 24px;
}
.edu__section__desc {
  font-size: 16px;
  font-weight: 400;
  line-height: 150%;
  color: var(--grey700);
}

/*  responsive  */

@media screen and (min-width: 350px) and (max-width: 575px) {
  .edu__section {
    padding: 24px 0;
  }
  .edu__flex {
    gap: 24px;
    align-items: flex-start;
    flex-direction: column;
  }
  .edu__flex__left {
    max-width: 569px;
    text-align: center;
  }
  .edu__flex__left img {
    width: 100%;
    max-height: 283px;
    max-width: 328px;
    height: 100%;
  }
  .edu__flex__right .edu__section__title {
    margin-bottom: 12px;
    font-size: 24px;
    line-height: 36px;
  }
}

@media screen and (min-width: 576px) and (max-width: 764px) {
  .edu__section {
    padding: 24px 0;
  }
  .edu__flex {
    gap: 24px;
    align-items: flex-start;
    flex-direction: column;
  }
  .edu__flex__left {
    max-width: 569px;
    text-align: center;
  }
  .edu__flex__left img {
    width: 100%;
    max-height: 350px;
    max-width: 450px;
    height: 100%;
  }
  .edu__flex__right .edu__section__title {
    margin-bottom: 12px;
    font-size: 24px;
    line-height: 36px;
  }
}

@media screen and (min-width: 765px) and (max-width: 991px) {
  .edu__section {
    padding: 40px 0;
  }
  .edu__flex {
    gap: 50px;
    align-items: center;
    flex-direction: row;
  }
  .edu__flex__left {
    max-width: 569px;
    text-align: center;
    width: 560px;
  }
  .edu__flex__left img {
    width: 100%;
    height: 100%;
    max-width: 550px;
    max-height: 450px;
  }
  .edu__flex__right {
    max-width: 50%;
  }
  .edu__flex__right .edu__section__title {
    margin-bottom: 10px;
    font-size: 24px;
    line-height: 30px;
  }
}

@media screen and (min-width: 992px) and (max-width: 1199px) {
  .edu__section {
    padding: 48px 0;
  }
  .edu__flex {
    display: flex;
    gap: 80px;
    align-items: center;
  }
  .edu__flex__left {
    max-width: 569px;
    border-radius: 16px;
    width: 100%;
    overflow: hidden;
  }
  .edu__flex__left img {
    width: 100%;
    border-radius: 16px;
  }
  .edu__flex__right .edu__section__title {
    font-size: 32px;
    line-height: 30px;
    margin-bottom: 20px;
  }
}

@media screen and (min-width: 1200px) and (max-width: 1279px) {
}
</style>
