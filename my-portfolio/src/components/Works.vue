<template>
    <v-container class="works">
        <h3>WORKS.</h3>
        <div class="line" />
        <v-container class="ma-5">
            <v-row>
                <v-col cols="6">
                    <v-card
                        variant="outlined"
                        class="w-100"
                    >
                        <v-card-title>Title</v-card-title>
                        <v-card-subtitle>Subtitle</v-card-subtitle>
                        <v-card-text>Text</v-card-text>
                        <v-card-actions>
                            <v-btn color="primary">Action 1</v-btn>
                            <v-btn color="secondary">Action 2</v-btn>
                        </v-card-actions>
                    </v-card>
                </v-col>
                <v-col cols="6">
                    <v-card
                        variant="outlined"
                        class="w-100"
                    >
                        <v-card-title>Title</v-card-title>
                        <v-card-subtitle>Subtitle</v-card-subtitle>
                        <v-card-text>Text</v-card-text>
                        <v-card-actions>
                            <v-btn color="primary">Action 1</v-btn>
                            <v-btn color="secondary">Action 2</v-btn>
                        </v-card-actions>
                    </v-card>
                </v-col>
            </v-row>
            <v-row>
                <v-col cols="6">
                    <v-card
                        variant="outlined"
                        class="w-100"
                    >
                        <v-card-title>Title</v-card-title>
                        <v-card-subtitle>Subtitle</v-card-subtitle>
                        <v-card-text>Text</v-card-text>
                        <v-card-actions>
                            <v-btn color="primary">Action 1</v-btn>
                            <v-btn color="secondary">Action 2</v-btn>
                        </v-card-actions>
                    </v-card>
                </v-col>
                <v-col cols="6">
                    <v-card
                        variant="outlined"
                        class="w-100"
                    >
                        <v-card-title>Title</v-card-title>
                        <v-card-subtitle>Subtitle</v-card-subtitle>
                        <v-card-text>Text</v-card-text>
                        <v-card-actions>
                            <v-btn color="primary">Action 1</v-btn>
                            <v-btn color="secondary">Action 2</v-btn>
                        </v-card-actions>
                    </v-card>
                </v-col>
            </v-row>
        </v-container>
    </v-container>
</template>
<style scoped>
    .works {
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