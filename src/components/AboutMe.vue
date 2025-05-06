<template>
    <v-container class="about-me">
        <h3>ABOUT ME.</h3>
        <div class="line" />
        <v-container>
            <v-row class="justify-center align-center">
                <v-col cols="12" md="3" class="text-center">
                    <v-img :src="profile" aspect-ratio="1" class="rounded-circle" />
                </v-col>
                <v-col cols="12" md="6">
                    <h2>Shiro.</h2>
                    <p>
                        1994年生まれ、大阪府出身。<br>
                        大学卒業後はテーマパークで販売職として従事。<br>
                        その後転職して現在はエンジニアとして働く傍ら、<br>
                        デザインの勉強を進めています。
                    </p>
                </v-col>
            </v-row>
        </v-container>
        <v-container>
            <v-timeline side="end">
                <v-timeline-item
                    v-for="(item, i) in careerHistory" :key="i"
                    :dot-color="i % 2 === 0 ? 'blue' : 'green'"
                >
                    <div class="text-h6">{{ item.date }}<br>{{ item.title }}</div>
                    <p v-html="item.content" />
                </v-timeline-item>
            </v-timeline>
        </v-container>
        <v-container>
            <v-row class="justify-center">
                <v-col
                    v-for="(skill, i) in cardSkills"
                    :key="i"
                    cols="12"
                    sm="6"
                    md="4"
                    class="d-flex"
                >
                    <v-sheet
                        class="pa-6 text-center"
                        elevation="2"
                        rounded
                        color="blue-grey-lighten-5"
                    >
                        <v-icon size="40" color="primary" class="mb-3">{{ skill.icon }}</v-icon>
                        <h3 class="text-subtitle-1 font-weight-medium mb-2">{{ skill.title }}</h3>
                        <p class="text-body-2">{{ skill.content }}</p>
                    </v-sheet>
                </v-col>
            </v-row>
        </v-container>
    </v-container>
</template>
<script setup>
    import profile from '@/assets/profile.jpeg';

    const careerHistory = [
        {
            date: '2017.03',
            title: '4年制大学を卒業',
            content: '情報系の学部にて、プログラミングやテレビ番組制作など様々な分野を学ぶ。<br>授業の演習があまりに難しくて挫折し、当時は「エンジニアだけには絶対ならない」と心に決めていました。'
        },
        {
            date: '2017.04',
            title: 'テーマパークの販売職として新卒で入社',
            content: '大学で学んだことを生かしてエンターテインメントに触れたい、という思いで入社。<br>大変なこともあったが、自分の提案や声掛けでお客様が笑顔になってくれることがやりがいでした。'
        },
        {
            date: '2018.08',
            title: 'SES系の会社に転職',
            content: '学生時代にあれほどなりたくないと心に決めていたエンジニアへの転職を決意。<br>大学時代に授業でやったことがあるものの、ほぼほぼ未経験という形で入社。<br>最初はテスト業務から始まり、徐々に対応できることを増やしていきました。<br>最終的には新人教育等も任されるようになり、教育責任者として資料の作成や後輩の取りまとめなど、マネジメントも担当していました。'
        },
        {
            date: '2023.12',
            title: '同じ業界の別企業に転職',
            content: '自分の持っているスキル・知識をもっと広げたい！スキルアップしたい！との思いで転職。<br>現在はフロントエンド開発をメインに、APIの作成や改修などに従事。'
        },
        {
            date: '2025.04',
            title: '現在',
            content: '昔から興味があったデザインに挑戦しようと勉強中。<br>「今更やっても・・」「うまくできそうにない」とか思って手を出そうとしては諦めていましたが<br>この年になって一念発起しました。<br>学ぶことが多く、とても楽しく勉強しています。<br>これからはエンジニアとしてだけでなく、デザイナーとしても活動していきたいと思っています。'
        }
    ];

    const cardSkills = [
        {
            title: 'Frontend',
            icon: 'mdi-monitor',
            content: 'HTML / CSS / JavaScript / jQuery / Vue.js / Vuetify'
        },
        {
            title: 'Backend',
            icon: 'mdi-server',
            content: 'Java / Spring / PostgreSQL / SQL Server'
        },
        {
            title: 'Design',
            icon: 'mdi-brush',
            content: 'Illustrator / Photoshop / Figma'
        }
    ];
</script>
<style scoped>
    .about-me {
        margin-top: 105px;
        display: flex;
        flex-direction: column;
        align-items: center;
        padding: 0px 20px;
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
</style>