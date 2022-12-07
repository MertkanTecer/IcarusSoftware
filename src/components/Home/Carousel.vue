<template>
        <section class="Carousel">
          <div class="Carousel-item " v-for="(image,index) in Images" :key="index" :class="[sayi == index ? 'Active' : '-']">
            <img class="carouselimg" :src="require('../../assets/img/' + image.url)" alt="">
            <div class="imgyazi">
                 <div class="orta yazi2">
       <div class="cizgi">
       <p style="color: #897ffa">{{image.baslik}} </p>
       <span style="width:100%;">{{image.yazi}}</span>
       </div>
       <span class="yazi3">Hem <span style="color: #897ffa">Şık</span>  Hem <span style="color: #897ffa">Hızlı</span></span>
       </div>
        </div>
        </div>
         <button class="sol">
                <font-awesome-icon  @click="imgIndex == 0 ? (imgIndex = 2) : imgIndex--"  class="fase" :icon="['fas', 'chevron-left']" />
            </button>
             <button class="sag">
                <font-awesome-icon  @click="imgIndex == 2 ? (imgIndex = 0) : imgIndex++" class="fase" :icon="['fas', 'chevron-right']" />
             </button>   
        </section>
</template>
<script setup>
import {ref , computed} from 'vue'
var imgIndex = ref(0)
const Images = ref([{url:"restaurant.jpg" , baslik : "SİZE ÖZEL " , yazi : "RESPONSIVE TASARIMLAR" },
                  {url:"carousel1.png" , baslik : "PROFESYONEL  " , yazi : "HİZMET UYGUN FİYATLAR" },
                    {url:"carousel2.jpg" , baslik : "7/24 KESİNTİSİZ " , yazi : "İLETİŞİM İMKANI" }]);
   
const sayi = computed(()=> {
    return imgIndex.value
})
</script>
<style scoped>

.Carousel .sol:hover,
.Carousel .sol:focus,
.Carousel .sag:hover,
.Carousel .sag:focus,
.Carousel .sol:active,
.Carousel .sag:active{
   background: rgba(48, 52, 64,.25);
   transition: all ease 300ms; 
   outline: none;
   box-shadow: none;
}
.Carousel-item {
    position: absolute;
    width: 100%;
    height: 100%;
    z-index: 0; 
    opacity: 0;
    transform: translateX(100%);
    transition: all ease-in-out 400ms;
}
.Active {
    z-index: 4;
    opacity: 1;
    transform: translateX(0);
}
.Carousel {
    position: relative;
    width: 100%;
    height: 45vw;
    overflow: hidden;
}

.carouselimg {
  height: 100%;
  width: 100% !important; 
  filter: grayscale(70%);
  opacity: 0.65 !important;
  display: block;
}
.cizgi {
    border-bottom: 1px solid white;
    width: 100%;
}
 .fase {
       font-size: 8vw;
   }
   .sol {
       background: none;
       position: absolute;
       left: 0;
       top:20%;
       bottom:0;
       color: #897ffa;
       display: flex;
       justify-content: center;
       align-items: center;
       width:20%;
       height: 60%;
       z-index: 333;
       cursor: pointer;
   }
    .sag {
        background: none;
       position: absolute;
       right: 0;
       top:20%;
       bottom:0;
       color: #897ffa;
       display: flex;
       justify-content: center;
       align-items: center;
       width:20%;
       height: 60%;
       z-index: 333;
       cursor: pointer;
   }
   .yazi2 {
        font-family: 'QuickSand', serif;
    }
     .yazi3 {
       font-family: 'Caveat' , cursive;
   }
.orta {
  position: absolute;
  color: white;
  top: 50%;
  left: 50%;
  width: 60%;
  transform: translate(-50%, -50%);
  font-size:6vw !important;
  letter-spacing: 0.2rem;
  text-align: center;
  font-family: "Quicksand", sans-serif;
  -webkit-user-select: none; /* Safari */        
-moz-user-select: none; /* Firefox */
-ms-user-select: none; /* IE10+/Edge */
user-select: none; /* Standard */
}
img {
    max-width: 100%;
    height: auto;
}

</style>