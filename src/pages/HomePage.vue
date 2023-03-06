<template>
    <div class="all">
        <HeaderPage />

        <div class="container">
            <div class="container-left">
                <img
                    src="../assets/image-page-home.png"
                    alt="people working"
                    class="people-working"
                />
            </div>
            <div class="container-right">
                <div class="right-top">
                    <p>Teste seus conhecimentos e se divirta!</p>

                    <router-link to="/tema">
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
                    </router-link>

                    <img
                        src="../assets/question.png"
                        alt="question mark"
                        class="question"
                    />
                </div>

                <div class="report-area">
                    <p class="report">
                        Achou algum bug ou tem alguma sugestão? <br />
                        Nos conte!
                    </p>

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
            </div>
        </div>
    </div>
</template>

<script>
import HeaderPage from "../components/HeaderPage.vue";

export default {
    name: "HomePage",
    components: { HeaderPage },
};
</script>

<style scoped>
.all {
    display: flex;
    width: 100%;
    height: 100%;
    flex-direction: column;
}

.container {
    display: flex;
    flex-direction: row;
    width: 100%;
    height: 100%;
}

.container-left {
    display: flex;
    justify-content: left;
    align-items: center;
    width: 50%;
}

.container-right {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    width: 50%;
}

.right-top {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    padding-top: 30px;
}

.people-working {
    width: 100%;
    height: 100%;
}

p {
    font-family: "Amiko", sans-serif;
    font-size: 20px;
    color: white;
    text-align: center;
    margin-bottom: 40px;
    font-weight: 700;
}

.cssbuttons-io-button {
    background: #ffd400;
    color: #2e294e;
    font-family: "Amiko", sans-serif;
    font-weight: 700;
    padding: 0.2em;
    padding-left: 1em;
    margin-top: 20px;
    margin-bottom: 30px;
    font-size: 16px;
    border-radius: 0.9em;
    border: none;
    display: flex;
    align-items: center;
    box-shadow: inset 0 0 1.6em -0.6em #c1b400;
    overflow: hidden;
    position: relative;
    height: 2.3em;
    padding-right: 3em;
    cursor: pointer;
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

.question {
    width: 155px;
    height: 200px;
    align-self: center;
}

.report-area {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
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

@media screen and (max-width: 1000px) {
    .container {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        width: 100%;
    }

    .container-left {
        display: flex;
        width: 100%;
    }

    .container-right {
        display: flex;
        width: 100%;
        margin-bottom: 10px;
    }
}
</style>
