
<script setup>
import CheckIcon from '../assets/icons/CheckIcon.vue'

const contents=[
    {
        title:'Курсы и мастер-классы',
        desc:'На платформе доступны онлайн-курсы и мастер-классы по различным темам, связанным с бизнесом, такими как управление продажами, маркетинг, финансы и другие.'
    },
     {
        title:'Опытные специалисты',
        desc:'Курсы ведут опытные специалисты, которые делятся своими знаниями и опытом.'
    }
    ,
     {
        title:'Обучись и начни свое дело',
        desc:'Пользователи которые успешно прошли курсы имеют возможность присоединиться к торговой площадке Coozin.'
    }
]
</script>
<template>
    <ul class="check__course">
          <li v-for="(content, index) in contents" :key="index">
           <div>
              <span><CheckIcon/></span>
              <h6>{{content.title}}</h6>
           </div>
              <p>{{content.desc}}</p>
          </li>
        </ul>    
</template>
<style scoped>
.check__course{
    display: flex;
    flex-direction: column;
    gap: 15px;
    margin-top: 56px;
}
.check__course li div{
    display: flex;
    align-items: center;
    gap:8px;
}
.check__course li div h6{
    font-size: 20px;
color: var(--grey700);
font-weight: 600;
line-height: 20px;
margin-top: -10px;
}

.check__course li p{
    font-size: 16px;
font-weight: 400;
line-height: 150%;
color: var(--grey700);
}

</style>