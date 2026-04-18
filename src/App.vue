<script>
import logo from './assets/logo.png';
export default {
    name: 'home',
    data() {
        return {
            logo,
        }
    },
    mounted() {
        // كود يُنفّذ عند تحميل الصفحة
    },
    methods: {
        // دوال صفحة About
    },
}
</script>

<template>
<v-app>
    <v-app-bar  density="comfortable" class="pa-1">
        <v-app-bar-title>
            <v-row align="center">
                <v-img :src="logo" max-width="50" height="50"></v-img>
                <b>
                    <font color="#4A148C">PROJECT</font> RI
                </b>

            </v-row>
        </v-app-bar-title>
        <v-row justify="center">
            <v-btn color="deep-purple-lighten-5" to="/xml" variant="flat">XML DATA</v-btn>
            <v-btn color="deep-purple-lighten-5" to="/json" variant="flat">JSON DATA</v-btn>
        </v-row>
        <v-spacer></v-spacer>
          <v-btn icon="mdi-cart"></v-btn>
          <v-btn icon="mdi-account"></v-btn>
    </v-app-bar>

    <v-main>
        <v-container class="py-8">
            <router-view />
        </v-container>
    </v-main>
</v-app>
</template>
