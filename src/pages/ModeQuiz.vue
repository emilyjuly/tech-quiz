<template>
    <div>
        <HeaderPage />
        <div class="top">
            <div class="text1">O tema escolhido foi</div>
            <div class="square">BANCO DE DADOS</div>
            <div class="text2">Agora, escolha o modo que quer jogar...</div>
        </div>

        <div class="cards">
            <EasyCard></EasyCard>
            <MediumCard></MediumCard>
            <HardCard></HardCard>
            <TestCard></TestCard>
        </div>
    </div>
</template>

<script>
import HeaderPage from "../components/HeaderPage.vue";
import EasyCard from "../components/EasyCard.vue";
import MediumCard from "../components/MediumCard.vue";
import HardCard from "../components/HardCard.vue";
import TestCard from "../components/TestCard.vue";

export default {
    name: "HomePage",
    components: {
        HeaderPage,
        EasyCard,
        MediumCard,
        HardCard,
        TestCard,
    },
};
</script>

<style scoped>
.top {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin: auto;
    margin-bottom: -40px;
    width: 90%;
    height: 150px;
}

.cards {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin: auto;
    width: 90%;
    padding: 30px;
}

.text1 {
    color: #ffd400;
    font-family: "Amiko", sans-serif;
    font-weight: 700;
    font-size: 15px;
    margin: 5px;
}

.text2 {
    color: #ffd400;
    font-family: "Amiko", sans-serif;
    font-weight: 700;
    font-size: 12px;
    margin: 5px;
}

.square {
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 5px;
    width: 180px;
    height: 30px;
    background-color: #2e294e;
    color: #ffd400;
    font-family: "Amiko", sans-serif;
    font-weight: 700;
    font-size: 12px;
}
</style>
