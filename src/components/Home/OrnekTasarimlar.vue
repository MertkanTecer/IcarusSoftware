<template >
    <section>
        
       <h1 class="baslik" >
       Her Konsept'den Özel Websiteler </h1>
        <div class=" borderalt"></div>
       <h1 class="aciklama">
        İstediğiniz Herhangi Konsept'den Bir Siteyi veya Uygulamayı Kısa Bir Sürede Hallediyoruz.
      </h1>
      <div class="borderalt"></div>
      <div class="hizmetler">
              <div class="hizmetaciklama1"  >
              <div class="hizmetaciklama" :class="{'clip' : Rest}" >
               <p class="aciklamabaslik">Restoran</p> 
               <p style=" margin-top:1rem">Restoranınız için tamamen isteğinize göre şekillendirilmiş sipariş sitesi.</p>
               <p style="  margin-top:1rem">Kodlama bilgisi gerektirmeyen İçerik girişi.</p> 
               <p style=" margin-top:1rem"> Üyelik / ödeme sistemi. </p>
               <p style="margin-top:1rem"> Restoranınız için bir çok şeyi görebileceğiniz admin paneli.</p>    
               </div>
               <div><img @click="Restoran = !Restoran" class="restoran" :class="{'toggle' : Rest}" src="../../assets/img/restaurant.svg" /> </div> 
              
              </div>
          
                <div class="hizmetaciklama1" >
                    <div class="hizmetaciklama" :class="{'clip' : etic}" >
                        <p class="aciklamabaslik">E-Ticaret</p>
             <p style=" margin-top:1rem">Şirketiniz için tamamen isteğinize göre şekillendirilmiş E-Ticaret sitesi.</p> 
             <p style=" margin-top:1rem">Kodlama bilgisi gerektirmeyen İçerik girişi.</p>
             <p style=" margin-top:1rem"> Üyelik / ödeme sistemi. </p> 
             <p style=" margin-top:1rem">Ücretsiz Revizyon Hakkı</p>
                    </div>
                <div>  
                    <img @click="eTicaret = !eTicaret" class="eticaret" :class="{'toggle' : etic}"  src="../../assets/img/online-shopping.svg" />
                    </div>
                </div>
             
            <div class="hizmetaciklama1" >
                <div class="hizmetaciklama" :class="{'clip' : Kurum}">
                      <p class="aciklamabaslik">Kurumsal</p>
                <p style="margin-top:1rem">Firmanız için tamamen isteğinize göre şekillendirilmiş sipariş sitesi.</p> 
                <p style="margin-top:1rem">Responsive Tasarımlar ile bütün cihazlardan tam performans. </p> 
                <p style="margin-top:1rem"> Üyelik / ödeme sistemi. </p> 
                <p style="margin-top:1rem"> Firmanızdaki çalışanları veya toptancıysanız ilgili firmaların kontrolünü sağlayabileceğiniz admin paneli.</p>
                </div>
             <div> <img @click="Kurumsal = !Kurumsal" class="kurumsal" :class="{'toggle' : Kurum}" src="../../assets/img/enterprise.svg" />  </div>
            </div>
             
        </div>
       
    </section>
</template>
<script setup>
import {ref , computed} from 'vue'
const Restoran = ref(false)
const eTicaret = ref(false)
const Kurumsal = ref(false)
const Rest = computed(() => {
    return Restoran.value
})
const etic = computed(() => {
    return eTicaret.value
})
const Kurum = computed(() => {
    return Kurumsal.value
})
setInterval(() => {
    Restoran.value = !Restoran.value
    eTicaret.value = !eTicaret.value
    Kurumsal.value = !Kurumsal.value
}, 6500);
</script>
<style scoped>
.borderalt {
    width:100%;
    border-bottom: 1px solid black;
    margin-top:1rem;
}
.hizmetaciklama {
    font-size:1em;
    font-weight: 400;
    text-align: center;
    border-radius: 1.5rem;
    width: 100%;
    height: 0px;
    overflow: hidden;
    color: #897ffa;
    clip-path: circle(0px at bottom);
    -webkit-clip-path:circle(0px at bottom);
    background: #1a2121bf;
    transition: all ease 700ms;
}
.hizmetaciklama1 {
    display: flex;
    flex-direction: column;
    margin: 0 0.5rem;
    align-items: center;
    width: 100%;
    justify-content: space-between;
}
.toggle {
    transform: rotate(720deg);
}
 .clip {
    padding: 4em;
    height: 100%; 
  clip-path: circle(150% at bottom);
  -webkit-clip-path:circle(150% at bottom);
}
.aciklamabaslik {
    font-size:2rem;
    font-weight: 600;
    display: block;
    text-align: center;
}
    .container {
     width:95%;
     max-width: 1280px;
     margin: 0 auto;
      }
      .hizmetler {
          display: flex;
          
          margin-top:3rem ;
         flex-direction: row;
          align-items: stretch;
          justify-content: center;
          
      }
 .baslik {
   margin-top: 1em;
   font-family: "Raleway", sans-serif;
      font-size: 1.5em;
       color: #897ffa;
       text-align: center;
       width: 100%;
       font-weight: bolder;
 }
 .hizmetler img {
     border:3px solid #897ffa;
     padding: 1em;
     border-style:ridge;
     border-radius:9999px;
      margin:1rem 1rem;
      width: 8rem;
      transition: all ease-in-out 1000ms;
 }

 .aciklama {
    padding: 1em;
      font-family: "Raleway", sans-serif;
      font-size: 1em;
       color: #897ffa;
       text-align: center;
       width: 100%;
       font-weight: bolder;
 }
  @media screen and (max-width:60rem) {
       .baslik {
         font-size: 2em;
     }
     .hizmetler {
         flex-direction: column;
         align-items: stretch;
     }
     .hizmetler div {
        
         margin: 0.5em 0;
         
     }
     .hizmetaciklama {
         width: 90%;
     }
     .aciklama {
         font-size: 1.5em;
     }
 }
  @media screen and (min-width:80rem) {
     .baslik {
         font-size: 3em;
     }
     .aciklama {

     font-size: 2.5em;
     }
     .hizmetaciklama {
          box-shadow: rgb(4, 4, 9) 0px 13px 27px 5px, rgb(33, 19, 19) 0px 8px 16px 8px;
     }
 }
</style>