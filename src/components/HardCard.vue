<template>
    <div class="hard-card">
        <div class="top-hard-card">
            <div class="title-hard-card">
                Difícil - Com tempo - 15 perguntas
            </div>
            <div class="description">
                <p>Nesse nível do quiz, você irá ter que responder 15</p>
                <p>perguntas de múltipla escolha mais difíceis e terá que se</p>
                <p>preocupar com o tempo.</p>
            </div>
            <div class="hard-phrase">
                <p class="hard-tips">
                    Jogue esse modo se você quer desafiar a si mesmo!
                </p>
            </div>

            <img src="../assets/acute.png" alt="timer" />
        </div>
    </div>
</template>

<script>
export default {
    name: "HardCard",
};
</script>

<style scoped>
.top-hard-card {
    background-color: #c80000;
    width: 340px;
    height: 25px;
    border-radius: 26px 26px 0px 0px;
}

.hard-card {
    display: flex;
    flex-direction: column;
    background-color: #323037;
    height: 200px;
    width: 340px;
    border-radius: 26px;
    margin: 20px;
}

.title-hard-card {
    display: flex;
    margin-top: 25px;
    font-family: "Amiko", sans-serif;
    font-weight: 600;
    border-bottom: solid 1px #c80000;
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

.hard-phrase {
    background-color: #323037;
    margin-top: 30px;
    margin-left: 5px;
}

.hard-tips {
    color: #c80000;
}

.description {
    margin: 5px;
    background-color: #323037;
}

img {
    background-color: #323037;
    height: 45px;
    margin-left: 286px;
}
</style>
