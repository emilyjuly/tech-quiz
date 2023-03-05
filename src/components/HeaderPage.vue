<script>
export default {
    name: "HeaderPage",
};
</script>

<template>
    <header>
        <nav class="container">
            <img
                src="../assets/quiz-header-icon.svg"
                alt="quiz"
                class="quiz-header-icon"
            />
            <p>TECH QUIZ</p>
            <div class="icons">
                <a
                    href="https://github.com/emilyjuly/tech-quiz.git"
                    target="_blank"
                >
                    <img
                        src="../assets/github-icon.png"
                        alt="github icon"
                        class="icon"
                    />
                </a>
                <a
                    href="https://www.linkedin.com/in/emily-july-38b4671b8/"
                    target="_blank"
                >
                    <img
                        src="../assets/linkedin-icon.png"
                        alt="linkedin icon"
                        class="icon"
                    />
                </a>
            </div>
        </nav>
    </header>
</template>

<style scoped>
header {
    background-color: #ffd400;
    width: 100%;
    height: 85px;
    border-bottom: solid 4px #2e294e;
    display: flex;
    position: fixed;
    justify-content: center;
    align-items: center;
}

.container {
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: #ffd400;
}

p {
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #ffd400;
    font-family: "Amiko", sans-serif;
    color: #2e294e;
    font-size: 29px;
    font-weight: 700;
}

.quiz-header-icon {
    height: 45px;
    width: 45px;
    background-color: #ffd400;
}

.icons {
    display: flex;
    flex-direction: column;
    background-color: #ffd400;
}
.icon {
    background-color: #ffd400;
    width: 20px;
    height: 20px;
}

a {
    text-decoration: none;
    background-color: #ffd400;
}
</style>
