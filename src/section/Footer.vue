<script setup>
import footerLogo from "@/assets/images/footer-logo.svg";
import cola from "@/assets/images/cola.svg";
import esco from "@/assets/images/esco.svg";
import InstIcon from "@/assets/icons/InstIcon.vue";
import FacebookIcon from "@/assets/icons/FacebookIcon.vue";
import YoutubeIcon from "@/assets/icons/YoutubeIcon.vue";
</script>
<template>
  <footer>
    <div class="container">
      <div class="footer__logo">
        <a href="#"><img :src="footerLogo" alt="footer logo" /></a>
      </div>
      <ul class="footer__nav">
        <li><a href="#about">О нас</a></li>
        <li><a href="#education">Edu Coozin</a></li>
        <li><a href="#home">Почему Coozin?</a></li>
        <li><a href="#">Присоединиться</a></li>
        <li><a href="#event">Мероприятия</a></li>
      </ul>
      <ul class="footer__sponsor">
        <li><p>При поддержке</p></li>
        <li><img :src="cola" alt="cola logo" /></li>
        <li><img :src="esco" alt="esco logo" /></li>
      </ul>
      <div class="footer__reponsive">
        <ul class="social__media__list">
          <li>
            <p>ПОДПИСЫВАЙТЕСЬ НА НАС</p>
            <span class="footer__line"></span>
          </li>
          <li>
            <a href="#"><InstIcon /></a>
          </li>
          <li>
            <a href="#"><FacebookIcon /></a>
          </li>
          <li>
            <a href="#"><YoutubeIcon /></a>
          </li>
        </ul>
        <a href="#" class="response__logo"
          ><img :src="footerLogo" alt="footer logo"
        /></a>
      </div>
      <div class="footer__bottom">
        <p>© 2023 Coozin. All Rights Reserved</p>
      </div>
    </div>
  </footer>
</template>
<style scoped>
footer {
  padding: 80px 0 60px;
  background: #fff;
}
.footer__logo {
  text-align: center;
  margin-bottom: 40px;
}
.footer__logo img {
  max-width: 80px;
}
.footer__nav {
  display: flex;
  gap: 32px;
  align-items: center;
  justify-content: center;
}
.footer__nav li a {
  font-size: 16px;
  font-weight: 400;
  line-height: 16px;
  color: var(--grey800);
}
.footer__sponsor {
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 40px 0 56.1px;
}
.footer__sponsor li:nth-child(1) p {
  font-size: 14px;
  font-weight: 400;
  line-height: 20px;
  letter-spacing: 1.4px;
  color: var(--grey700);
}
.footer__sponsor li:nth-child(2) {
  margin-right: 30.5px;
  margin-left: 20.04px;
}

.social__media__list {
  margin-bottom: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 24px;
}
.social__media__list li:nth-child(1) {
  display: flex;
  align-items: center;
  gap: 16px;
}
.social__media__list li p {
  font-size: 14px;
  font-weight: 500;
  line-height: 20px;
  letter-spacing: 1.4px;
  color: var(--grey800);
}
.footer__line {
  width: 64px;
  height: 1px;
  display: inline-block;
  background: var(--grey800);
}

.footer__bottom p {
  text-align: center;
  font-size: 14px;
  font-weight: 400;
  line-height: 14px;
  color: var(--grey800);
}
.response__logo img {
  display: none;
}

/*  responsive  */

@media screen and (min-width: 350px) and (max-width: 575px) {
  footer {
    padding: 38px 0 40px;
  }
  .footer__logo {
    margin-bottom: 40px;
    display: none;
  }
  .footer__logo img {
    max-width: 80px;
  }
  .footer__nav {
    gap: 8px;
    align-items: flex-start;
    justify-content: flex-start;
    flex-direction: column;
    margin-bottom: 24px;
  }
  .footer__nav li {
    border-bottom: 1px solid #e5e7eb;
    width: 100%;
  }
  .footer__nav li a {
    font-size: 14px;
    line-height: 20px;
    padding: 12px 0;
    display: block;
  }
  .footer__sponsor {
    display: none;
  }

  .footer__reponsive {
    display: flex;
    align-items: flex-end;
    justify-content: space-between;
  }
  .response__logo img {
    width: 61px;
    display: block;
  }
  .social__media__list {
    align-items: flex-end;
    justify-content: center;
    gap: 24px;
    margin-bottom: 0;
  }
  .social__media__list li:nth-child(1) {
    display: none;
  }
  .social__media__list li a svg {
    width: 24px;
    height: 24px;
  }
  .footer__bottom p {
    font-size: 14px;
    margin-top: 34px;
  }
}

@media screen and (min-width: 576px) and (max-width: 764px) {
  footer {
    padding: 38px 0 40px;
  }
  .footer__logo {
    margin-bottom: 40px;
    display: none;
  }
  .footer__logo img {
    max-width: 80px;
  }
  .footer__nav {
    gap: 8px;
    align-items: flex-start;
    justify-content: flex-start;
    flex-direction: column;
    margin-bottom: 24px;
  }
  .footer__nav li {
    border-bottom: 1px solid #e5e7eb;
    width: 100%;
  }
  .footer__nav li a {
    font-size: 14px;
    line-height: 20px;
    padding: 12px 0;
    display: block;
  }
  .footer__sponsor {
    display: none;
  }

  .footer__reponsive {
    display: flex;
    align-items: flex-end;
    justify-content: space-between;
  }
  .response__logo img {
    width: 61px;
    display: block;
  }
  .social__media__list {
    align-items: flex-end;
    justify-content: center;
    gap: 24px;
    margin-bottom: 0;
  }
  .social__media__list li:nth-child(1) {
    display: none;
  }
  .social__media__list li a svg {
    width: 24px;
    height: 24px;
  }
  .footer__bottom p {
    font-size: 14px;
    margin-top: 34px;
  }
}

@media screen and (min-width: 765px) and (max-width: 991px) {
}

@media screen and (min-width: 992px) and (max-width: 1199px) {
}

@media screen and (min-width: 1200px) and (max-width: 1279px) {
}
</style>
