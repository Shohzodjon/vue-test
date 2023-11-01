<script setup>
import Logo from "../assets/icons/Logo.vue";
</script>
<template>
  <nav>
    <div class="container">
      <div class="navbar__flex">
        <a href="#"><Logo /></a>
        <ul>
          <li><a href="#">О нас</a></li>
          <li><a href="#">Edu Coozin</a></li>
          <li><a href="#">Почему Coozin?</a></li>
          <li><a href="#">Мероприятия</a></li>
        </ul>

        <div class="navbar__btn__group">
          <button>UZ</button>
          <button>Присоединиться</button>
        </div>
      </div>
    </div>
  </nav>
</template>
<style scoped>
li a {
  color: var(--orange-color);
  font-family: var(--inter-color);
}
</style>
