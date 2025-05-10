<script setup>
    import { ref } from 'vue'

    const isOpen = ref(false);
    const dialogOpen = () => {
        isOpen.value = true;
    }
    const dialogClose = () => {
    isOpen.value = false;
    }

    const menuItems = [
    { label: 'TOP', href: '#top' },
    { label: 'WORKS', href: '#works' },
    { label: 'ABOUT ME', href: '#about' },
    { label: 'CONTACT', href: '#contact' }
    ]

    function navigateTo(href) {
        dialog.value = false
        window.location.href = href
    }
</script>

<template>
    <v-app-bar
        app
        flat
        class="px-6"
        style="background: linear-gradient(180deg,rgba(255, 255, 255, 1) 0%, rgba(255, 255, 255, 0) 100%);"
    >
        <v-toolbar-title class="font-weight-bold text-h6" style="color: #4D4D4D">
            Shiro.
        </v-toolbar-title>
        <v-btn
            icon="mdi-menu"
            size="x-large"
            color="#4D4D4D"
            @click="dialogOpen"
        />
    </v-app-bar>
    <v-dialog v-model="isOpen" fullscreen transition="dialog-bottom-transition">
        <v-card class="text-center pa-12" height="100%" elevation="8">
            <v-btn icon class="ml-auto" @click="dialogClose">
            <v-icon>mdi-close</v-icon>
            </v-btn>
            <v-container class="fill-height d-flex flex-column justify-center align-center">
            <v-btn
                v-for="item in menuItems"
                :key="item.label"
                variant="text"
                class="my-6 text-h5"
                @click="navigateTo(item.href)"
            >
                {{ item.label }}
            </v-btn>
            </v-container>
        </v-card>
    </v-dialog>
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
