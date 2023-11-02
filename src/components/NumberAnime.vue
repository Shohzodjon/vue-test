<script setup></script>
<template>
  <ul class="number__anime__list">
    <li>
      <span>1K</span>
      <p>женщин прошли обучение</p>
    </li>
    <li>
      <span>130K</span>
      <p>присоединились в платформу</p>
    </li>
    <li>
      <span>1K</span>
      <p>пользователей платформы</p>
    </li>
  </ul>
</template>
<style scoped>
.number__anime__list {
  display: flex;
  align-items: center;
  gap: 16px;
}
.number__anime__list li {
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 16px;
}
.number__anime__list li span {
  font-size: 36px;
  font-weight: 800;
  line-height: 40px;
  color: var(--grey800);
  font-family: var(--inter-font);
}
.number__anime__list li p {
  font-size: 16px;
  font-weight: 500;
  line-height: 16px;
  color: var(--grey700);
  font-family: var(--inter-font);
}

/*  responsive */

@media screen and (min-width: 350px) and (max-width: 575px) {
  .number__anime__list {
    flex-direction: column;
    align-items: flex-start;
    gap: 16px;
  }
  .number__anime__list li {
    flex-direction: row;
    align-items: center;
    gap: 20px;
  }
  .number__anime__list li span {
    font-size: 30px;
    line-height: 30px;
  }
  .number__anime__list li p {
    font-size: 14px;
    line-height: 16px;
  }
}

@media screen and (min-width: 576px) and (max-width: 764px) {
  .number__anime__list {
    flex-direction: row;
    gap: 16px;
    justify-content: space-between;
  }
  .number__anime__list li {
    flex-direction: column;
    gap: 16px;
  }
  .number__anime__list li span {
    font-size: 28px;
    line-height: 30px;
  }
  .number__anime__list li p {
    font-size: 14px;
    line-height: 16px;
  }
}

@media screen and (min-width: 765px) and (max-width: 991px) {
  .number__anime__list {
    flex-direction: row;
    gap: 19px;
    justify-content: space-between;
  }
  .number__anime__list li {
    flex-direction: column;
    gap: 16px;
  }
  .number__anime__list li span {
    font-size: 26px;
    line-height: 26px;
  }
  .number__anime__list li p {
    font-size: 12px;
    line-height: 13px;
  }
}

@media screen and (min-width: 992px) and (max-width: 1199px) {
  .number__anime__list {
    gap: 16px;
  }
  .number__anime__list li {
    gap: 14px;
  }
  .number__anime__list li span {
    font-size: 30px;
    line-height: 30px;
  }
  .number__anime__list li p {
    font-size: 14px;
  }
}

@media screen and (min-width: 1200px) and (max-width: 1279px) {
}
</style>
