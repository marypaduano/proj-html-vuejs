<template>
    <main>
        <section>
            <div class="container">
                <div class="row">
                    <div class="col">
                        <h3 class="title-section">phasellus eget metus</h3>
                        <h1 class="subtitle-section">All The Latest News</h1>
                    </div>
                </div>
                <ul class="grid">
                    <MainCard v-for="(card, i) in cards1" :key="i" :src="card.src" :title="card.title" :date="card.date"
                        :comment="card.comment" :description="card.description" />
                </ul>
                <div>
                    <ReadMore />
                </div>
                <ul class="grid">
                    <MainCard v-for="(card2, i) in cards2" :key="i" :src="card2.src" :title="card2.title" :date="card2.date"
                        :comment="card2.comment" :description="card2.description" />
                </ul>
            </div>

        </section>
    </main>
</template>


<script>
import MainCard from './MainCard.vue'
import ReadMore from './ReadMore.vue'
export default {
    components: {
        MainCard,
        ReadMore
    },
    data() {
        return {
            cards1: [
                {
                    src: "/img/post_feat_img_25-700x441.jpg",
                    title: "Morbi vitae dui euismod vulputate sollicitudin",
                    date: "October 11th, 2015",
                    comment: "2 Comments",
                    description: "Donec finibus sit amet orci eget ultricies. Praesent posuere ante ut erat fringilla, vestibulum placerat metus mattis. Aenean dictum vitae nisl"
                },
                {
                    src: "/img/post_feat_img_24-700x441.jpg",
                    title: "Vivamus pellenteque, felis quis varius",
                    date: "October 11th, 2015",
                    comment: "Comments Off",
                    description: "Donec finibus sit amet orci eget ultricies. Praesent posuere ante ut erat fringilla, vestibulum placerat metus mattis. Aenean dictum vitae nisl"
                },
                {
                    src: "/img/post_feat_img_23-700x441.jpg",
                    title: "Donec ornare pretium eget scelisque justo",
                    date: "October 11th, 2015",
                    comment: "Comments Off",
                    description: "Donec finibus sit amet orci eget ultricies. Praesent posuere ante ut erat fringilla, vestibulum placerat metus mattis. Aenean dictum vitae nisl"
                },

            ],
            cards2: [
                {
                    src: "/img/post_feat_img_25-700x441.jpg",
                    title: "Morbi vitae dui euismod vulputate sollicitudin",
                    date: "October 11th, 2015",
                    comment: "2 Comments",
                    description: "Donec finibus sit amet orci eget ultricies. Praesent posuere ante ut erat fringilla, vestibulum placerat metus mattis. Aenean dictum vitae nisl"
                },
                {
                    src: "/img/post_feat_img_24-700x441.jpg",
                    title: "Vivamus pellenteque, felis quis varius",
                    date: "October 11th, 2015",
                    comment: "Comments Off",
                    description: "Donec finibus sit amet orci eget ultricies. Praesent posuere ante ut erat fringilla, vestibulum placerat metus mattis. Aenean dictum vitae nisl"
                },
                {
                    src: "/img/post_feat_img_23-700x441.jpg",
                    title: "Donec ornare pretium eget scelisque justo",
                    date: "October 11th, 2015",
                    comment: "Comments Off",
                    description: "Donec finibus sit amet orci eget ultricies. Praesent posuere ante ut erat fringilla, vestibulum placerat metus mattis. Aenean dictum vitae nisl"
                },

            ]
        }
    }

}
</script>

<style lang="scss" scoped>
.grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 28px;
}

.row {
    display: flex;
    justify-content: center;
    text-align: center;

    .col {
        padding: 50px 0;
        position: relative;

        &:before {
            content: "";
            width: 80px;
            height: 2px;
            background-color: salmon;
            position: absolute;
            left: 50%;
            right: 50%;
            bottom: 0;
            transform: translate(-50%, -50%);
        }

    }
}
</style>