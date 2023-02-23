<script>
export default {
    name: "FooterPage",
};
</script>

<template>
    <footer>
        <img src="../assets/github-icon.png" alt="github icon" />
        <p>JULY</p>
        <img src="../assets/linkedin-icon.png" alt="linkedin icon" />
    </footer>
</template>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Amiko:wght@600;700&display=swap");

footer {
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: #ffd400;
    height: 25px;
    width: 100%;
    position: fixed;
    bottom: 0;
    border-top: solid 3px #2e294e;
}

p {
    background-color: #ffd400;
    font-family: "Amiko", sans-serif;
    color: #2e294e;
    font-size: 14px;
    font-weight: 700;
}

img {
    background-color: #ffd400;
    width: 20px;
    height: 20px;
}
</style>
