<template>
    <div class="container">
        <div class="col">
            <ul class="copy">
                <li>
                    &copy;Copyright 2023
                </li>
                <li>
                    Avada Theme by
                    <a href="#">
                        ThemeFusion
                    </a> 
                </li>
                <li>
                    All Rights Reserved
                </li>
                <li>
                    Powered by
                    <a href="#">
                        Maria Paduano
                    </a> 
                </li>
            </ul>
        </div>
        <div class="col">
            <ul class="social">
                <li class="fb">
                    <a href="https://www.facebook.com/" target="_blank">
                        <font-awesome-icon :icon="['fab', 'facebook-f']" />
                    </a>
                </li>
                <li class="tw">
                    <a href="https://twitter.com/" target="_blank">
                        <font-awesome-icon :icon="['fab', 'twitter']" />
                    </a>
                </li>
                <li class="inst">
                    <a href="https://www.instagram.com/" target="_blank">
                        <font-awesome-icon :icon="['fab', 'instagram']" />
                </a>
                </li>
                <li class="yt">
                    <a href="https://www.youtube.com/" target="_blank">
                        <font-awesome-icon :icon="['fab', 'youtube']" />
                </a>
                </li>
            </ul>
        </div>
    </div>
    
</template>
  
  

<style lang="scss" scoped>

.container{
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.copy{
    display: flex;
    opacity: 0.8;
    font-size: 15px;
    gap: 20px;
    a:hover{
    color: rgb(40, 175, 195)
}
}
.social{
    display: flex;
    font-size: 20px;
    gap: 20px;
    color: white;
    li{
        padding: 10px 15px;
        border-radius: 50%;
        display: flex;
        justify-content: center;
        align-items: center;
        aspect-ratio: 1/1;
    
      
    }
}
.fb{
    background-color: rgb(59, 89, 152)
}
.tw{
    background-color: rgb(85, 172, 238)
}
.inst{
    background-color: rgb(63, 114, 155)
}
.yt{
    background-color: rgb(205, 32, 31)
}



</style>