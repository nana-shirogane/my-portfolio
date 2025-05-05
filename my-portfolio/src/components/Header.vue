<script setup>
    import { ref } from 'vue'

    // ハンバーガーメニューの開閉状態を管理
    const isMenuOpen = ref(false)

    // メニューをトグルする関数
    const toggleMenu = () => {
        isMenuOpen.value = !isMenuOpen.value
    }
</script>

<template>
    <header>
        <div class="logo">
            <a href="#">Shiro.</a>
        </div>
        <div id="hamburger" class="hamburger" @click="toggleMenu">
            <span></span>
            <span></span>
            <span></span>
        </div>
        <nav :class="{ open: isMenuOpen }">
            <ul class="menu">
            <li><a href="#">WORKS.</a></li>
            <li><a href="#">ABOUT ME.</a></li>
            <li><a href="#">CONTACT.</a></li>
            </ul>
        </nav>
    </header>
</template>

<style scoped>
    header {
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
    }

    /* ロゴのスタイル */
    .logo a {
        margin: 0 auto;
        width: 141px;
        height: 60px;

        font-family: 'D-DIN-PRO';
        font-style: normal;
        font-weight: 400;
        font-size: 60px;
        line-height: 60px;

        color: #FFFFFF;
        text-decoration: none;
    }

    /* ハンバーガーメニューのスタイル */
    .hamburger {
        cursor: pointer;
        display: flex;
        flex-direction: column;
        gap: 5px;
    }

    .hamburger span {
        display: block;
        width: 25px;
        height: 3px;
        background-color: #FFFFFF;
        transition: all 0.3s ease;
    }

    /* メニューの初期状態を非表示に */
    nav {
        display: none;
        transition: all 0.3s ease;
    }

    /* メニューが開いたときのスタイル */
    nav.open {
        display: block;
    }

    .menu {
        list-style: none;
        padding: 0;
        margin: 0;
    }

    .menu li {
        margin: 10px 0;
    }
</style>
