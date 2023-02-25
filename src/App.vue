<script>
import "./styles/style.css";
import HomePage from "./pages/HomePage.vue";
import HomePage2 from "./pages/HomePage2.vue";

export default {
    name: "App",
    components: {
        HomePage,
        HomePage2,
    },
};
</script>

<template>
    <div id="app">
        <!-- <HomePage></HomePage> -->
        <HomePage2></HomePage2>
    </div>
</template>

<style></style>
