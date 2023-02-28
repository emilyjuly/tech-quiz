<template>
    <div class="medium-card">
        <div class="top-medium-card">
            <div class="title-medium-card">
                Médio - Com tempo - 10 perguntas
            </div>
            <div class="description">
                <p>Nesse nível do quiz, você irá ter que responder 10</p>
                <p>perguntas de múltipla escolha e terá que se</p>
                <p>preocupar com o tempo.</p>
            </div>
            <div class="medium-phrase">
                <p class="medium-tips">
                    Jogue esse modo se você já tem uma boa
                </p>
                <p class="medium-tips">base sobre o assunto!</p>
            </div>

            <img src="../assets/alarm.png" alt="timer" />
        </div>
    </div>
</template>

<script>
export default {
    name: "MediumCard",
};
</script>

<style scoped>
.top-medium-card {
    background-color: #ffd400;
    width: 340px;
    height: 25px;
    border-radius: 26px 26px 0px 0px;
}

.medium-card {
    display: flex;
    flex-direction: column;
    background-color: #323037;
    height: 200px;
    width: 340px;
    border-radius: 26px;
    margin: 20px;
}

.title-medium-card {
    display: flex;
    margin-top: 25px;
    font-family: "Amiko", sans-serif;
    font-weight: 600;
    border-bottom: solid 1px #ffd400;
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

.medium-phrase {
    background-color: #323037;
    margin-top: 30px;
    margin-left: 5px;
}

.medium-tips {
    color: #ffd400;
}

.description {
    margin: 5px;
    background-color: #323037;
}

img {
    background-color: #323037;
    height: 45px;
    margin-left: 290px;
}
</style>
