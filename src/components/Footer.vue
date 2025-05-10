<template>
    <v-footer class="footer">
        <div class="d-flex align-center">
            <div>© 2025 Shiro.</div>
            <v-btn color="#FFFFFF" variant="text" href="/licenses.html" style="text-transform: none">Licenses</v-btn>
        </div>
        
    </v-footer>
</template>

<style scoped>
    .footer {
        display: flex;
        position: absolute;
        bottom: 0;
        box-sizing: border-box;
        width: 100%;
        
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
        padding: 24px 32px;
        gap: 20px;
        height: auto;
        background: linear-gradient(180deg,rgba(255, 255, 255, 1) 0%, rgba(50, 155, 173, 1) 100%);
        color: #FFFFFF;
    }
</style>
