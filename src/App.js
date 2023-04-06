import {useState} from 'react'
import GenreDisplay from './Components/GenreDisplay';
import MovieDisplay from './Components/MovieDisplay';
import './App.css';


const movies = [ { title: 'The Shawshank Redemption', genre: 'Drama', year: 1994 },
                 { title: 'The Godfather', genre: 'Crime', year: 1972 },
                 { title: 'The Dark Knight', genre: 'Action', year: 2008 },
                 { title: '12 Angry Men', genre: 'Drama', year: 1957 },
                 { title: 'Schindler\'s List', genre: 'Drama', year: 1993 },
                 { title: 'The Lord of the Rings: The Return of the King', genre: 'Fantasy', year: 2003 },
                 { title: 'The Good, the Bad and the Ugly', genre: 'Western', year: 1966 },
                 { title: 'Forrest Gump', genre: 'Drama', year: 1994 },
                 { title: 'Inception', genre: 'Science Fiction', year: 2010 },
                 { title: 'The Matrix', genre: 'Science Fiction', year: 1999 },
                 { title: 'The Silence of the Lambs', genre: 'Thriller', year: 1991 },
                 { title: 'Saving Private Ryan', genre: 'War', year: 1998 },
                 { title: 'Jurassic Park', genre: 'Science Fiction', year: 1993 },
                 { title: 'Terminator 2: Judgment Day', genre: 'Science Fiction', year: 1991 },
                 { title: 'The Lion King', genre: 'Animation', year: 1994 } ];

function App() {
  const [filterGenre,setFilterGenre] = useState('all');
  console.log("filter genre:",filterGenre)

  function filterByGenre(genre){
    setFilterGenre(genre)
  }

  const filterMovies = filterGenre === "all" ? movies : movies.filter(i=>i.genre === filterGenre)
  console.log("filter Movies:", filterMovies)

  return (
    <div className='container'>
      <h1 className='Head'>Top 15 movies of all time</h1>
      <div className='genre'>
        <h3>Fliter by genre</h3>
        <GenreDisplay movies={movies} genreFilter={filterByGenre}/>
      </div>
      <div className='movies'>
        <MovieDisplay movies={filterMovies}/>
      </div>
    </div>
  )
}

export default App
