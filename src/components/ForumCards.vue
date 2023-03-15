<template>
    
    <ul class="grid_card">
        <li v-for="(card, i) in forumCards" :key="i" class="card">
            <div class="card-icon">
            <font-awesome-icon :icon="card.icon" class="icon"/>
        </div>
            <span>{{ card.title }}</span>
        </li>
    </ul>
</template>

<script>

export default {

    data() {
        return {
            forumCards: [
                {
                    icon: "fa-file-lines",
                    title: "News & Community",
                },
                {
                    icon: "fa-apple",
                    title: "Apple Forum",
                },
                {
                    icon: "fa-windows",
                    title: "Microsoft Forum",
                },
                {
                    icon: "fa-android",
                    title: "Android Forum",
                },
                {
                    icon: "mug-saucer",
                    title: "General Discussion",
                },
                {
                    icon: "fa-cubes",
                    title: "Apps & Software",
                },
                {
                    icon: "fa-laptop",
                    title: "Gadget & Stuff",
                },
                {
                    icon: "wrench",
                    title: "Tutorial & Guides",
                },
            ],
        }
    }
}
</script>

  
  
<style lang="scss" scoped>
.grid_card {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    padding: 50px 0;
    gap: 38px;
}
.card{
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 60px 0;
    gap: 38px;
    font-size: 28px;
    background-color: white;
    position: relative;
    &::after {
            content: "";
            width: 100%;
            height: 2px;
            background-color: rgb(40, 175, 195);
            position: absolute;
            top: 0;
        }
}
.icon{
    font-size: 42px;
    color: white;    
    padding: 20px; 
    border-radius: 50%;
    background-color: rgb(255, 141, 97);
    text-align: center;
    vertical-align: middle;
    cursor: pointer;
    
}
</style>