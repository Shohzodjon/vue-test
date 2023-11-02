<script setup>
import BaseInput from "../components/BaseInput.vue";
import BaseBtn from "../components/BaseBtn.vue";
import SelectComp from "../components/SelectComp.vue";
import { ref } from "vue";

const email = ref("");
const password = ref("");
const branch = ref({});
const city = ref({});
const district = ref({});

const names = [
  { id: 1, text: "SSSSSS" },
  { id: 2, text: "AAAAAA" },
  { id: 3, text: "BBBBBB" },
  { id: 4, text: "MMMMMMM" },
];
const data = [
  { id: 1, name: "Ram" },
  { id: 2, name: "Shyam" },
  { id: 3, name: "Hari" },
  { id: 4, name: "Krishna" },
  { id: 5, name: "Balram" },
  { id: 6, name: "Arjun" },
];
</script>
<template>
  <section class="contact__section">
    <div class="container">
      <div class="contact__flex">
        <div class="contact__flex__left">
          <h2 class="header__title">
            Готовы присоединиться и развиваться вместе с нами?
          </h2>
          <p>Заполните форму, и мы свяжемся с вами!</p>
          <form>
            <div class="contact__grid">
              <div class="grid__item">
                <BaseInput
                  id="name"
                  type="text"
                  labelText="Имя"
                  v-model="email"
                />
              </div>
              <div class="grid__item">
                <BaseInput
                  id="surname"
                  type="text"
                  labelText="Фамилия"
                  v-model="password"
                />
              </div>
              <div class="grid__item">
                <BaseInput
                  id="phonenumber"
                  type="text"
                  labelText="Номер телефона"
                  v-model="password"
                />
              </div>
              <div class="grid__item">
                <SelectComp
                  :data="data"
                  selectType="branch"
                  label="Направление"
                />
              </div>
              <div class="grid__item">
                <SelectComp :data="data" selectType="city" label="Город" />
              </div>
              <div class="grid__item">
                <SelectComp :data="data" selectType="district" label="Район" />
              </div>
            </div>
            <div class="contact__btn"><BaseBtn btnContent="Отправить" /></div>
          </form>
        </div>
        <div class="contact__flex__right">
          <div class="contact__img">
            <img src="@/assets/images/contact.png" alt="contact img" />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
<style scoped>
.contact__section {
  padding: 65px 0 31px;
}
.contact__flex {
  display: flex;
  align-items: center;
  gap: 41px;
}
.contact__flex__left {
  flex: 1;
}
.contact__flex__left h2 {
  margin-bottom: 32px;
}
.contact__flex__left p {
  font-size: 20px;
  font-weight: 500;
  line-height: 32px;
  color: var(--grey700);
  margin-bottom: 24px;
}

.contact__grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  column-gap: 28px;
  row-gap: 28.11px;
  margin-bottom: 48px;
}
.grid__item label {
  font-size: 20px;
  font-weight: 500;
  color: var(--grey700);
  margin-bottom: 8px;
  display: inline-block;
}
.contact__btn {
  text-align: center;
}
.contact__btn button {
  width: 343px;
  padding: 13px;
}
.contact__flex__right {
  max-width: 472px;
  width: 100%;
}

.contact__flex__right img {
  width: 100%;
}

/*  responsive  */

@media screen and (min-width: 350px) and (max-width: 575px) {
  .contact__section {
    padding: 32px 0 31px;
  }
  .contact__flex {
    display: flex;
    align-items: center;
    gap: 41px;
  }
  .contact__flex__left {
    flex: 1;
  }
  .contact__flex__left h2 {
    margin-bottom: 6px;
  }
  .contact__flex__left p {
    margin-bottom: 11px;
  }

  .contact__grid {
    grid-template-columns: repeat(1, 1fr);
    column-gap: 16px;
    margin-bottom: 28px;
  }
  .grid__item label {
    font-size: 16px;
  }

  .contact__btn button {
    width: 100%;
  }
  .contact__flex__right {
    display: none;
  }
}

@media screen and (min-width: 576px) and (max-width: 764px) {
  .contact__section {
    padding: 32px 0 31px;
  }
  .contact__flex {
    display: flex;
    align-items: center;
    gap: 41px;
  }
  .contact__flex__left {
    flex: 1;
  }
  .contact__flex__left h2 {
    margin-bottom: 6px;
  }
  .contact__flex__left p {
    margin-bottom: 11px;
  }

  .contact__grid {
    grid-template-columns: repeat(2, 1fr);
    column-gap: 16px;
    margin-bottom: 28px;
  }
  .grid__item label {
    font-size: 16px;
  }

  .contact__btn button {
    width: 100%;
  }
  .contact__flex__right {
    display: none;
  }
}

@media screen and (min-width: 765px) and (max-width: 991px) {
  .contact__section {
    padding: 45px 0 31px;
  }
  .contact__flex {
    display: flex;
    align-items: center;
    gap: 30px;
  }
  .contact__flex__left {
    /* flex: 1; */
    width: 50%;
  }
  .contact__flex__left h2 {
    margin-bottom: 32px;
  }
  .contact__flex__left p {
    font-size: 20px;
    font-weight: 500;
    line-height: 32px;
    color: var(--grey700);
    margin-bottom: 24px;
  }

  .contact__grid {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    column-gap: 10px;
    row-gap: 16px;
    margin-bottom: 28px;
  }
  .grid__item label {
    font-size: 20px;
    margin-bottom: 8px;
  }
  .contact__btn {
    text-align: center;
  }
  .contact__btn button {
    width: 343px;
    padding: 13px;
  }
  .contact__flex__right {
    max-width: 472px;
    display: none;
  }
  .contact__flex__right img {
    width: 100%;
  }
}

@media screen and (min-width: 992px) and (max-width: 1199px) {
  .contact__section {
    padding: 20px 0 31px;
  }
  .contact__flex {
    align-items: flex-start;
    gap: 30px;
  }
  .contact__grid {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    column-gap: 10px;
    row-gap: 16px;
    margin-bottom: 28px;
  }
  .contact__flex__right {
    max-width: 472px;
    max-height: 400px;
  }
  .contact__flex__right img {
    width: 100%;
    height: 550px;
  }
}

@media screen and (min-width: 1200px) and (max-width: 1279px) {
}
</style>
