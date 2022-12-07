<template>
    <footer class="">
        <div class="Logo">
         <router-link :to="{name : 'Home'}" ><h1> Icarus <span style="color:white"> Software </span></h1></router-link>
        </div>
        <div class="listeler">
        <ul>
          <li>
            <router-link :to="{name : 'Home'}">Anasayfa</router-link>
          </li>
          <li>
            <router-link href="#iletisim" :to="{name : 'iletisim'}">İletişim</router-link>
          </li>
          <li>
            <a href="#Hakkimizda">Hakkımızda</a>
          </li>
          <li>
            <a href="#Hizmetlerimiz">Hizmetlerimiz</a>
          </li>
        </ul>
        <ul> 
          <li>İletişim Bilgileri</li>
          <li>Telefon : 0546 964 93 44</li>
          <li>E-Mail : icarussoftwareinfo@gmail.com </li>
        </ul>
       
        <ul class="social">
            <li> <h2>Sosyal Medya</h2></li>
          <li> <a href="https://twitter.com/SoftwareIcarus">
              <svg height="32" width="32" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 291.319 291.319" style="enable-background:new 0 0 291.319 291.319;" xml:space="preserve">
<g>
	<path style="fill:#26A6D1;" d="M145.659,0c80.45,0,145.66,65.219,145.66,145.66c0,80.45-65.21,145.659-145.66,145.659
		S0,226.109,0,145.66C0,65.219,65.21,0,145.659,0z"/>
	<path style="fill:#FFFFFF;" d="M236.724,98.129c-6.363,2.749-13.21,4.597-20.392,5.435c7.338-4.27,12.964-11.016,15.613-19.072
		c-6.864,3.96-14.457,6.828-22.55,8.366c-6.473-6.691-15.695-10.87-25.909-10.87c-19.591,0-35.486,15.413-35.486,34.439
		c0,2.704,0.31,5.335,0.919,7.857c-29.496-1.438-55.66-15.158-73.157-35.996c-3.059,5.089-4.807,10.997-4.807,17.315
		c0,11.944,6.263,22.504,15.786,28.668c-5.826-0.182-11.289-1.721-16.086-4.315v0.437c0,16.696,12.235,30.616,28.476,33.784
		c-2.977,0.783-6.109,1.211-9.35,1.211c-2.285,0-4.506-0.209-6.673-0.619c4.515,13.692,17.625,23.651,33.165,23.925
		c-12.153,9.249-27.457,14.748-44.089,14.748c-2.868,0-5.69-0.164-8.476-0.482c15.722,9.777,34.367,15.485,54.422,15.485
		c65.292,0,100.997-52.51,100.997-98.029l-0.1-4.461C225.945,111.111,231.963,105.048,236.724,98.129z"/>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
            </svg></a>
                </li>
            <li>
                <a href="https://www.instagram.com/icarussoftware">
                     <svg enable-background="new 0 0 24 24" height="32" viewBox="0 0 24 24" width="32" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><linearGradient id="SVGID_1_" gradientTransform="matrix(0 -1.982 -1.844 0 -132.522 -51.077)" gradientUnits="userSpaceOnUse" x1="-37.106" x2="-26.555" y1="-72.705" y2="-84.047"><stop offset="0" stop-color="#fd5"/><stop offset=".5" stop-color="#ff543e"/><stop offset="1" stop-color="#c837ab"/></linearGradient><path d="m1.5 1.633c-1.886 1.959-1.5 4.04-1.5 10.362 0 5.25-.916 10.513 3.878 11.752 1.497.385 14.761.385 16.256-.002 1.996-.515 3.62-2.134 3.842-4.957.031-.394.031-13.185-.001-13.587-.236-3.007-2.087-4.74-4.526-5.091-.559-.081-.671-.105-3.539-.11-10.173.005-12.403-.448-14.41 1.633z" fill="url(#SVGID_1_)"/><path d="m11.998 3.139c-3.631 0-7.079-.323-8.396 3.057-.544 1.396-.465 3.209-.465 5.805 0 2.278-.073 4.419.465 5.804 1.314 3.382 4.79 3.058 8.394 3.058 3.477 0 7.062.362 8.395-3.058.545-1.41.465-3.196.465-5.804 0-3.462.191-5.697-1.488-7.375-1.7-1.7-3.999-1.487-7.374-1.487zm-.794 1.597c7.574-.012 8.538-.854 8.006 10.843-.189 4.137-3.339 3.683-7.211 3.683-7.06 0-7.263-.202-7.263-7.265 0-7.145.56-7.257 6.468-7.263zm5.524 1.471c-.587 0-1.063.476-1.063 1.063s.476 1.063 1.063 1.063 1.063-.476 1.063-1.063-.476-1.063-1.063-1.063zm-4.73 1.243c-2.513 0-4.55 2.038-4.55 4.551s2.037 4.55 4.55 4.55 4.549-2.037 4.549-4.55-2.036-4.551-4.549-4.551zm0 1.597c3.905 0 3.91 5.908 0 5.908-3.904 0-3.91-5.908 0-5.908z" fill="#fff"/></svg>
                </a>
            </li>
            </ul>
      </div>
    </footer>
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
    .Logo {
     font-size: 1.875rem/* 30px */;
    font-family: 'Mate SC', serif;
    font-weight: 600;
    letter-spacing: 0.1em;
    color: #897ffa;
}
a {
    text-decoration: none;
}
.listeler {
 display: flex;
 flex-direction: row;
 justify-content: center;
 align-items: center;
}
.social li {
    margin: 0.2rem 0;
}
.listeler ul {
    margin: 0 2rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}
footer {
  flex: 1;
    background: black;
    color:white;
    padding: 1rem;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
    width: 100%;
}
@media screen and (max-width:834px) {
    footer {
        justify-content: center;
        flex-direction: column;
    }
    .listeler {
        flex-direction: column;
        align-items:center;
        justify-content: center;
    }
    .listeler ul {
        margin:0.8rem 0;
    }
}
@media screen and (max-width:950px) {
    footer {
        font-size: 0.7rem;
    }
}
</style>