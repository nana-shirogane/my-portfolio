<script setup>
  import { onMounted } from 'vue'
  import Header from './components/Header.vue';
  import Works from './components/Works.vue';
  import AboutMe from './components/AboutMe.vue';
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
        <div class="scroll_down">
          <div class="arrow"></div>
          <div class="arrow"></div>
          <div class="arrow"></div>
          <span class="text">Scroll</span>
        </div>
      </div>
      <v-container fluid class="pa-10">
        <Works />
        <AboutMe />
      </v-container>
    </v-main>
    <Footer />
  </v-app>
</template>
<style>
  @import url('https://fonts.googleapis.com/css2?family=Josefin+Sans:wght@300;400&display=swap');

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

  .scroll_down{
    position:absolute;
    bottom:50px;
    right:2%;
    animation: arrowmove 1s ease-in-out infinite;
    z-index: 10;
  }

  .text {
    display: block;
    margin-top: 70px;
    margin-left: -14px;
    font-size: 12px;
    color: #4D4D4D;
    text-transform: uppercase;
    white-space: nowrap;
    letter-spacing: 2px;
  }

  .arrow {
    position: absolute;
    width: 28px;
    height: 5px;
    opacity: 0;
    transform: scale3d(0.5, 0.5, 0.5);
    animation: move 3s ease-out infinite;
  }

  .arrow:first-child {
    animation: move 3s ease-out 1s infinite;
  }

  .arrow:nth-child(2) {
    animation: move 3s ease-out 2s infinite;
  }

  .arrow:before,
  .arrow:after {
    content: ' ';
    position: absolute;
    top: 0;
    height: 100%;
    width: 51%;
    background: #4D4D4D;
  }

  .arrow:before {
    left: 0;
    transform: skew(0deg, 30deg);
  }

  .arrow:after {
    right: 0;
    width: 50%;
    transform: skew(0deg, -30deg);
  }

  @keyframes move {
    25% { opacity: 1; }
    33% { opacity: 1; transform: translateY(30px); }
    67% { opacity: 1; transform: translateY(40px); }
    100% { opacity: 0; transform: translateY(55px) scale3d(0.5, 0.5, 0.5); }
  }
</style>
