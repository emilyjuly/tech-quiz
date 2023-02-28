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
    justify-content: center;
    align-items: center;
}

nav {
    display: flex;
    align-items: end;
    background-color: #ffd400;
}

p {
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
</style>
