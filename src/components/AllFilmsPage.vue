<template>
  <div class="all-films">
      <div class="container">
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
        <input class="form-control me-2" type="search" placeholder="Пошук" aria-label="Search" v-model="searchFilm">
        <button class="btn btn-outline-warning" type="button">Пошук</button>
      </form>
    </div>
  </div>
</nav>
          <h2>Вибери фільм на любий смак</h2>
          <div class="films">
            <film-list :films="films" :searchFilm="searchFilm" />
          
          </div>
      </div>
  </div>
</template>

<script>
// import Navbar from "./Navbar.vue";
import FilmList from "./FilmList.vue";

export default {
name: 'AllFilmsPage',
components: {FilmList},


data() {
  return{
    films: [
         {id: 1, title: 'Шан-Чи', img: 'https://multiplex.ua/images/fc/f0/fcf08d1e8b0b1a1669ea90ebd20859b6.jpeg', date: new Date()},
         {id: 2, title: 'Персонаж', img: 'https://multiplex.ua/images/65/df/65dfbc171d3b9ac0ff6e24f62ed13e0a.jpeg', date: new Date()},
         {id: 3, title: 'Вооплащение зла', img: 'https://multiplex.ua/images/2d/c8/2dc84d0a470fae0f3f1147fac86bcdc7.jpeg', date: new Date()},
         {id: 4, title: 'Кэндимен', img: 'https://multiplex.ua/images/2c/1c/2c1c8077a4f97f79a5c8bdc084173fac.jpeg', date: new Date()},
         {id: 5, title: 'Сімейка Крудсів: нова ера', img: 'https://multiplex.ua/images/52/c2/52c288e241f53320a8121d4848677a0f.jpeg', date: new Date()},
         {id: 6, title: 'Бебі Бос 2: Сімейний бізнес', img: 'https://multiplex.ua/images/f2/78/f2789f54de8b935fe4c761d9fbfa7698.jpeg', date: new Date()},
         {id: 7, title: 'Сірано де Бержерак', img: 'https://multiplex.ua/images/30/22/30222d558a2903dc09ad4465193c751b.jpeg', date: new Date()},
         {id: 8, title: 'Загадкове нічне вбивство собаки', img: 'https://multiplex.ua/images/52/fa/52fa11631cac85d7119e34358785b28e.jpeg', date: new Date()},
        ],
        searchFilm: ''
  }
},

methods: {
  
}
}
</script>

<style scoped>
body{
  background: #fff;
}

.all-films h2{
  color: #fff;
  margin-top: 40px;
  padding: 10px;
  border-bottom: 2px dashed red;
  text-align: center;
  font-size: 3rem;
}

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