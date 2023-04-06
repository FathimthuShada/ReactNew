import React from 'react'

const MovieDisplay = ({movies}) => {
  return (
    <table>
      <thead>
        <tr>
            <th>Title</th>
            <th>Genre</th>
            <th>Year</th>
        </tr>
        {
         movies.map(m=>(
            <tr>
                <td>{m.title}</td>
                <td>{m.genre}</td>
                <td>{m.year}</td>
            </tr>
         )

        )
      }
      </thead>
    </table>
  )
}

export default MovieDisplay
