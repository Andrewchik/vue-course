<template>
  <nav class="navbar navbar-expand-lg ">
  <div class="container-fluid">
    <a class="navbar-brand" href="/">Кінотеатр</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <a class="nav-films nav-link active" aria-current="page" href="/films">Фільми</a>
        </li>
       
      </ul>
      <form class="d-flex">
        <input class="form-control me-2" type="search" placeholder="Пошук" aria-label="Search" v-model="search" :search="search">
        <button class="btn btn-outline-warning" type="button">Пошук</button>
      </form>
    </div>
  </div>
</nav>
</template>

<script>
export default {
name: 'Navbar',

data(){
  return{
    search: ''
  }
},
methods: {
 
}
}
</script>

<style>
.navbar-brand{
  font-size: 30px;
  color: rgb(223, 202, 18);
}

.navbar-brand:hover{
  color: rgb(223, 202, 18);
}
.nav-films{
    font-size: 18px;
    color: #fff;
}
.nav-films:hover{
  color: rgb(223, 202, 18);
}
nav{
    background-color: #10151b;
}
</style>