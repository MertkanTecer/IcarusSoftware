<template>
    <section>
      <div class="CTA">
        <p>Sitemizi gördün ve beğendin mi ? o zaman aşşağıdaki butona basıp hemen bize teklif ver. </p>
        <router-link :to="{name : 'iletisim'}" class="hvr-sweep-to-right">Teklif Ver..</router-link>
        </div>
    </section>
</template>
<script>
export default {
    
}
</script>
<style scoped>
  .container {
    width: 95%;
    margin: 0 auto;
    max-width: 1280px;
  }
    .CTA {
        width: 100%;
        background: rgba(18, 14, 14, 0.502);
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        padding: 3rem;
         font-family: 'Caveat' , cursive;
    }
    .CTA p {
        font-size: 3rem;
        color:white;
        }
        .CTA a {
            color: #897ffa;
            border: 2px solid #897ffa;
            font-size: 1.5rem;
            margin-top:1rem ;
            padding: 1rem 2rem;
        }

.hvr-sweep-to-right {
  display: inline-block;
  vertical-align: middle;
  -webkit-transform: perspective(1px) translateZ(0);
  transform: perspective(1px) translateZ(0);
  box-shadow: 0 0 1px rgba(0, 0, 0, 0);
  position: relative;
  -webkit-transition-property: color;
  transition-property: color;
  -webkit-transition-duration: 0.3s;
  transition-duration: 0.3s;
}
.hvr-sweep-to-right:before {
  content: "";
  position: absolute;
  z-index: -1;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: #897ffa;
  -webkit-transform: scaleX(0);
  transform: scaleX(0);
  -webkit-transform-origin: 0 50%;
  transform-origin: 0 50%;
  -webkit-transition-property: transform;
  transition-property: transform;
  -webkit-transition-duration: 0.3s;
  transition-duration: 0.3s;
  -webkit-transition-timing-function: ease-out;
  transition-timing-function: ease-out;
}
.hvr-sweep-to-right:hover, .hvr-sweep-to-right:focus, .hvr-sweep-to-right:active {
  color: white;
}
.hvr-sweep-to-right:hover:before, .hvr-sweep-to-right:focus:before, .hvr-sweep-to-right:active:before {
  -webkit-transform: scaleX(1);
  transform: scaleX(1);
}

        @media screen and (max-width:50rem) {
            .CTA p {
        font-size: 1.5rem;
        color:white;
        }
        .CTA a {
            color: #897ffa;
            border: 2px solid #897ffa;
            font-size: 1rem;
            padding: 1rem 1rem;
        }
            
        }
</style>