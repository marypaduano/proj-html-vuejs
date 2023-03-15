<template>
    <section class="hero">
        <div class="container">
            <div class="col">
                <h1 class="title">
                    Tech Forum!
                </h1>
                <h3 class="subtitle">
                    Discuss all the latest technology news and trends
                </h3>
                <button>
                    <span>Start with avada!</span>
                    <!-- <font-awesome-icon icon="fa-sharp fa-solid fa-chevron-right" /> -->
                </button>
            </div>
        </div>

    </section>
</template>
  
  
<style lang="scss" scoped>
.hero {
    background-image: url('./img/home_slider_bg.jpg');
    background-attachment: fixed;
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center center;

    .col {
        display: flex;
        flex-direction: column;
        gap: 35px;
        color: white;
        padding: 95px 0;
        position: relative;
    }

    .title {
        font-size: 120px;
    }

    .subtitle {
        font-size: 25px;
    }

    button {
        max-width: fit-content;
        color: white;
        text-transform: uppercase;
        background-color: rgb(40, 175, 195);
        padding: 15px 20px;
    }
}
</style>