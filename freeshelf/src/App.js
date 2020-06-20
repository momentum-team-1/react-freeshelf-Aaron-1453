import React from 'react'
import books from './books.json'

class App extends React.Component {
  // constructor () {
  //   super()
  // }

  render () {
    console.log(books)

    return books.map(({
      title,
      author,
      shortDescription,
      url,
      publisher,
      publicationDate,
      detailedDescription,
      coverImageUrl
    }
    , idx) => {
      return (
        <div key={idx} id={idx}>
          <h1>{title}</h1>
          <h3>{author}</h3>
          <p>{shortDescription}</p>
          <p>{url}</p>
          <p>{publisher}</p>
          <p>{publicationDate}</p>
          <p>{detailedDescription}</p>
          <img
            onError={(event) => event.target.setAttribute('src', './logo512.png')}
            src={coverImageUrl}
          />
        </div>
      )
    })
  }
}

export default App
