<template>
    <div class="container">
        <div class="row">
            <div class="col">
                <h1 class="feat-article">featured article</h1>
                <h2 class="title-article">Cras Malesuada Et Orci Eget Pharetra</h2>
                <p>In quis lectus sed leo elementum faucibus in dapibus dictum. Nullamolestie tortor nec lectus venenatis,sed blandit dui, dolor at bibendum sadips ets ipsums dolores ficilis uns leo lectus.</p>
                <button>
                    <span>Read More</span> 
                    <font-awesome-icon icon="fa-solid fa-angle-right" />
                </button>
            </div>
        </div>

    </div>
</template>

<style lang="scss" scoped>
.container {
    background-image: url('./img/featured_article_1_bg.jpg');
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center center;
    height: 600px;
    color: white;
    display: flex;
    align-items: center;
    margin: 60px 0;
}
.col{
    display: flex;
    flex-direction: column;
    gap: 30px;
    padding: 150px 90px 60px 90px;
}
.feat-article{
    font-size: 18px;
    text-transform: uppercase;
    letter-spacing: 5px;
    font-weight: 400;
}
.title-article{
    font-size: 42px;
}

p{
    line-height: 25px;
    font-size: 15px;
}


button{
        padding: 15px 38px;
        display: flex;
        gap: 20px;
        align-items: center;
        text-transform: uppercase;
        background-color: rgba(10, 10, 10, 0.925);
        color: white;
        font-weight: 700;
        font-size: 19px;
        max-width: fit-content;
        cursor: pointer;
        &.active,
        &:hover {
            background-color: salmon;
        }
}
</style>