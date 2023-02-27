<template>
    <div>
        <HeaderPage />
        <img src="../assets/image-page-home.png" alt="people working" />
        <p>Testes seus conhecimentos e se divirta!</p>
        <button class="cssbuttons-io-button">
            Escolha um tema
            <div class="icon">
                <svg
                    height="24"
                    width="24"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path d="M0 0h24v24H0z" fill="none"></path>
                    <path
                        d="M16.172 11l-5.364-5.364 1.414-1.414L20 12l-7.778 7.778-1.414-1.414L16.172 13H4v-2z"
                        fill="currentColor"
                    ></path>
                </svg>
            </div>
        </button>
        <img
            src="../assets/question.png"
            alt="question mark"
            class="question"
        />
        <div class="report-area">
            <p class="report">
                Achou algum bug ou tem alguma sugestão?
            </p>
            <p class="report">Nos conte!</p>
            <div class="icons">
                <img
                    src="../assets/bug_report.png"
                    alt="bug"
                    class="report-icon"
                />
                <img
                    src="../assets/forum.png"
                    alt="forum"
                    class="report-icon"
                />
            </div>
        </div>

        <FooterPage />
    </div>
</template>

<script>
import HeaderPage from "../components/HeaderPage.vue";
import FooterPage from "../components/FooterPage.vue";

export default {
    name: "HomePage",
    components: { HeaderPage, FooterPage },
};
</script>

<style scoped>
div {
    display: flex;
    flex-direction: column;
    align-items: center;
}

.icons {
    display: flex;
    flex-direction: row;
}

.report-area {
    padding-top: 50px;
}

p {
    font-family: "Amiko", sans-serif;
    font-size: 16px;
    color: white;
    text-align: center;
}

.report {
    font-family: "Amiko", sans-serif;
    font-size: 13px;
    color: white;
    text-align: center;
}

.report-icon {
    height: 27px;
    width: 23.9px;
}

img {
    width: 100%;
    height: 100%;
}

.question {
    width: 155px;
    height: 200px;
}

.cssbuttons-io-button {
    background: #ffd400;
    color: #2e294e;
    font-family: "Amiko", sans-serif;
    font-weight: 700;
    padding: 0.2em;
    padding-left: 1em;
    margin-top: 20px;
    font-size: 18px;
    border-radius: 0.9em;
    border: none;
    display: flex;
    align-items: center;
    box-shadow: inset 0 0 1.6em -0.6em #c1b400;
    overflow: hidden;
    position: relative;
    height: 2.3em;
    padding-right: 3em;
}

.cssbuttons-io-button .icon {
    background: #7567ce;
    margin-left: 1em;
    position: absolute;
    display: flex;
    align-items: center;
    justify-content: center;
    height: 1.8em;
    width: 2.2em;
    border-radius: 0.7em;
    box-shadow: 0.1em 0.1em 0.6em 0.2em #d0b400;
    right: 0.3em;
    transition: all 0.3s;
}

.cssbuttons-io-button:hover .icon {
    width: calc(100% - 0.6em);
}

.cssbuttons-io-button .icon svg {
    width: 1.1em;
    transition: transform 0.3s;
    color: #ffd400;
}

.cssbuttons-io-button:hover .icon svg {
    transform: translateX(0.1em);
}

.cssbuttons-io-button:active .icon {
    transform: scale(0.95);
}
</style>
