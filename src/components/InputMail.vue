<template>
    <section>
        <div class="container">
            <div>
                <h3 class="title">Subscribe To Our Newsletter</h3>
            <div class="row">
                <form class="newsletter">
                    <input type="email" class="email" name="email" placeholder="Insert your Email*">
                    <button type="submit">Send</button>
                </form>
            </div>
            </div>
        </div>
    </section>
</template>
  
  
<style lang="scss" scoped>
section {
    background-color: rgb(242, 242, 242);
}

.title{
    text-align: center;
    padding-bottom: 20px;
}

.newsletter {
    display: flex;
    gap: 25px;
}

.row{
    display: flex;
    justify-content: center;
}

.title {
    font-size: 32px;
    padding-bottom: 30px;

}

.email {
    padding: 15px 300px 15px 5px;
}

button{
    color: white;
    background-color: rgb(25, 25, 25);
    padding: 12px 60px;
    text-transform: uppercase;
    font-weight: 600;
    font-size: 16px;
    cursor: pointer;
    &:hover, &:active{
        background-color: salmon;
    }
}
</style>