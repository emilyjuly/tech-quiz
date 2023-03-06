import Vue from "vue";
import Router from "vue-router";

Vue.use(Router);

import HomePage from "../pages/HomePage.vue";
import HomePage2 from "../pages/HomePage2.vue";
import ModeQuiz from "../pages/ModeQuiz.vue";
import QuizPage from "../pages/QuizPage.vue";

export default new Router({
    routes: [
        {
            path: "/HomePage",
            name: "HomePage",
            component: HomePage,
        },
        {
            path: "/HomePage2",
            name: "HomePage2",
            component: HomePage2,
        },
        {
            path: "/ModeQuiz",
            name: "ModeQuiz",
            component: ModeQuiz,
        },
        {
            path: "/QuizPage",
            name: "QuizPage",
            component: QuizPage,
        },
    ],
});
