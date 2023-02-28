<template>
    <div>
        <HeaderPage />
        <div class="container">
            <div class="card">
                <div class="top-card"></div>
                <div class="sub-top">
                    <p class="title">BANCO DE DADOS</p>
                    <div class="time">
                        <img src="../assets/clock icon.png" alt="clock" />
                        <div class="square"><p class="text-time">00</p></div>
                        <div class="divisor"></div>
                        <div class="square"><p class="text-time">10</p></div>
                    </div>
                </div>
                <div class="question">
                    <div class="title-question">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit?
                    </div>
                    <div class="options-question">
                        <div class="radio-container">
                            <label for="radio">
                                <input type="radio" id="radio" name="radio" />
                                <div class="custom-radio"></div>
                            </label>
                        </div>
                        Lorem ipsum dolor sit amet consectetur
                    </div>
                    <div class="options-question">
                        <div class="radio-container">
                            <label for="radio">
                                <input type="radio" id="radio" name="radio" />
                                <div class="custom-radio"></div>
                            </label>
                        </div>
                        Lorem ipsum dolor sit amet consectetur
                    </div>
                    <div class="options-question">
                        <div class="radio-container">
                            <label for="radio">
                                <input type="radio" id="radio" name="radio" />
                                <div class="custom-radio"></div>
                            </label>
                        </div>
                        Lorem ipsum dolor sit amet consectetur
                    </div>
                    <div class="options-question">
                        <div class="radio-container">
                            <label for="radio">
                                <input type="radio" id="radio" name="radio" />
                                <div class="custom-radio"></div>
                            </label>
                        </div>
                        Lorem ipsum dolor sit amet consectetur
                    </div>
                </div>
                <div class="question">
                    <div class="title-question">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit?
                    </div>
                    <div class="options-question">
                        <div class="radio-container">
                            <label for="radio">
                                <input type="radio" id="radio" name="radio" />
                                <div class="custom-radio"></div>
                            </label>
                        </div>
                        Lorem ipsum dolor sit amet consectetur
                    </div>
                    <div class="options-question">
                        <div class="radio-container">
                            <label for="radio">
                                <input type="radio" id="radio" name="radio" />
                                <div class="custom-radio"></div>
                            </label>
                        </div>
                        Lorem ipsum dolor sit amet consectetur
                    </div>
                    <div class="options-question">
                        <div class="radio-container">
                            <label for="radio">
                                <input type="radio" id="radio" name="radio" />
                                <div class="custom-radio"></div>
                            </label>
                        </div>
                        Lorem ipsum dolor sit amet consectetur
                    </div>
                    <div class="options-question">
                        <div class="radio-container">
                            <label for="radio">
                                <input type="radio" id="radio" name="radio" />
                                <div class="custom-radio"></div>
                            </label>
                        </div>
                        Lorem ipsum dolor sit amet consectetur
                    </div>
                </div>
                <div class="question">
                    <div class="title-question">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit?
                    </div>
                    <div class="options-question">
                        <div class="radio-container">
                            <label for="radio">
                                <input type="radio" id="radio" name="radio" />
                                <div class="custom-radio"></div>
                            </label>
                        </div>
                        Lorem ipsum dolor sit amet consectetur
                    </div>
                    <div class="options-question">
                        <div class="radio-container">
                            <label for="radio">
                                <input type="radio" id="radio" name="radio" />
                                <div class="custom-radio"></div>
                            </label>
                        </div>
                        Lorem ipsum dolor sit amet consectetur
                    </div>
                    <div class="options-question">
                        <div class="radio-container">
                            <label for="radio">
                                <input type="radio" id="radio" name="radio" />
                                <div class="custom-radio"></div>
                            </label>
                        </div>
                        Lorem ipsum dolor sit amet consectetur
                    </div>
                    <div class="options-question">
                        <div class="radio-container">
                            <label for="radio">
                                <input type="radio" id="radio" name="radio" />
                                <div class="custom-radio"></div>
                            </label>
                        </div>
                        Lorem ipsum dolor sit amet consectetur
                    </div>
                </div>
                <div class="question">
                    <div class="title-question">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit?
                    </div>
                    <div class="options-question">
                        <div class="radio-container">
                            <label for="radio">
                                <input type="radio" id="radio" name="radio" />
                                <div class="custom-radio"></div>
                            </label>
                        </div>
                        Lorem ipsum dolor sit amet consectetur
                    </div>
                    <div class="options-question">
                        <div class="radio-container">
                            <label for="radio">
                                <input type="radio" id="radio" name="radio" />
                                <div class="custom-radio"></div>
                            </label>
                        </div>
                        Lorem ipsum dolor sit amet consectetur
                    </div>
                    <div class="options-question">
                        <div class="radio-container">
                            <label for="radio">
                                <input type="radio" id="radio" name="radio" />
                                <div class="custom-radio"></div>
                            </label>
                        </div>
                        Lorem ipsum dolor sit amet consectetur
                    </div>
                    <div class="options-question">
                        <div class="radio-container">
                            <label for="radio">
                                <input type="radio" id="radio" name="radio" />
                                <div class="custom-radio"></div>
                            </label>
                        </div>
                        Lorem ipsum dolor sit amet consectetur
                    </div>
                </div>
            </div>
        </div>
        <FooterPage />
    </div>
