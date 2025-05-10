<template>
    <div id="works" class="section-wrapper works">
        <h3>WORKS.</h3>
        <div class="line" />
        <v-container class="ma-5">
            <v-row>
                <v-col cols="12" md="6" v-for="work in works_design" :key="work.title">
                    <v-card
                        variant="outlined"
                        class="w-100"
                    >
                        <div class="ma-2 d-flex flex-row align-center justify-center fill-height">
                            <v-card-title color="blue">{{ work.title }}</v-card-title>
                        </div>
                        <v-sheet
                            class="ml-10 mr-10 pa-10 rounded-lg"
                            style="cursor: pointer;"
                            elevation="3"
                            @click="dialogOpen(work)"
                        >
                            <v-img
                                :src="work.img"
                                aspect-ratio="1"
                            />
                        </v-sheet>
                        <div class="ma-2 d-flex flex-row align-center justify-center fill-height">
                            <v-chip
                                v-for="category in work.category" :key="category"
                                class="ma-1" 
                                variant="outlined"
                                :color="getCategoryColor(category)"
                                label
                            >
                                {{ getCategoryLabel(category) }}
                            </v-chip>
                        </div>

                    </v-card>
                </v-col>
            </v-row>
        </v-container>
        <v-dialog
            v-model="isOpen"
            max-width="700"
            transition="fade-transition"
        >
            <v-card v-if="selectWorks">
                <v-card-title class="text-h5">
                    <div class="d-flex flex-row align-center justify-center fill-height">
                        {{ selectWorks.title }}
                        <v-chip
                            v-for="category in selectWorks.category" :key="category"
                            class="ma-2" 
                            variant="outlined"
                            :color="getCategoryColor(category)"
                            label
                        >
                            {{ getCategoryLabel(category) }}
                        </v-chip>
                    </div>
                </v-card-title>
                <div class="pa-5 d-flex flex-row align-center justify-center fill-height">
                    <v-img
                        :src="selectWorks.img"
                        max-width="500"
                    />
                </div>
                <v-card-text>
                    <div v-html="selectWorks.detail.text" />
                    <v-divider class="my-4" />
                    <div v-if="selectWorks.detail.size" class="mt-3">サイズ：{{ selectWorks.detail.size }}</div>
                    <div>使用ツール：{{ selectWorks.detail.tool }}</div>
                </v-card-text>
                <v-card-actions>
                    <v-spacer />
                    <v-btn class="details" @click="dialogClose">閉じる</v-btn>
                </v-card-actions>
            </v-card>
        </v-dialog>
    </div>
