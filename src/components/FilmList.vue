<template>
  <div class="film-list">
    <div class="film-item row row-cols-2 row-cols-lg-3 g-2 g-lg-3" v-if="films.length !== 0 && search.length !== 0">
    <div
    v-for="(film, index) in search"
    :key="index"
    class="film col"
    @click="goToFilm(film.redirect)"
    >

    <div class="films-title"><h3>{{ film.title }}</h3></div>
    <div class="films-img">
        <img :src="film.img" :alt="film.id">
        
    </div>
   
    <router-link class="film-btn btn btn-warning" :to="{name: 'FilmPage', params: {id: film.id}}" >Детальніше</router-link>
    </div>
    </div>
    <div class="sniper" v-else>
        <div class="spinner-border text-warning" role="status">
            <span class="visually-hidden">Loading...</span>
        </div>
    </div>
  </div>
</template>

<script>
export default {
name: 'FilmList',
props:{
    films: {
        type: Array,
        required: true
    },
    searchFilm: {
        type: String
    }
},
data(){
    return{
        
       
    }
    
},
computed: {
  search(){
    return this.films.filter(film => film.title.toLowerCase().includes(this.searchFilm.toLowerCase()))
  }
  
},

}
</script>

<style scoped>
h3{
    font-family: monospace;
}
.film-item{
   display: flex;
   justify-content: space-around;
}
.film:hover{
color: rgb(252, 227, 9);

}
.film{
    max-width: 279px;
    height: 573px;
    padding: 5px;
}
    .films img{
    max-width: 100%;
    height: 350px;
    
    }
    .films-title{
    color: #fff;
    font-size: 20px;
    text-align: center;
    
    }
    .film-btn{
        display: block;
        margin: 0 auto;
        margin: 10px;
    }

    .films-date{
    margin-top: 30px;
    margin-bottom: 20px;
    }

    .all-films .films img{
      height: 400px;
      box-shadow: 12px 12px 2px 1px rgb(31 30 30 / 20%);
}

    .all-films .films img:hover{
     transform: scale(1.01);
     cursor: pointer;

}       

.sniper{
    text-align: center;
    margin: 20px;
}
</style>