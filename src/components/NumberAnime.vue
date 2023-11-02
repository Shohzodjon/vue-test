
<script setup>

</script>
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
.number__anime__list{
    display: flex;
    align-items: center;
    gap: 16px;
}
.number__anime__list li{
    flex: 1;
    display: flex;
    flex-direction: column;
    gap: 16px;
}
.number__anime__list li span{
font-size: 36px;
font-weight: 800;
line-height: 40px;
color: var(--grey800);
font-family: var(--inter-font);
}
.number__anime__list li p{
font-size: 16px;
font-weight: 500;
line-height: 16px;
color: var(--grey700);
font-family: var(--inter-font);
}


</style>