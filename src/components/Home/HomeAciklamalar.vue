<template>
   <section id="Hakkimizda">
    <div class="container" >
       <h1 class="baslik" >
      Neden Bizi Tercih Etmelisiniz</h1>
          <div class=" borderalt"></div>
       <h1 class="aciklama">
        Sizlere En İyi Hizmeti Verebilmek İçin En Yeni Teknolojileri
        Kullanıyoruz
      </h1>
       <div class="sablonlar" data-aos="fade-up" data-aos-duration="2000">
           <div class="card">
                <img class="cardicon" src="../../assets/img/testing.svg" />
                <div class="cardaciklama">
                <h1>Kalıpları Reddediyoruz</h1>
                <p>
                Hizmetlerimizi herhangi bir şablon kullanmadan tamamen sizin
                isteğinize göre yazıyoruz. Bu sayede sitenizi tam olarak
                kafanızdaki gibi sunuyoruz.
                </p>
                </div>
           </div>
            <div class="card">
                  <img class="cardicon" src="../../assets/img/software.svg" />
                <div class="cardaciklama">
                <h1>Arama Motoru Optimizasyonu </h1>
                <p>
                 Web Tasarım projelerinizi Google, Bing, Yandex, gibi tarayıcılarda
              üst sıralara taşıyabilecek özel kodlamalarla, tamamen SEO
              altyapısına uygun şekilde geliştiriyoruz.
                </p>
                </div>
           </div>
            <div class="card">
                 <img class="cardicon" src="../../assets/img/seo.svg" />
                <div class="cardaciklama">
                <h1>Performans Optimizasyonları</h1>
                <p>
               Sitenizin olabildiğince hızlı ve güvenilir çalışması için, hem
              backend hem de frontend kısımlarında yapılabilecek tüm performans
              optimizasyonlarını yapıyoruz.
                </p>
                </div>
           </div>
            <div class="card">
              <img class="cardicon" src="../../assets/img/conversation.svg" />
                <div class="cardaciklama">
                <h1>7/24 İletişim</h1>
                <p>
                Kafanıza takılan bir soru olduğunda veya herhangi bir zaman
              sitenizin gidişatını merak ettiğinizde, bizlere ulaşmanız yeterli!
              Siteyi sizler ile beraber yapıyoruz.
                </p>
                </div>
           </div>
       </div>
    </div>
    </section>
</template>
<script setup>

</script>
<style scoped>
.borderalt {
    width:100%;
    border-bottom: 1px solid black;
    margin-top:1rem;
}
    .container {
     width:95%;
     max-width: 1280px;
     margin: 0 auto;
 }
 .cardaciklama {
  font-size: 1.2rem;
  padding-top: 1.5rem;
  color: #897ffa;
  text-align: center;
  height: 100%;
  font-family: "Raleway", sans-serif;
}
.cardaciklama h1 {
    padding : 0 2rem;
    padding-bottom:1rem;
    font-size: 1.5rem;
    font-weight: 800;
}
 .container p {
    color: #897ffa;
    padding: 1rem;
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
 .aciklama {
    padding: 1em;
      font-family: "Raleway", sans-serif;
      font-size: 1em;
       color: #897ffa;
       text-align: center;
       width: 100%;
       font-weight: bolder;
 }
 .sablonlar {

     display: flex;
     flex-direction: column;
     align-items: center;
     justify-content: center;
     width: 100%;
 }
 .card {
     margin: 2rem 0;
      background: #1a2121bf;
     display: flex;
     border: 1px solid #1a2121bf;
     border-radius: 2rem;
     flex-direction: column;
     justify-content: center;
     align-items: center;
     box-shadow: rgb(4, 4, 9) 0px 13px 27px 5px, rgb(33, 19, 19) 0px 8px 16px 8px;

 }
 .cardicon {
     width: 8rem;
     height: 8rem;
     margin-top:1rem;
 }
 @media screen and (max-width:20rem) {
     .sablonlar {
         display: flex;
         flex-direction: column;
         align-items: center;
         justify-content: center;
     }
     .card {
         margin: 0 2rem;
         width: 100%;
     }
 }
 @media screen and (min-width:40rem) {
     .sablonlar {
         display: flex;
         flex-direction: row;
         align-items: stretch;
         flex-wrap: wrap;
         justify-content: center;
     }
     .card {
         margin: 2rem 2rem;
         width: 39%;
        
     }
       .baslik {
         font-size: 2em;
     }
     .aciklama {
         font-size: 1.5em;
     }
 }
  @media screen and (min-width:80rem) {
     .sablonlar {
         display: flex;
         flex-direction: row;
         align-items: stretch;
         flex-wrap: nowrap;
         justify-content: center;
     }
     .card {
         margin: 2rem 2rem;
         width: 100%;
        
     }
     .baslik {
         font-size: 3em;
     }
     .aciklama {
         font-size: 2.5em;
     }
 }
</style>