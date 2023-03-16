<template>
    <section class="hero">
        <div class="container">
            <div class="col">
                <h1 class="title">
                    Hey! Join To Our Community
                </h1>
                <p>Nulla molestie tortor nec lectus venenatis, sed blandit dui finibus. Curabitur feugiat vulputate purus ipsums dolores ficilis uns etra.</p>
                <button type="button">
                    <span>sign-up</span>
                    <font-awesome-icon icon="fa-solid fa-angle-right" />
                </button>
            </div>
        </div>

    </section>
</template>
  
  
<style lang="scss" scoped>
.hero {
    background-image: url('./img/join_now_cta_bg.jpg');
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center center;

    .container{
        max-width: 991px;
        padding: 0 30px;
    }


    .col {
        display: flex;
        flex-direction: column;
        align-items: center;
        text-align: center;
        gap: 35px;
        color: white;
        position: relative;
        padding: 80px;
    }

    .title {
        font-size: 80px;
        font-weight: 700;
    }

    p {
        font-size: 15px;
        line-height: 28px;
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
</style>