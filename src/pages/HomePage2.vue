<template>
    <div>
        <HeaderPage />
        <div class="container">
            <div class="left">
                <img
                    src="../assets/question.png"
                    alt="question mark"
                    class="question"
                />
            </div>
            <div class="mid">
                <div class="card">
                    <p class="title">Escolha o tema do quiz</p>
                    <div class="line"></div>
                    <div class="options">
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
                    <div class="line"></div>
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
            </div>
            <div class="right">
                <img
                    class="baloon"
                    src="../assets/baloon-quiz.png"
                    alt="baloon-quiz"
                />
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
.container {
    display: flex;
    flex-direction: row;
    justify-content: center;
    width: 100%;
    height: 100%;
}

.left {
    display: flex;
    justify-content: left;
    width: 25%;
    height: 100%;
}

.mid {
    display: flex;
    justify-content: center;
    width: 50%;
    height: 100%;
}

.right {
    display: flex;
    justify-content: right;
    width: 25%;
}
.question {
    width: 100px;
    height: 120px;
}

.card {
    display: flex;
    flex-direction: column;
    border-radius: 5px;
    box-shadow: #1e1e1e 0px 3px 8px;
    width: 100%;
    height: 100%;
    margin: 50px;
    background-color: #3d3764;
}

.options {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
    background-color: #3d3764;
}

.option-card {
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 5px;
    width: 140px;
    height: 30px;
    margin: 20px;
    background-color: #1f252d;
}

button {
    display: flex;
    width: 100%;
    background-color: #ffd400;
    text-decoration: none;
    cursor: pointer;
    border: none;
    padding: 3px;
    justify-content: center;
    border-radius: 0px 0px 5px 5px;
}

.arrow {
    display: flex;
    width: 20px;
    height: 20px;
    background-color: #ffd400;
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
    padding: 10px;
    border-radius: 5px;
}

.line {
    width: 100%;
    height: 2px;
    background-color: #ffd400;
}

.baloon {
    margin: 30px;
    margin-top: 300px;
    width: 160px;
    height: 150px;
}

@media screen and (max-width: 1000px) {
    .container {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        width: 100%;
    }

    .left {
        display: flex;
        width: 100%;
    }

    .mid {
        display: flex;
        width: 100%;
    }

    .right {
        display: flex;
        width: 100%;
    }

    .baloon {
        margin: 10px;
        width: 130px;
        height: 120px;
    }
}
</style>