</template>
<script setup>
    import { ref } from 'vue'
    import portfolioImg from '@/assets/works_image/portfolio_image.png';
    import okinawaTripImg from '@/assets/works_image/okinawa_trip_image.png';
    import fitnessImg from '@/assets/works_image/fitness_image.png';
    import hamburgerFairImg from '@/assets/works_image/hamburger_fair_image.png';
    import jobChangeImg from '@/assets/works_image/job_change_image.png';
    import streamingOverlayImg from '@/assets/works_image/streaming_overlay_image.png';

    const isOpen = ref(false);
    const selectWorks = ref(null);
    // ダイアログを開く
    const dialogOpen = (work) => {
        isOpen.value = true;
        selectWorks.value = work;
    };

    // ダイアログを開く
    const dialogClose = () => {
        isOpen.value = false;
        selectWorks.value = null;
    };

    const works_design = [
        {
            title: 'ポートフォリオサイト',
            img: portfolioImg,
            category: ['originalWork', 'webSite'],
            detail: {
                text: 'このサイトです。<br>デザイン～コーディングまで対応しました。<br>デザイン自体はFigmaで作成し、レスポンシブ対応ができるような作りにしています。<br>コーディングではVue.jsとVuetifyを使用しています。<br>大好きな海をモチーフに、シンプルで見やすくわかりやすいデザインになるように心がけました。',
                size: '',
                tool: 'Figma / Vue.js / Vuetify / VSCode / Github',
                optionImg: []
            }
        },
        {
            title: '沖縄旅行バナー',
            img: okinawaTripImg,
            category: ['originalWork', 'banner'],
            detail: {
                text: '若者向けの格安旅行のバナーを作成しました。<br>画像は絶景をイメージして選択しています。<br>また、青い空が映えるように余計な装飾は入れずに文字色は白で統一しています。',
                size: '1080 x 1080',
                tool: 'Illustrator / Photoshop',
                optionImg: []
            }
        },
        {
            title: '転職サイトバナー',
            img: jobChangeImg,
            category: ['originalWork', 'banner'],
            detail: {
                text: '転職サイトのバナーを作成しました。<br>未経験からのエンジニアへの転職を希望されている方向けのバナーなので、「未経験」をいう部分を強調しています。<br>また、資料請求の訴求ボタンをグラデーションにして目立たせるようにデザイン、作成してみました。',
                size: '1080 x 1080',
                tool: 'Illustrator / Photoshop',
                optionImg: []
            }
        },
        {
            title: '飲食店のフェアバナー',
            img: hamburgerFairImg,
            category: ['originalWork', 'banner'],
            detail: {
                text: '秋のバーガーフェアのバナーを作成しました。<br>秋イメージなので赤やオレンジなどの暖色系を用いて、温かみのある色合いにしています。',
                size: '1080 x 1350',
                tool: 'Illustrator / Photoshop',
                optionImg: []
            }
        },
        {
            title: 'フィットネスジムバナー',
            img: fitnessImg,
            category: ['originalWork', 'banner'],
            detail: {
                text: '女性専用フィットネスジムの新規オープンに伴うバナーを作成しました。<br>女性専用なのでかわいらしいイメージになるように背景にピンクのフィルターをかけています。',
                size: '1200 x 628',
                tool: 'Illustrator',
                optionImg: []
            }
        },
        {
            title: '配信用オーバーレイ',
            img: streamingOverlayImg,
            category: ['originalWork', 'other'],
            detail: {
                text: '主にVtuber向けの配信用オーバーレイを作成しました。<br>同じデザインを用いてのゲーム配信用オーバーレイと待機中画面の作成も進めたいと考えています。<br>また、After Effectを使用して、簡単なアニメーション付きのものも作成したいと考えています。',
                size: '1920 x 1080',
                tool: 'Illustrator',
                optionImg: []
            }
        }
    ];

    const getCategoryLabel = (category) => {
        switch (category) {
            case 'originalWork':
                return '#自主制作';
            case 'clientWork':
                return '#クライアントワーク';
            case 'banner':
                return '#バナー';
            case 'webSite':
                return '#WEBサイト';
            case 'other':
                return '#その他';
            default:
                return '#未設定';
        }
    };

    const getCategoryColor = (category) => {
        switch (category) {
            case 'originalWork':
                return '#0097A7';
            case 'clientWork':
                return '#0097A7';
            case 'banner':
                return '#01579B';
            case 'webSite':
                return '#01579B';
            case 'other':
                return '#01579B';
            default:
                return 'grey';
        }
    };
</script>
<style scoped>
    .works {
        margin-top: 105px;
        display: flex;
        flex-direction: column;
        align-items: center;
        padding: 0px 20px;
        color: #4D4D4D;
    }
    h3 {
        margin: 0;
        font-family: 'D-DIN-PRO';
        font-style: normal;
        font-weight: 400;
        font-size: 60px;
        line-height: 60px;
        display: flex;
        align-items: center;
        color: #4D4D4D;
        flex: none;
        order: 0;
        flex-grow: 0;
    }

    .line {
        display: flex;
        width: 1400px;
        border: 1.5px solid #4D4D4D;
        margin: 10px 0; 
    }

    .details {
        border-radius: 3px;
        position: relative;
        display: flex;
        justify-content: space-around;
        align-items: center;
        margin: 0 auto;
        max-width: 220px;
        padding: 10px 25px;
        color: #FFF;
        transition: 0.3s ease-in-out;
        font-weight: 600;
        background: rgb(149,202,252);
        background: linear-gradient(270deg, rgba(149,202,252,1) 0%, rgba(107,182,255,1) 100%);
    }
    .details:hover {
        background: rgb(117,188,255);
        background: linear-gradient(270deg, rgba(117,188,255,1) 0%, rgba(62,159,252,1) 100%);
    }
</style>