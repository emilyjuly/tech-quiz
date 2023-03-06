import { createRouter, createWebHistory } from "vue-router";
import HomePage from "../pages/HomePage.vue";
import HomePage2 from "../pages/HomePage2.vue";
import ModeQuiz from "../pages/ModeQuiz.vue";
import QuizPage from "../pages/QuizPage.vue";

const routes = [
    {
        path: "/",
        name: "home",
        component: HomePage,
    },
    {
        path: "/tema",
        name: "tema",
        component: HomePage2,
    },
    {
        path: "/modo",
        name: "modo",
        component: ModeQuiz,
    },
    {
        path: "/quiz",
        name: "quiz",
        component: QuizPage,
    },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;
