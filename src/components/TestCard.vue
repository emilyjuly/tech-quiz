<template>
    <div class="test-card">
        <div class="top-test-card">
            <div class="title-test-card">Teste - Sem tempo - 2 perguntas</div>
            <div class="description">
                <p>Nesse nível do quiz, você pode realizar um teste</p>
                <p>para checar como funciona</p>
            </div>
            <div class="test-phrase">
                <p class="test-tips">Apenas teste!</p>
            </div>

            <img src="../assets/icon-test.png" alt="timer" />
        </div>
    </div>
</template>

<script>
export default {
    name: "TestCard",
};
</script>

<style scoped>
.top-test-card {
    background-color: #008bef;
    width: 340px;
    height: 25px;
    border-radius: 26px 26px 0px 0px;
}

.test-card {
    display: flex;
    flex-direction: column;
    background-color: #323037;
    height: 200px;
    width: 340px;
    border-radius: 26px;
    margin: 20px;
}

.title-test-card {
    display: flex;
    margin-top: 25px;
    font-family: "Amiko", sans-serif;
    font-weight: 600;
    border-bottom: solid 1px #008bef;
    font-size: 11px;
    letter-spacing: 0.6px;
    color: aliceblue;
    background-color: #323037;
    padding: 5px;
}

p {
    background-color: #323037;
    color: aliceblue;
    font-family: "Amiko", sans-serif;
    font-weight: 400;
    font-size: 9px;
}

.test-phrase {
    background-color: #323037;
    margin-top: 30px;
    margin-left: 5px;
}

.test-tips {
    color: #008bef;
}

.description {
    margin: 5px;
    background-color: #323037;
}

img {
    background-color: #323037;
    height: 45px;
    margin-left: 286px;
    margin-top: 20px;
}
</style>
