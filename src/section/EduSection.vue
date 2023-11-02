
<script setup>
import CheckCourse from '../components/CheckCourse.vue'
</script>
<template>
    <section class="edu__section">
        <div class="container">
    <div class="edu__flex">
        <div class="edu__flex__left">
            <img src="@/assets/images/img4.png" alt="img">
        </div>
        <div class="edu__flex__right">
            <h2 class="edu__section__title">EDU COOZIN</h2>
            <p class="edu__section__desc">Онлайн-академия Coozin предоставляет обучение и помощь в развитии бизнеса. </p>
            <CheckCourse/>
        </div>
    </div>
        </div>
    </section>
</template>
<style scoped>
.edu__section{
    padding: 48px 0;
    background: #fff;
}
.edu__flex{
    display: flex;
    gap:140px ;
    align-items: center;
}
.edu__flex__left{
    max-width: 569px;
    border-radius: 16px;
    width: 100%;
    overflow: hidden;
}
.edu__flex__left img{
    width: 100%;
}
.edu__flex__right .edu__section__title{
font-size: 36px;
font-weight: 600;
line-height: 36px;
color: var(--grey800);
margin-bottom: 24px;
}
.edu__section__desc{
    font-size: 16px;
font-weight: 400;
line-height: 150%;
color: var(--grey700);
}


</style>