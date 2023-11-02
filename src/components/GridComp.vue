 <template>
    <div class="grid__box">
       <div v-for="(img , index) in images" :key=index class="grid__item">
        <img :src=img alt="img"/>
       </div>
    </div>
</template>

<script setup>
// import img from '../assets/images/'
import img1 from '@/assets/images/img1.png';
import img2 from '@/assets/images/img6.png';
import img3 from '@/assets/images/img3.png';
import img4 from '@/assets/images/img5.png';

const images=[img1, img2, img3, img4];

</script>

<style  scoped>
.grid__box{
   display: grid;
grid-template-columns: repeat(12, 1fr);
gap: 20px;
}
.grid__item{
   border-radius: 16px;
   overflow: hidden;
   }
.grid__item:nth-child(1), .grid__item:nth-child(4){
   grid-column-start: span 8;
}
.grid__item:nth-child(2), .grid__item:nth-child(3){
   grid-column-start: span 4;
}
.grid__item img{
   width: 100%;
   transition: all linear .4s;
   height: 100%;
}
.grid__item:hover img{
   transform: scale(1.1);
}
</style>
