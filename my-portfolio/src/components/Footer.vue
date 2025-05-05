<template>
    <v-footer class="footer" app>
        © 2025 Shiro.
    </v-footer>
</template>

<style scoped>
    .footer {
        display: flex;
        position: fixed;
        box-sizing: border-box;
        width: 100%; /* ヘッダーを画面幅いっぱいに広げる */
        z-index: 1000; /* 他の要素より前面に表示 */
        
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
        padding: 24px 32px;
        gap: 20px;
        height: auto;
        background: #B1C9D8;
        color: #FFFFFF;
    }
</style>
