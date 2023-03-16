<template>
    <section class="hero">
        <div class="container fade-in-right">
            <div class="col">
                <h1 class="title">
                    Tech Forum!
                </h1>
                <h3 class="subtitle">
                    Discuss all the latest technology news and trends
                </h3>
                <button type="button">
                    <span>Start with avada!</span>
                    <font-awesome-icon icon="fa-solid fa-angle-right" />
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
        padding: 160px 0;
        position: relative;
    }

    .title {
        font-size: 130px;
        font-weight: 700;
    }

    .subtitle {
        font-size: 25px;
    }

    button {
        max-width: fit-content;
        color: white;
        text-transform: uppercase;
        display: flex;
        gap: 20px;
        align-items: center;
        background-color: rgb(40, 175, 195);
        padding: 15px 38px;
        font-weight: 700;
        font-size: 19px;
        cursor: pointer;
        &.active,
        &:hover {
            background-color: salmon;
        }
    }
}

.fade-in-right {
  opacity: 0;
  transform: translateX(50px);
  animation-name: fade-in-right;
  animation-duration: 1s;
  animation-fill-mode: forwards;
}

@keyframes fade-in-right {
  from {
    opacity: 0;
    transform: translateX(50px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
}
</style>