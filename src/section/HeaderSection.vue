<script setup>
import BaseBtn from '../components/BaseBtn.vue'
import NumberAnime from '../components/NumberAnime.vue'
import GridComp from '../components/GridComp.vue';




</script>
<template>
   <section>
<div class="container">
    <div class="header__flex">
<div class="header__flex__left">
    <div>
    <h2 class="header__title">Раскрой свой потенциал вместе с Coozin!</h2>
    <p class="header__desc">Универсальная платформа Coozin предоставляют множество возможностей для самозанятых женщин. На платформе можно продавать товары и услуги, а также учиться новым навыкам и развивать свой бизнес</p>
    <BaseBtn btnContent="Присоединиться"/>
    </div>
    <div>
      <h3>Достижения</h3> 
      <NumberAnime/> 
    </div>
</div>

<div class="header__flex__right">
    <GridComp />
</div>

    </div>
</div>
    </section>    
</template>
<style scoped>
.header__flex{
    display: flex;
    gap: 32px;
}
.header__flex__left{
    width: 100%;
    max-width: 597px;
    padding: 80px 0 50px;
    display: flex;
    flex-direction: column;
    gap: 150px;
}
.header__title{
    margin-bottom: 11px;
}
.header__desc{
    font-size: 16px;
font-weight: 400;
line-height: 150%; 
letter-spacing: -0.32px;
color: var(--grey600);
margin-bottom: 28.07px;
}
.header__flex__left h3{
    font-size: 14px;
font-weight: 600;
line-height: 20px; /* 142.857% */
letter-spacing: 0.35px;
text-transform: uppercase;
color: var(--grey700);
margin-bottom: 20px;
}

</style>