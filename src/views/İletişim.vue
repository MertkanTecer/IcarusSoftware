<template >
    <main class="container">
        <section class="form" id="iletisim">
            <h1 class="formbaslik">Teklif Almak İçin Bilgilerinizi Giriniz.</h1>
            <form action="#" class="form-group" method="post">
                <div class="form-item">
                    <div class="flexy">
                     <label class="sr-onlye" for="Ad"> Ad </label>
                    <input class="inputs" type="text" id="Ad" v-model="state.Ad" placeholder="Adınızı Giriniz.">
                              <small class="form-text text-muted">Ad<br></small>
            <small v-if="!v$.Ad.minLength.$response">İsim en az {{ v$.Ad.minLength.$params.min }} karakterden oluşmalıdır.<br></small>
            <small v-if="!v$.Ad.alpha.$response">Adınız harflerden oluşmalıdır.<br></small>
            <small v-if="!v$.Ad.maxLength.$response">Adınız en fazla {{ v$.Ad.maxLength.$params.max }} karakterden oluşmalıdır.</small>
                     </div>
                     <div class="flexy">
                     <label class="sr-onlye" for="Soyad"> Soyad </label>
             <input class="inputs" type="text" id="Soyad" v-model="state.Soyad" placeholder="Soyadınızı Giriniz.">
            <small>Soyad<br></small> 
            <small v-if="!v$.Soyad.alpha.$response">Soyadınız harflerden oluşmalıdır.<br></small>
            <small v-if="!v$.Soyad.minLength.$response">Soyadınız en az {{ v$.Soyad.minLength.$params.min}} karakterden oluşmalıdır.<br> </small>
            <small v-if="!v$.Soyad.maxLength.$response">Soyadınız en fazla
              {{ v$.Soyad.maxLength.$params.max }}karakterden oluşmalıdır.</small>
                     </div>
                 </div>
                 <div class="form-item">
                     <div class="flexy">
                         <Telephone  template="(XXX)XXX-XXXX"/>
                      <small>Telefon Numarası<br></small>
                     </div>
                  
                    <div class="flexy">
                         <label class="sr-onlye" for="Email"> Email </label>
                    <input class="inputs" id="Email" type="email" v-model="state.email" placeholder="Emailinizi Giriniz.">
                     <small>E-mail<br></small>
                     <small v-if="!v$.email.email.$response">Lütfen geçerli bir E-mail adresi giriniz.</small></div>
                 </div>
                 <div style="margin-top:0.50rem;" class="form-item">
                    <label class="sr-onlye" for="Aciklama"> Aciklama </label>
                    <textarea name="Aciklama" v-model="state.desc" type="text" class="inputs" placeholder="Lütfen İsteğinizi Kısaca Anlatın." id="Aciklama" cols="10" rows="5"></textarea>
                 </div>
                 <div class="form-item">
                     <button class="CTA hvr-sweep-to-right" @click.prevent="Register">Teklif Ver</button>
                 </div>
            </form>
        </section>
    </main>
</template>
<script setup>
import useVuelidate from '@vuelidate/core'
import { required,alpha, numeric ,email,minLength,maxLength } from '@vuelidate/validators'
import {reactive,computed} from 'vue'
import axios from 'axios'
import Telephone from '../components/CTA/Telephone.vue'
 const state = reactive({
      Ad: "",
      Soyad: "",
      email: "",
      desc : ""
    })
 const rules = computed(() => {
     return {
    email: {required,email},
    phone: {required,numeric}, 
    Ad: {alpha,required,minLength: minLength(2),maxLength: maxLength(15)},
    Soyad: {alpha,required,minLength:minLength(2),maxLength:maxLength(15)}
    }   
   })
    const v$ = useVuelidate(rules,state)
   const Register = () =>
    {
      axios.post('http://localhost:3000/posts',{ad:state.Ad,soyad:state.Soyad,email:state.email,desc:state.desc}).then((response) => {
          console.log(response)
      })
    }
</script>
<style scoped>
.container {
    width: 95%;
    max-width: 1280px;
    margin: 0 auto;
}
.flexy {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    margin: 0.50rem 0;
}
.inputs {
    padding: 0.5rem 1rem;
    width: 100%;
     border-left:12px solid #897ffa; ;
      background: #1a2121bf;
    border-radius: 0 1rem 0 1rem;
}
.CTA {
     color: #897ffa;
            border: 2px solid #897ffa;
            font-size: 1.5rem;
            margin: 1rem 0;
            padding: 1rem 2rem;
          width: 100%;
}
.sr-onlye {
    position: absolute;
    width: 1px;
    height: 1px;
    padding: 0;
    margin: -1px;
    overflow: hidden;
    clip: rect(0, 0, 0, 0);
    white-space: nowrap;
    border-width: 0;
}
.form {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 4rem 0;
}
.form-item {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
   
}
.form-group {
    width: 100%;
    padding: 0 2rem;
    max-width: 760px;
    color: #897ffa;
    font-family: 'Caveat' , bold;
    font-weight: 900;
    font-size:1.3rem;
}
.formbaslik {
    font-weight: 900;
    color:#897ffa;
       font-family: 'Caveat' , cursive;
    font-size: 1.6rem;
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
@media screen and (min-width: 768px) {
    .form-item {
        flex-direction: row;
        justify-content: center;
        align-items: center;

    }
    .CTA {
        width: 50%;
    }
    
    .form-group {
        padding: 0;
        margin: 0 -0.50rem;
    }
    .flexy {
        margin:1rem 0.5rem;
    }
}
@media  screen and (min-width:600px) {

    .formbaslik {
        font-size: 2.5rem;
    }
}

@media  screen and (max-width:350px) {

    .formbaslik {
        font-size:1.3rem;
    }
}
</style>