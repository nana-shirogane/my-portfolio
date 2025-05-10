<script setup>
    import { ref, nextTick } from 'vue'

    const topScroll = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    }
</script>

<template>
    <v-app-bar
        app
        flat
        class="px-6"
        style="background: linear-gradient(180deg,rgba(255, 255, 255, 1) 20%, rgba(255, 255, 255, 0) 100%);"
    >
        <v-toolbar-title class="font-weight-bold text-h3" style="color: #4D4D4D">
            Shiro.
        </v-toolbar-title>
        <template v-slot:append>
            <v-btn style="color: #4D4D4D" @click="topScroll">TOP</v-btn>
            <v-btn
                style="color: #4D4D4D"
                href="#"
                v-scroll-to="{el: '#works', offset: -100}"
            >
                WORKS
            </v-btn>
            <v-btn
                style="color: #4D4D4D"
                href="#"
                v-scroll-to="{el: '#about', offset: -100}"
            >
                ABOUT ME
            </v-btn>
        </template>
    </v-app-bar>
</template>

<style scoped>
    header {
        display: flex;
        position: fixed;
        box-sizing: border-box;
        width: 100%; /* ヘッダーを画面幅いっぱいに広げる */
        
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
        padding: 24px 32px;
        gap: 20px;
        height: auto;
    }
</style>
