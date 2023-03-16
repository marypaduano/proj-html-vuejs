<template>
    <section>
        <div class="row">
        <h3 class="title">Subscribe To Our Newsletter</h3>
        <form class="newsletter">
            <input type="email" class="email" name="email" placeholder="Insert your Email*">
            <button type="submit">Send</button>
        </form>
    </div>
    </section>
</template>
  
  
<style lang="scss" scoped>

section{
    display: flex;
    flex-direction: column;
    gap: 25px;
    align-items: center;
    background-color: rgb(242, 242, 242);
}

.newsletter{
    display: flex;
    gap: 25px;
}
.title {
 font-size: 32px;

}
.email{
    padding: 15px 40px;
}


</style>