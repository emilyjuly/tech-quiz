<template>
    <div>
        <HeaderPage />
        <img
            src="../assets/question.png"
            alt="question mark"
            class="question"
        />
        <div class="card">
            <p class="title">Escolha o tema do quiz</p>
            <div class="line"></div>
            <div class="container">
                <div class="option-card">
                    <p>SCRUM</p>
                </div>
                <div class="option-card">
                    <p>JAVASCRIPT</p>
                </div>
                <div class="option-card">
                    <p>HTML & CSS</p>
                </div>
                <div class="option-card">
                    <p>LINUX</p>
                </div>
                <div class="option-card">
                    <p>JAVA</p>
                </div>
                <div class="option-card">
                    <p>C#</p>
                </div>
                <div class="option-card">
                    <p>BANCO DE DADOS</p>
                </div>
            </div>
            <div class="button">
                <button>
                    <img
                        src="../assets/rigth-arrow.png"
                        alt="arrow"
                        class="arrow"
                    />
                </button>
            </div>
        </div>

        <img class="baloon" src="../assets/baloon-quiz.png" alt="baloon-quiz" />

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
.question {
    width: 60px;
    height: 80px;
}

.button {
    display: flex;
    justify-content: right;
    background-color: #3d3764;
}

button {
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #ffd400;
    width: 40px;
    border-radius: 50px;
    border: none;
    cursor: pointer;
    margin: 10px;
    padding: 4px;
}

.arrow {
    width: 30px;
    height: 30px;
    padding: 5px;
    background-color: #ffd400;
    border-radius: 50px;
}

.container {
    display: flex;
    flex-direction: column;
    background-color: #3d3764;
    margin: 3px;
    width: 50%;
    height: 100%;
}

.option-card {
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 5px;
    width: 140px;
    height: 30px;
    margin: auto;
    background-color: #1f252d;
}

p {
    background-color: #1f252d;
    font-family: "Amiko", sans-serif;
    color: #ffd400;
    font-size: 13px;
}

.title {
    background-color: #3d3764;
    font-family: "Amiko", sans-serif;
    color: #ffd400;
    font-size: 15px;
    padding: 3px;
    border-radius: 5px;
}

.line {
    width: 100%;
    height: 2px;
    background-color: #ffd400;
}

.baloon {
    margin-top: 50px;
    margin-left: 300px;
    width: 90px;
    height: 80px;
}

.card {
    display: flex;
    flex-direction: column;
    border-radius: 5px;
    box-shadow: #1e1e1e 0px 3px 8px;
    width: 90%;
    height: 500px;
    margin: auto;
    margin-top: 18px;
    background-color: #3d3764;
}
</style>
