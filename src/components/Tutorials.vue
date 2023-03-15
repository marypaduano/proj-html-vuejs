<template>
    <div class="container">
        <div class="row">
            <div class="col article">
                <h1 class="feat-article">reviewed product</h1>
                <h2 class="title-article">Mauris Viverra Atisan Ipsum Eget Felis Prims Efficitur Varius</h2>
                <p>In quis lectus sed leo elementum faucibus in dapibus dictum. Nullamolestie tortor nec lectus venenatis,
                    sed blandit dui, dolor at bibendum.</p>
                <button>Read More</button>
            </div>
            <div class="col">
                <h1 class="title-tutorials">Tutorials & Guides</h1>
                <ul>
                    <li v-for="(card, i) in cards" class="card">
                        <figure>
                            <img :src="card.src" alt="" />
                        </figure>
                        <div class="title">
                            <h4 class="card_title">{{ card.title }}</h4>
                            <span class="date">{{ card.date }}</span>
                            <span class="comment">{{ card.comment }}</span>
                        </div>

                    </li>
                </ul>
            </div>
        </div>

    </div>
</template>

<script>
export default {
    data() {
        return {
            cards: [
                {
                    src: "/img/post_feat_img_23-177x142.jpg",
                    title: "Donec ornare pretium eget scelisque justo",
                    date: "October 11th, 2015",
                    comment: "Comments Off",
                },
                {
                    src: "/img/post_feat_img_22-177x142.jpg",
                    title: "Fusce sollicitudin nunc sed placerat varius",
                    date: "October 11th, 2015",
                    comment: "Comments Off",
                },
                {
                    src: "/img/post_feat_img_20-177x142.jpg",
                    title: "Proin eu purus sed aru aliquet curabir vens",
                    date: "October 11th, 2015",
                    comment: "Comments Off",
                },

            ]
        }
    }
}
</script>


<style lang="scss" scoped>
.row {
    display: flex;
}

.article {
    background-image: url('./img/featured_article_2_bg.jpg');
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center center;
    height: 600px;
    color: white;
    flex-basis: 70%;
}

.card{
    display: flex;
    align-items: center;
    gap: 20px;
}

.col {
    display: flex;
    flex-direction: column;
    gap: 30px;
    padding: 0 30px;
    justify-content: center;
}

.feat-article {
    font-size: 18px;
    text-transform: uppercase;
    letter-spacing: 5px;
    font-weight: 400;
}

.title-article {
    font-size: 42px;
}

.title-tutorials {
    font-size: 38px;
    padding-bottom: 20px;
    position: relative;

    &:before {
        content: "";
        width: 100px;
        height: 2px;
        background-color: salmon;
        position: absolute;
        bottom: 0;
    }
}

p {
    line-height: 25px;
    font-size: 15px;
}

button {
    padding: 15px 35px;
    text-transform: uppercase;
    background-color: rgba(10, 10, 10, 0.925);
    color: white;
    font-weight: 600;
    font-size: 19px;
    max-width: fit-content;
    cursor: pointer;

    &.active,
    &:hover {
        background-color: salmon;
    }
}
figure{
    overflow: hidden;
    padding-bottom: 15px;
}
img{
    cursor: pointer;
    opacity: 1;
    transition: opacity 0.3s, transform 0.3s;
    &:hover{
    opacity: 0.8;
    transform: scale(1.1) translateZ(0);
    }
}
.date,
.comment{
    font-size: 13px;
    color: gray; 

}

.date{
    padding-right: 8px;
    border-right: 1px solid gray;
}
.comment{
    padding-left: 8px;  
    }

.comment,
.card_title{
    padding-bottom: 8px 0;
    cursor: pointer;
    &.active, &:hover{
        color: rgb(40, 175, 195)        
    }
}
</style>