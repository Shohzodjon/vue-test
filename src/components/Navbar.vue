<script setup>
import Logo from "../assets/icons/Logo.vue";
import BaseBtn from './BaseBtn.vue'
</script>
<template>
  <nav>
    <div class="container">
      <div class="navbar__flex">
        <a href="#"  class="navbar__logo"><Logo /></a>
        <ul>
          <li><a href="#">О нас</a></li>
          <li><a href="#">Edu Coozin</a></li>
          <li><a href="#">Почему Coozin?</a></li>
          <li><a href="#">Мероприятия</a></li>
        </ul>

        <div class="navbar__btn__group">
          <button>UZ</button>
       <BaseBtn  btnContent="Присоединиться"/>
        </div>
      </div>
    </div>
  </nav>
</template>
<style scoped>
nav{
  padding:24px 0;
}
.navbar__flex{
  display:flex;
  justify-content:space-between;
  align-items: center;
}
.navbar__logo{
  cursor: pointer;
}
.navbar__flex ul{
 display: flex;
 align-items: center;
 gap: 36px;
}
.navbar__flex ul li a{
  color: var(--grey700);
  font-family:var(--inter-font);
font-size: 16px;
font-weight: 500;
line-height: 16px;
}
.navbar__btn__group{
  display: flex;
  align-items: center;
  gap: 16px;
}

</style>
