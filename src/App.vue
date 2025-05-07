<script setup>
  import Header from './components/Header.vue'
  import Works from './components/Works.vue'
  import AboutMe from './components/AboutMe.vue';
  import Contact from './components/Contact.vue';
  import Footer from './components/Footer.vue';
</script>

<template>
  <v-app>
    <Header />
    <v-main>
      <img src="/src/assets/wave.svg" alt="First View" class="first-view" />
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
  body {
    margin: 0;
    padding: 0;
    background: #FFFFFF;
  }

  .auto-layout {
    display: flex;
    flex-direction: column;
  }

  .first-view {
    position: relative;
    top: 120px;
    width: 100%;
  }

  .section-wrapper {
    max-width: 960px;
    margin: 0 auto;
    padding: 0 16px; /* モバイルでも余白あり */
  }
</style>
