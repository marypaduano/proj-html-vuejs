<template>
    <li class="card">
        <figure>
            <img :src="src" alt="">
        </figure>
        <div class="title">
            <h4 class="card_title">{{ title }}</h4>
            <span class="date">{{ date }}</span>
            <span class="comment">{{ comment }}</span>
        </div>
        <p>{{ description }}</p>
    </li>
</template>

<script>
export default {
    props: {
        src: String,
        date: String,
        comment: String,
        title: String,
        description: String
    }
}
</script>

  
  
<style lang="scss" scoped>
.card {
    padding-top: 50px;
    display: flex;
    flex-direction: column;

}

figure {
    overflow: hidden;
    padding-bottom: 15px;
}

img {
    cursor: pointer;
    opacity: 1;
    transition: opacity 0.3s, transform 0.3s;

    &:hover {
        opacity: 0.8;
        transform: scale(1.1) translateZ(0);
    }
}

.date,
.comment {
    font-size: 13px;
    color: gray;

}

.date {
    padding-right: 8px;
    border-right: 1px solid gray;
}

.comment {
    padding-left: 8px;
}

.comment,
.card_title {
    padding-bottom: 8px 0;
    cursor: pointer;

    &.active,
    &:hover {
        color: rgb(40, 175, 195)
    }
}

p {
    color: gray;
    line-height: 25px;
    padding-top: 15px;
}</style>