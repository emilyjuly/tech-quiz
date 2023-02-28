<template>
    <div class="easy-card">
        <div class="top-easy-card">
            <div class="title-card">Fácil - Sem tempo - 5 perguntas</div>
            <div class="description">
                <p>Nesse nível do quiz, você irá ter que responder 5</p>
                <p>perguntas de múltipla escolha e não terá que se</p>
                <p>preocupar com o tempo.</p>
            </div>
            <p class="phrase">Jogue esse modo se você ainda é iniciante!</p>
            <img src="../assets/timer_off.png" alt="timer" />
        </div>
    </div>
</template>

<script>
export default {
    name: "EasyCard",
};
</script>

<style scoped>
.top-easy-card {
    background-color: #00c208;
    width: 340px;
    height: 25px;
    border-radius: 26px 26px 0px 0px;
}

.easy-card {
    display: flex;
    flex-direction: column;
    background-color: #323037;
    height: 200px;
    width: 340px;
    border-radius: 26px;
    margin: 20px;
}

.title-card {
    display: flex;
    margin-top: 25px;
    font-family: "Amiko", sans-serif;
    font-weight: 600;
    border-bottom: solid 1px #00c208;
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

.phrase {
    color: #00c208;
    font-weight: 700;
    margin-top: 40px;
    margin-left: 5px;
    font-size: 10px;
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
