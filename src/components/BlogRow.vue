<template>
    <section>
        <div class="container">
            <div class="row">
                <a href="#" class="url">
                    <h4>read our blog</h4>
                    <font-awesome-icon icon="fa-solid fa-right-long" />
                </a>
            </div>
        </div>
    </section>

</template>

<style lang="scss" scoped>
section{
    background-color: rgb(10, 10, 10);
    color: white;
    text-transform: uppercase;
    text-align: center;

    cursor: pointer;
    &:hover{
        background-color: rgb(40, 175, 195);
    }
    h4{
        line-height: 32px;
    }
}
.url{
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 20px;
    color: white;
    font-size: 18px;
}
</style>