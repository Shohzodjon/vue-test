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
        <li><a href="#">О нас</a></li>
        <li><a href="#">Edu Coozin</a></li>
        <li><a href="#">Почему Coozin?</a></li>
        <li><a href="#">Присоединиться</a></li>
        <li><a href="#">Мероприятия</a></li>
      </ul>
      <ul class="footer__sponsor">
        <li><p>При поддержке</p></li>
        <li><img :src="cola" alt="cola logo" /></li>
        <li><img :src="esco" alt="esco logo" /></li>
      </ul>
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

/*  responsive  */

@media screen and (min-width: 350px) and (max-width: 575px) {
  footer {
    padding: 48px 0 60px;
  }
  .footer__logo {
    margin-bottom: 40px;
  }
  .footer__logo img {
    max-width: 80px;
  }
  .footer__nav {
    gap: 32px;
    align-items: center;
    justify-content: center;
  }
  .footer__nav li a {
    font-size: 16px;
    line-height: 16px;
  }
  .footer__sponsor {
    align-items: center;
    justify-content: center;
    margin: 40px 0 56.1px;
  }
  .footer__sponsor li:nth-child(1) p {
    font-size: 14px;
    line-height: 20px;
  }
  .footer__sponsor li:nth-child(2) {
    margin-right: 30.5px;
    margin-left: 20.04px;
  }

  .social__media__list {
    margin-bottom: 40px;
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
    line-height: 20px;
    letter-spacing: 1.4px;
  }
  .footer__line {
    width: 64px;
    height: 1px;
  }

  .footer__bottom p {
    text-align: center;
    font-size: 14px;
    line-height: 14px;
  }
}

@media screen and (min-width: 576px) and (max-width: 764px) {
}

@media screen and (min-width: 765px) and (max-width: 991px) {
}

@media screen and (min-width: 992px) and (max-width: 1199px) {
}

@media screen and (min-width: 1200px) and (max-width: 1279px) {
}
</style>
