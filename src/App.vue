<template>
<body>
  <Header></Header>
  <router-view ></router-view>
    <Footer />
  
</body>
</template>
<script setup>
import Header from "./shared/Header.vue";
import Footer from './shared/Footer.vue';
</script>

<style >
*,*::before,*::after {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  scroll-behavior: smooth;
  -webkit-tap-highlight-color: transparent;
}
 body {
   background: #101315;
   display: flex;
   flex-direction: column;
   align-self: center;
   min-height: 100vh;
  
}

</style>
