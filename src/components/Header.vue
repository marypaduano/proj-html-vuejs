<template>
    <header>
        <div class="container">
            <div class="row">
                <Logo />
                <nav class="menu">
                    <ul class="menu_item">
                        <NavMenu v-for="(menu, i) in menu" :key="i" :title="menu.title" />
                        <button class="btn">Join Us</button>
                        <font-awesome-icon icon="fa-solid fa-magnifying-glass" />
                    </ul>

                </nav>
            </div>

        </div>
    </header>
</template>

<script>
import Logo from './Logo.vue';
import NavMenu from './NavMenu.vue'

export default {
    components: {
        Logo,
        NavMenu
    },
    data() {
        return {
            menu: [
                {
                    title: 'Home'
                },
                {
                    title: 'Apple'
                },
                {
                    title: 'Microsoft'
                },
                {
                    title: 'Android'
                },
                {
                    title: 'Forums'
                },
                {
                    title: 'Contact Us'
                }
            ]
        }
    }
}

</script>


<style lang="scss" scoped>
header {
    background-color: rgb(40, 175, 195);
    padding: 15px 0;
    position: sticky;
    top: 0;
    z-index: 999;

    .row {
        display: flex;
        justify-content: space-between;
        align-items: center;
    }

    .menu_item {
        display: flex;
        align-items: center;
        color: rgba(255, 255, 255, 0.598);
        gap: 20px;
        font-size: 15px;
        font-weight: 600;
        cursor: pointer;
        position: relative;

        &.active,
        &:hover{
            color: white;          
            
        }
        
    
    }

    .btn {
        padding: 12px 20px;
        background-color: black;
        color: white;
        font-weight: 600;
        cursor: pointer;

        &.active,
        &:hover {
            background-color: salmon;
        }

    }
}</style>

