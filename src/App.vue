<script setup>
  import { onMounted } from 'vue'
  import Header from './components/Header.vue';
  import Works from './components/Works.vue';
  import AboutMe from './components/AboutMe.vue';
  import Contact from './components/Contact.vue';
  import Footer from './components/Footer.vue';

  onMounted(() => {
    const canvas = document.querySelector('.background-bubbly')
    if (canvas) {
      bubbly({
        canvas: canvas,
        colorStart: '#00ACC1',
        colorStop: '#0277BD',
        bubbleFunc: () =>
          `hsla(${Math.random() * 50}, 100%, 70%, .3)`
      })
    }
  })
</script>

<template>
  <v-app>
    <Header />
    <v-main class="bg-transparent" style="padding-top: 0;">
      <div class="first-view">
        <canvas class="background-bubbly"></canvas>
        <div class="first-view-text d-flex align-center justify-center fill-height">
          <div class="text-h1 font-weight-bold" >Thank you for<br>visiting my portfolio.</div>
        </div>
      </div>
      <v-container fluid class="pa-10">
        <Works />
        <AboutMe />
        <Contact />
      </v-container>
    </v-main>
    <Footer />
  </v-app>
</template>
<style>
  html,
  body {
    margin: 0;
    padding: 0;
    overflow-x: hidden;
    background-color: transparent;
  }

  .background-bubbly {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 0; /* 背面に回す */
    pointer-events: none; /* マウス操作を貫通させる */
    /* mix-blend-mode: normal; */
  }

  .first-view {
    position: relative;
    width: 100%;
    height: 100vh;
    overflow: hidden;
  }
  .first-view::after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    pointer-events: none;
    background: linear-gradient(to bottom, rgba(255, 255, 255, 0) 40%, #ffffff 100%);
    z-index: 1;
  }

  .first-view-text{
    position: relative;
    z-index: 1;
    color: #FFFFFF;
    text-shadow: 0px 0px 5px #0091EA;
    font-family: 'D-DIN-PRO';
  }

  .section-wrapper {
    max-width: 960px;
    margin: 0 auto;
    padding: 0 16px; /* モバイルでも余白あり */
  }
</style>
