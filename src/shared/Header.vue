<template>
   <header>
       <div class="container flexy">
       <router-link class="Logo" :to="{name : 'Home'}"> <h1> Icarus <span style="color:white"> Software </span></h1></router-link>
        <nav class="navigation" :class="{'toggleNav' : isActive}" >
         <ul>
             <li>
                 <a  href="#Hakkimizda" class="hvr-underline-from-center">Hakkımızda</a>
             </li>
             <li>
                 <a href="#Hizmetlerimiz" class="hvr-underline-from-center">Hizmetlerimiz</a>
             </li>
             <li>
                 <router-link :to="{name : 'iletisim'}" class="hvr-underline-from-center">İletişim</router-link>
             </li>
         </ul>
       </nav>
       <div @click="isActive = !isActive" :class="{'toggle' : isActive}"  class="menu-toggle">
           <div  class="hamburger"></div>
       </div>
       </div>
       <div></div>
   </header>
</template>

<script setup>
import {ref} from 'vue'
const isActive = ref(false)
</script>
<style scoped>

header {
    background: rgba(48, 52, 64,.35);
    width: 100%;
    position: sticky;
    top: 0;
    z-index: 999;
  
}
 .container {
     width:95%;
     max-width: 1280px;
     margin: 0 auto;
 }
 .flexy {
     display: flex;
     flex-direction: row;
     justify-content: center;
     align-items: center;
     padding: 1rem 0 1rem;
 }
 .toggle {
     display: none;
     
 }
 .Logo {
     font-size: 1.875rem/* 30px */;
    font-family: 'Mate SC', serif;
    font-weight: 600;
    letter-spacing: 0.1em;
    color: #897ffa;
    height: 1.5em;
    flex:1;

}
.navigation ul {
   display: flex;
   flex-direction: row;
   justify-content: space-between;
   align-items: center;
  
}
.navigation a {
    font-family: 'QuickSand', serif;
    font-size: 1rem;
    color: white;
    padding: 0 1em 0;

}
@media screen and (max-width: 640px) { 
    .navigation a 
    {
      font-size: 0.8em;
    }
    .Logo {
        font-size: 1.2rem;
    }
}
@media screen and (max-width: 465px) { 
    .navigation {
        position: absolute;
        top:100%;
        right: 0%;
     background: rgba(48, 52, 64,.35);
        clip-path: circle(0px at top right);
        -webkit-clip-path:circle(0px at top right);
        transition: all ease-in-out 800ms; 
          
    }
     .toggleNav {
          clip-path: circle(150% at top right);
         -webkit-clip-path:circle(150% at top right);
     
        
    }
    .navigation ul
    {
        flex-direction: column;
    }
    .navigation li {
        border-bottom: 1px solid #575766 ;
        width: 100%;
        text-align: center;
    }
    .navigation li:hover,
    .navigation li:focus {
        background: rgba(38, 41, 53, 0.85);
    }
    .navigation li:last-child{
    border-bottom: none;
    }
    .navigation a 
    {
        
        display: block;
         
        padding: 2em 3em;
    
    }
    .menu-toggle {
        display: block;
        position: absolute;
        padding: 1em;
        right : 0;
        background: none;
        cursor: pointer;
        
       
    }
    .hamburger,
    .hamburger::before,
    .hamburger::after {
        content: '';
        display: block;
        background: #897ffa;
        height: 4px;
        width: 1.7em;
        border-radius: 4px;
         transition: all ease-in-out 400ms;
    }
    .hamburger::before{
        transform: translateY(-8px);
    }
    .hamburger::after{
        transform: translateY(4px);
    }
    .toggle .hamburger {
       transform: rotate(45deg);
    }
    .toggle .hamburger::before {
        opacity: 0;
    }
    .toggle .hamburger::after{
        transform: translateY(-4px) rotate(-90deg);
    }
}
.hvr-underline-from-center {
  display: inline-block;
  vertical-align: middle;
  -webkit-transform: perspective(1px) translateZ(0);
  transform: perspective(1px) translateZ(0);
  box-shadow: 0 0 1px rgba(0, 0, 0, 0);
  position: relative;
  overflow: hidden;
}
.hvr-underline-from-center:before {
  content: "";
  position: absolute;
  z-index: -1;
  left: 51%;
  right: 51%;
  bottom: 0;
  background: #897ffa;
  height: 4px;
  -webkit-transition-property: left, right;
  transition-property: left, right;
  -webkit-transition-duration: 0.3s;
  transition-duration: 0.3s;
  -webkit-transition-timing-function: ease-out;
  transition-timing-function: ease-out;
}
.hvr-underline-from-center:hover:before, .hvr-underline-from-center:focus:before, .hvr-underline-from-center:active:before {
  left: 0;
  right: 0;
}

</style>

  