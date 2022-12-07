<template>
    <section id="Hizmetlerimiz" class="Hizmetlerimiz">
        <div class="container">
             <h1 class="baslik" >HİZMETLERİMİZ </h1>
      <div class=" borderalt"></div>
      <div class="card-container">
          <div class="card" data-aos="fade-left" data-aos-duration="1200">
            <h1>Web Yazılım</h1>
            <div class="aciklama">
             <p>En gelişmiş teknolojileri kullanarak sizlere her şekilde
            kullanabileceğiniz siteler üretiyoruz.</p><p>Bunu sizler için çok değerli
            olan <span style="color: #897ffa">zaman</span> kavramını unutmadan,
            olabildiğince hızlı şekilde yapıyoruz.</p>     
            <p class="aciklama">Yazılım için kullandığımız teknolojiler:</p>
          <ul>
            <li>Vue.js</li>
            <li>Nuxt.js</li>
            <li>JavaScript</li>
            <li>Express.js</li>
            <li>Node.js</li>
            <li>Axios</li>
            <li>MySQL</li>
            <li>MongoDB</li>
            <li>Firebase</li>
          </ul>
            </div>  
          </div>
          <div class="card" data-aos="fade-right" data-aos-duration="1200">
             <h1>Web Tasarım</h1>
            <div class="aciklama">
            <p>Söz verdiğimiz gibi şablon kullanmadan, bütün tasarımlarınızı el ile
            sizler için kodluyoruz.</p> <p> Sizler için her seferinde tekrar
            oluşturduğumuz renk paletlerimiz ile siteniz çok daha özel ve hedefe
            yönelik oluyor.</p> <p> Yaptığımız sitelerin mobil, tablet, dizüstü,
            masaüstü görüntüleri <span style="color: #897ffa">Responsive</span> şekilde tek tek ayarlanıyor.</p>   
            <p class="aciklama">Tasarım için kullandığımız teknolojiler:</p>
          <ul>
            <li>HTML</li>
            <li>Vanilla CSS</li>
            <li>Tailwind.css</li>
            <li>Bootstrap</li>
          </ul>
            </div> 
          </div>
      </div>
      </div>
    </section>
</template>
<script>
export default {
    
}
</script>
<style scoped>
.borderalt {
    width:100%;
    border-bottom: 1px solid black;
    margin-top:1rem;
}
    .container {
        width: 95%;
        margin: 0 auto;
        max-width: 1280px;
    }
     .baslik {
   font-family: "Raleway", sans-serif;
      font-size: 2rem;
      font-weight: bolder;
       color: #897ffa;
       margin: 1em 0;
       text-align: center;
       width: 100%;
     }
    /* --------Card--------- */
    .card-container {
        display: flex;
        overflow: hidden;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        max-width: 720px;
        padding: 1em;
        margin:0 auto;
        width: 100%;
    }
    .card {
     width: 100%;
     margin: 2rem 0;
     display: flex;
     flex-direction: column;
     justify-content: center;
     align-items: center;
     background: #1a2121bf;
     border: 1px solid #1a2121bf;
     border-radius: 2rem;
     box-shadow: rgb(4, 4, 9) 0px 13px 27px 5px, rgb(33, 19, 19) 0px 8px 16px 8px;
    }
    .card h1 {
        color: #897ffa;
        text-align: center;
        border-bottom: 1px solid black;
        width: 100%;
        font-size: 2em;
        padding: 0.6em;
    }
    .aciklama {
        font-size: 0.8rem;
        text-align: center;
        color:white;
        padding: 1em;
    }
    .aciklama ul li {
        color: #897ffa;
        text-align: center;
    }
    @media screen and (min-width:60rem) {
        .aciklama {
            font-size: 1em;
        }
        .baslik {
            font-size: 3rem;
        }
    }
</style>