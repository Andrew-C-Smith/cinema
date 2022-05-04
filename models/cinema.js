const Cinema = function (films) {
  this.films = films;
};



Cinema.prototype.getFilmTitles = function(){
  let result = this.films.map((film) =>{
    return film.title

    })
    return result

}

Cinema.prototype.findFilmByTitle = function(filmTitle){
  const result = this.films.filter((film) =>{
      return film.title === filmTitle
  })
      return result

}

Cinema.prototype.findFilmByGenre = function(filmGenre){
  const result = this.films.filter((film) =>{
      return film.genre === filmGenre
  })


  return result
}


Cinema.prototype.filmExistsByYear = function(filmYear){
  const result = this.films.some((film) => { 
    return film.year === filmYear 
  })      
  return result
}

Cinema.prototype.filmDoesNotExistByYear = function(filmYear){
  const result = this.films.every((film) => { 
    return film.year === filmYear 
  })      
  return result
}


Cinema.prototype.filmOverLength = function(filmLength){
  const result = this.films.every((film) => {
      return film.length > filmLength
  })
  
  return result

}

Cinema.prototype.allFilmsLength = function(){
  const total = this.films.reduce ((runningTotal, film) =>{
      return runningTotal + film.length
  },0)
  
  
  return total

}


module.exports = Cinema;
