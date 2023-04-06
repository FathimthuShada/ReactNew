//import React from 'react';

function GenreDisplay({movies,genreFilter}) {
  let arr = movies.map(i => i.genre)  //loop to get all genres 
  let set = new Set(arr)                // converted to set so that items are unique
  let genreArray = [...set]      // again converted back to array

  function updateGenre(e){
    genreFilter(e.target.value)  //Whenever a person clicks a genre button eg: Animation ,genreFilter gets the value animation,
                                //this will update filteByGenre in app.js, and set setFilterGenre as Animation
                                //This is passed to fiter movies functio, and fives resultaccording to genre
    console.log("Button clicked is:",e.target.value)
  }
  
  return (
    <div>{
        genreArray.map((g) => (
            <button id="btn" onClick={updateGenre} value={g}> {g} </button>
            )
          )
        }
    </div>
  )
}

export default GenreDisplay
