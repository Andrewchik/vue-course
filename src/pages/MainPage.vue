<template>
  <div class="main">
    <div class="container">
        <div class="title">
            <h1>Онлайн кінотеатр</h1>
            <router-link to="/films" class="btn btn-outline-dark">Перейти до фільмів</router-link>
        </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'MainPage',
  
}
</script>


<style scoped>
.container{
    border: 2px dashed rgb(255, 0, 0);
  
}
.title{
    position: absolute;
    top: 50%;
    left: 50%;
    margin-right: -50%;
    transform: translate(-50%, -50%);
}
.title h1{
    font-size: 40px;
    color: #fff;
}

.title a{
    color: #fff;
    border: 1px solid #fff;
    display: block;
}
</style>
