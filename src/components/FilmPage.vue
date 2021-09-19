<template>
  <div class="film-page">
  <div class="container" v-if="film">
    <h1>{{ film.title }}</h1>
    <div class="film-page_movie">
    <img
      :src="film.img"
      :alt="film.title"
    >
    <div class="section">
      <p class="section__title">Немного о сюжете:</p>
      <p class="section__description">{{ film.description }}</p>
      <p class="section__title">Рейтинг:</p>
      <p class="section__description">{{ film.rating }}</p>
      <p class="section__title">Актерский состав:</p>
      <p class="section__description">{{ film.actors.join(', ') }}</p>
      <p class="section__title">Режисеры:</p>
      <p class="section__description">{{ film.directors.join(', ') }}</p>
    </div>
    </div>
    
  </div>
</div>
</template>

<script>
 import films from "../mocks/films"
export default {
    data(){
        return{
            film: null
        }
    },
    created() {
        console.log(films);
        console.log(this.$route.params.id);
    const film = films.find(film => film.id == this.$route.params.id)
    if (film) {
      this.film = film
    }
  }
}
</script>

<style scoped>
.film-page {
   padding-bottom: 100px;
}
.film-page_movie{
    display: flex;
}
 .film-page .back {
   color: #fff;
   margin-left: 30px;
   margin-top: 30px;
}
 .film-page h1 {
   color: #fff;
   margin-bottom: 30px;
   padding-bottom: 15px;
   position: relative;
}
 .film-page h1::before {
   content: '';
   position: absolute;
   width: 100%;
   height: 3px;
   bottom: 0;
   left: 0;
   background: linear-gradient(90deg, #eb5804 0%, rgba(0, 0, 0, 0) 90%);
}
 .film-page img {
   object-fit: contain;
   border-radius: 10px;
   width: 100%;
   height: 400px;
   margin-bottom: 30px;
   padding: 10px;
}
 .film-page .section__title {
   color: #eb5804;
   font-weight: 700;
   font-size: 25px;
   margin-bottom: 10px;
}
 .film-page .section__description {
   color: #fff;
   font-size: 18px;
   line-height: 30px;
}
</style>