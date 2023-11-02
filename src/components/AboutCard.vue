<script setup>
import rocet from "../assets/images/rocet.png";
import chart from "../assets/images/chart.png";
import treasure from "../assets/images/treasure.png";
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
  <div class="about__card">
    <div v-for="item in items" :key="item.id" class="card__item">
      <div class="card__img">
        <img :src="item.img" alt="img" />
      </div>
      <div class="card__info">
        <h6>{{ item.title }}</h6>
        <p>{{ item.desc }}</p>
      </div>
    </div>
  </div>
</template>

<style scoped>
.about__card {
  display: flex;
  align-items: center;
  gap: 32px;
}
.card__item {
  padding: 6px 32px 32px 32px;
  border-radius: 8px;
  transition: all linear 0.6s;
  background: #fff;
}
.card__item:hover {
  box-shadow: rgba(0, 0, 0, 0.19) 0px 10px 20px, rgba(0, 0, 0, 0.23) 0px 6px 6px;
}
.about__card div {
  flex: 1;
}
.card__img {
  text-align: center;
  margin-bottom: 10px;
}
.card__img img {
  max-height: 120px;
}
.card__info h6 {
  text-align: center;
  margin-bottom: 12px;
  font-size: 18px;
  font-weight: 700;
  line-height: 18px;
  color: var(--grey800);
}
.card__info p {
  font-size: 16px;
  font-weight: 400;
  line-height: 150%;
  color: var(--grey600);
  text-align: center;
}

/*  responsive  */

@media screen and (min-width: 350px) and (max-width: 575px) {
  .about__card {
    align-items: center;
    flex-direction: column;
    gap: 25px;
  }

  .about__card div {
    flex: 1;
  }
  .card__item {
    padding: 6px 22px 22px 22px;
    background: #fff;
  }
  .card__img img {
    max-height: 120px;
  }
}

@media screen and (min-width: 576px) and (max-width: 764px) {
  .about__card {
    align-items: center;
    flex-direction: row;
    flex-wrap: wrap;
    gap: 25px;
  }
  .card__item {
    padding: 6px 22px 22px 22px;
    width: 45%;
  }
  .about__card div {
    flex: 1;
  }

  .card__img img {
    max-height: 120px;
  }
}

@media screen and (min-width: 765px) and (max-width: 991px) {
}

@media screen and (min-width: 992px) and (max-width: 1199px) {
}

@media screen and (min-width: 1200px) and (max-width: 1279px) {
}
</style>
