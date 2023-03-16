<template>
    <footer class="main-footer">
        <div class="container">

            <div class="col">
                <h3>avada tech forum</h3>
                <p>Sed semper, nisl id feugiat eleifend, erat est digssim felis, quis auctor elit enim nec ante. Cras et nibh risus. Pellentesque non mi sit amet mi intermentum.</p>
            </div>
            <div class="col">
                <FooterMenu title="popular topic" :links="menu1.links" />
            </div>
            <div class="col">
                <FooterMenu title="recent posts" :links="menu2.links" />
            </div>
            <div class="col">
                <FooterMenu title="latest replies" :links="menu3.links" />
            </div>
            
        </div>
        <hr>
        <Copyright />
        


    </footer>
</template>
  
<script>
import FooterMenu from './FooterMenu.vue'
import Copyright from './Copyright.vue'
export default {
    components: {
        FooterMenu,
        Copyright
    },
    data() {
        return {
            menu1: {
                title: 'popular topic',
                links: [
                    'Morbi vitae dui euismod vulputate sollicitudin',
                    'Vivamus pellenteque, felis quis varius',
                    'Donec ornare pretium eget scelisque justo',
                ]
            },
            menu2: {
                title: 'recent posts',
                links: [
                    'Morbi vitae dui euismod vulputate sollicitudin',
                    'Vivamus pellenteque, felis quis varius',
                    'Donec ornare pretium eget scelisque justo',
                ]
            },
            menu3: {
                title: 'latest replies',
                links: [
                    'Dario Pineda on Morbi vitae dui euismod vulputate sollicitudin',
                    'Dario Pineda on Morbi vitae dui euismod vulputate sollicitudin',

                ]
            }
        }
    }
}
</script>
  
<style lang="scss" scoped>
.container {
    display: flex;
    flex-wrap: wrap;
    gap: 32px;
    padding: 40px 0;

    .col {
        flex-grow: 1;
        flex-basis: 0;
        padding: 0 10px;
    }
}

    h3 {
        font-size: 24px;
        text-transform: uppercase;
        margin-bottom: 24px;
        
    }

    p {
        line-height: 25px;
        font-size: 15px;
        padding: 15px 0;
    }


</style>