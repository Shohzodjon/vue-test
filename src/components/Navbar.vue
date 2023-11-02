<script setup>
import Logo from "../assets/icons/Logo.vue";
import BaseBtn from "./BaseBtn.vue";
import DropDown from "./DropDown.vue";
import MenuIcon from "../assets/icons/MenuIcon.vue";
</script>
<template>
  <nav>
    <div class="container">
      <div class="navbar__flex">
        <div class="menu__icon"><MenuIcon /></div>
        <a href="#" class="navbar__logo"><Logo /></a>
        <ul>
          <li><a href="#">О нас</a></li>
          <li><a href="#">Edu Coozin</a></li>
          <li><a href="#">Почему Coozin?</a></li>
          <li><a href="#">Мероприятия</a></li>
        </ul>

        <div class="navbar__btn__group">
          <DropDown />
          <BaseBtn btnContent="Присоединиться" />
        </div>
      </div>
    </div>
  </nav>
</template>
<style scoped>
nav {
  padding: 24px 0;
}
.navbar__flex {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.menu__icon {
  display: none;
}
.navbar__logo {
  cursor: pointer;
}
.navbar__flex ul {
  display: flex;
  align-items: center;
  gap: 36px;
}
.navbar__flex ul li a {
  color: var(--grey700);
  font-family: var(--inter-font);
  font-size: 16px;
  font-weight: 500;
  line-height: 16px;
}
.navbar__btn__group {
  display: flex;
  align-items: center;
  gap: 16px;
}

/*  responsive  */

/* 360 576 765 992 1200 1400 */
@media screen and (min-width: 350px) and (max-width: 575px) {
  nav {
    padding: 12px 0;
  }
  .menu__icon {
    display: block;
  }
  .navbar__logo svg {
    width: 150px;
    height: 36px;
  }
  .navbar__flex ul {
    display: none;
  }
  .navbar__btn__group button {
    display: none;
  }
}

@media screen and (min-width: 576px) and (max-width: 764px) {
  nav {
    padding: 14px 0;
  }
  .menu__icon {
    display: block;
  }
  .navbar__logo svg {
    width: 170px;
    height: 40px;
  }
  .navbar__flex ul {
    display: none;
  }
  .navbar__btn__group button {
    display: block;
  }
}

@media screen and (min-width: 765px) and (max-width: 991px) {
  nav {
    padding: 18px 0;
  }

  .navbar__logo svg {
    width: 100px;
    height: 26px;
  }
  .navbar__flex ul {
    gap: 20px;
  }
  .navbar__flex ul li a {
    font-size: 16px;
    line-height: 16px;
  }
  .navbar__btn__group {
    gap: 16px;
  }
}

@media screen and (min-width: 992px) and (max-width: 1199px) {
  nav {
    padding: 20px 0;
  }

  .navbar__logo svg {
    width: 130px;
    height: 30px;
  }
  .navbar__flex ul {
    gap: 24px;
  }
  .navbar__flex ul li a {
    font-size: 15px;
    line-height: 16px;
  }
  .navbar__btn__group {
    gap: 14px;
  }
}

@media screen and (min-width: 1200px) and (max-width: 1279px) {
}
</style>