</template>

<script>
import HeaderPage from "../components/HeaderPage.vue";
import FooterPage from "../components/FooterPage.vue";

export default {
    name: "QuizPage",
    components: {
        HeaderPage,
        FooterPage,
    },
};
</script>

<style scoped>
.container {
    display: flex;
    align-items: center;
    justify-content: center;
    margin: auto;
    flex-direction: column;
    border: solid 1px red;
    width: 100%;
}

.top-card {
    background-color: #ffd400;
    width: 100%;
    height: 16px;
    border-radius: 11px 11px 0px 0px;
}

.sub-top {
    background-color: #2e294e;
    width: 100%;
    height: 80px;
    border-bottom: solid 1px #ffd400;
}

.title {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 20px;
    font-size: 14px;
    background-color: #2e294e;
    font-family: "Amiko", sans-serif;
    font-weight: 700;
    color: #ffd400;
}

.card {
    display: flex;
    flex-direction: column;
    background-color: #3d3764;
    /* height: 600px; */
    width: 95%;
    border-radius: 11px;
    margin: 7px;
}

.time {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    width: 50%;
    background-color: #2e294e;
    margin: 3px;
}

img {
    background-color: #2e294e;
    height: 30px;
    width: 30px;
    margin-left: -25px;
}

.square {
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #3d3764;
    width: 35px;
    height: 25px;
    border-radius: 8px;
    margin: 4px;
}

.divisor {
    background-color: #ffd400;
    width: 2px;
    height: 16px;
    align-items: center;
}

.text-time {
    background-color: #3d3764;
    font-family: "Amiko", sans-serif;
    font-weight: 700;
    color: #ffd400;
    font-size: 14px;
}

.question {
    background-color: #3d3764;
    display: flex;
    justify-content: center;
    flex-direction: column;
    padding: 4px;
    margin: 2px;
    margin-top: 6px;
    margin-bottom: 20px;
}

.title-question {
    background-color: #3d3764;
    font-family: "Amiko", sans-serif;
    font-weight: 400;
    color: #ffd400;
    font-size: 10px;
}

.options-question {
    display: flex;
    align-items: center;
    background-color: #3d3764;
    font-family: "Amiko", sans-serif;
    font-weight: 400;
    color: #ffd400;
    font-size: 8px;
    margin-top: 4px;
}

input[type="radio"] {
    display: none;
}

.radio-container {
    background-color: #3d3764;
}
.custom-radio {
    background-color: #3d3764;
    border: 1px solid #ffd400;
    width: 11px;
    height: 11px;
    margin: 4px;
    place-content: center;
    border-radius: 50%;
}

input[type="radio"]:checked + .custom-radio {
    border-color: #ac70f9;
}

input[type="radio"]:checked + .custom-radio span {
    background: #ac70f9;
}
</style>
