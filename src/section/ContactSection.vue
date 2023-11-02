<script setup>
import BaseInput from "../components/BaseInput.vue";
import BaseBtn from "../components/BaseBtn.vue";
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
                <label>Направление</label>
                <select-option
                  :placeHolder="'Select item'"
                  v-model="branch"
                  :inputOutlineColor="'rgba(134, 239, 173, 0.5)'"
                  :data="data"
                  :displayName="'name'"
                  :selected="data[0]"
                />
              </div>
              <div class="grid__item">
                <label>Город</label>
                <select-option
                  :placeHolder="'Select item'"
                  v-model="district"
                  :inputOutlineColor="'rgba(134, 239, 173, 0.5)'"
                  :data="data"
                  :displayName="'name'"
                  :selected="data[0]"
                />
              </div>
              <div class="grid__item">
                <label>Район</label>
                <select-option
                  :placeHolder="'Select item'"
                  v-model="city"
                  :inputOutlineColor="'rgba(134, 239, 173, 0.5)'"
                  :data="data"
                  :displayName="'name'"
                  :selected="data[0]"
                />
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
.contact__flex__left .contact__flex__right {
  max-width: 472px;
  width: 100%;
}

.contact__flex__right img {
  width: 100%;
}
</style>
<style>
.input-container {
  border: 1px solid #9ca3af !important;
  border-radius: 8px !important;
}
.input-container > input {
  padding: 12px !important;
  border-radius: 8px !important;
  background: #fff !important;
  color: #9ca3af !important;
  font-size: 20px !important;
  font-weight: 400 !important;
  line-height: 24px !important;
}
.clear-icon {
  display: none !important;
}
.chevron-icon {
  background: none !important;
  transform: translateY(10%);
}
.list-container {
  width: 100% !important;
  max-width: 300px;
}
.list-container li {
  color: #9ca3af !important;
  font-size: 20px !important;
  font-weight: 400 !important;
  line-height: 24px !important;
}
</style>
