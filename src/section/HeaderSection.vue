<script setup>
import BaseBtn from "../components/BaseBtn.vue";
import NumberAnime from "../components/NumberAnime.vue";
import GridComp from "../components/GridComp.vue";

import img1 from "@/assets/images/img1.png";
import img2 from "@/assets/images/img6.png";
import img3 from "@/assets/images/img3.png";
import img4 from "@/assets/images/img5.png";

const images = [img1, img2, img3, img4];
</script>
<template>
  <section id="home">
    <div class="container">
      <div class="header__flex">
        <div class="header__flex__left">
          <div>
            <h2 class="header__title first__title">
              Раскрой свой потенциал вместе с Coozin!
            </h2>
            <p class="header__desc">
              Универсальная платформа Coozin предоставляют множество
              возможностей для самозанятых женщин. На платформе можно продавать
              товары и услуги, а также учиться новым навыкам и развивать свой
              бизнес
            </p>
            <BaseBtn btnContent="Присоединиться" />
          </div>
          <div>
            <h3>Достижения</h3>
            <NumberAnime />
          </div>
        </div>

        <div class="header__flex__right">
          <GridComp :images="images" />
        </div>
      </div>
    </div>
  </section>
</template>
<style scoped>
.header__flex {
  display: flex;
  gap: 32px;
  margin-top: 30px;
  padding-bottom: 48px;
}
.header__flex__left {
  width: 100%;
  max-width: 597px;
  padding: 80px 0 50px;
  display: flex;
  flex-direction: column;
  gap: 150px;
}
.header__title {
  margin-bottom: 12px;
}
.header__desc {
  margin-bottom: 24px;
}
.header__flex__left h3 {
  font-size: 14px;
  font-weight: 600;
  line-height: 20px; /* 142.857% */
  letter-spacing: 0.35px;
  text-transform: uppercase;
  color: var(--grey700);
  margin-bottom: 20px;
}

/*  responsive  */

@media screen and (min-width: 350px) and (max-width: 575px) {
  .header__flex {
    gap: 20px;
    flex-direction: column-reverse;
    margin-top: 14px;
    padding-bottom: 28px;
  }
  .header__flex__left {
    max-width: 100%;
    padding: 0 0 30px;
    flex-direction: column;
    gap: 30px;
  }
  .header__title {
    margin-bottom: 11px;
  }
  .header__desc {
    margin-bottom: 28.07px;
  }
  .header__flex__left button {
    width: 100%;
  }
  .header__flex__left h3 {
    font-size: 14px;
    line-height: 20px;
    margin-bottom: 20px;
    text-align: center;
  }
}

@media screen and (min-width: 576px) and (max-width: 764px) {
  .header__flex {
    gap: 20px;
    flex-direction: column-reverse;
    margin-top: 30px;
    padding-bottom: 20px;
  }
  .header__flex__left {
    max-width: 100%;
    padding: 20px 0 30px;
    flex-direction: column;
    gap: 30px;
  }
  .header__title {
    margin-bottom: 11px;
  }
  .header__desc {
    margin-bottom: 28.07px;
  }
  .header__flex__left button {
    width: 40%;
    margin: 0 auto;
    display: block;
  }
  .header__flex__left h3 {
    margin-bottom: 25px;
    text-align: center;
  }
}

@media screen and (min-width: 765px) and (max-width: 991px) {
  .header__flex {
    display: flex;
    gap: 20px;
    margin-top: 20px;
    padding-bottom: 28px;
  }
  .header__flex__left {
    width: 100%;
    max-width: 597px;
    padding: 0 0 20px;
    display: flex;
    flex-direction: column;
    gap: 20px;
  }
  .header__title {
    margin-bottom: 12px;
    font-size: 28px;
  }
  .header__desc {
    margin-bottom: 24px;
  }
  .header__flex__left h3 {
    display: none;
  }
}

@media screen and (min-width: 992px) and (max-width: 1199px) {
  .header__flex {
    display: flex;
    gap: 32px;
    margin-top: 20px;
  }
  .header__flex__left {
    max-width: 597px;
    padding: 0 0 30px;
    display: flex;
    flex-direction: column;
    gap: 80px;
  }
  .header__title {
    margin-bottom: 12px;
  }
  .header__desc {
    margin-bottom: 20px;
  }
}

@media screen and (min-width: 1200px) and (max-width: 1279px) {
}
</style>
