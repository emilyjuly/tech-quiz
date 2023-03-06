<script>
import "./styles/style.css";
import HomePage from "./pages/HomePage.vue";
import HomePage2 from "./pages/HomePage2.vue";
import ModeQuiz from "./pages/ModeQuiz.vue";
import QuizPage from "./pages/QuizPage.vue";

export default {
    name: "App",
    components: {
        HomePage,
        HomePage2,
        ModeQuiz,
        QuizPage,
    },
};
</script>

<template>
    <div id="app">
        <HomePage></HomePage>
        <HomePage2></HomePage2>
        <ModeQuiz></ModeQuiz>
        <QuizPage></QuizPage>
    </div>
</template>

<style></style>
