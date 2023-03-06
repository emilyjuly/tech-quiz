<script>
import "./styles/style.css";
import HomePage from "./pages/HomePage.vue";

export default {
    name: "App",
    components: {
        HomePage,
    },
};
</script>

<template>
    <div id="app">
        <router-view></router-view>
    </div>
</template>

<style></style>
