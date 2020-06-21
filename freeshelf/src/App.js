import React from 'react'
import books from './books.json'
import './App.css'

class App extends React.Component {
  constructor () {
    super()
    this.state = {
      isExpanded: false,
      selectedBooks: []
    }
    this.handleClick = this.handleClick.bind(this)
  }

  handleClick (event) {
    // if selectedBooks includes the id passed in, then remove it from selectedBooks
    this.setState({
      isExpanded: !this.state.selectedBooks.includes(parseInt(event.target.parentElement.id)),
      selectedBooks: [...this.state.selectedBooks, parseInt(event.target.parentElement.id)]
    })
  }

  render () {
    console.log(this.state)

    return books.map(
      (
        {
          title,
          author,
          shortDescription,
          url,
          publisher,
          publicationDate,
          detailedDescription,
          coverImageUrl
        },
        idx
      ) => {
        // console.log('selectedBooks includes index', this.state.selectedBooks.includes(idx))
        return (
          <div key={idx} id={idx}>
            <h1>{title}</h1>
            <h3>{author}</h3>
            <a href={url}>{url}</a>
            <p>{shortDescription}</p>
            <button onClick={(event) => this.handleClick(event)}>
              {this.state.isExpanded && this.state.selectedBooks.includes(idx) ? 'less information' : 'more information'}
            </button>

            {/* if statement to conditionally render UI */}
            {/* if (isExpanded) {
              <div>details</div>
            } else {
              null
            } */}

            {/* inline if with logical && operator, same as a regular
            if statement but more succinct */}
            {/* {this.state.isExpanded &&
              (
                <div>details</div>
              )} */}

            {this.state.isExpanded && this.state.selectedBooks.includes(idx) && (
              <div>
                <p>
                  Publisher:{' '}
                  {publisher === null ? <em>Info not available</em> : publisher}
                </p>
                <p>
                  Publication date:{' '}
                  {publicationDate === null ? (
                    <em>Info not available</em>
                  ) : (
                    publicationDate
                  )}
                </p>
                <p>Full description: {detailedDescription}</p>
                <img
                  onError={(event) =>
                    event.target.setAttribute('src', './logo512.png')}
                  src={coverImageUrl}
                  alt='react'
                />
              </div>
            )}
          </div>
        )
      }
    )
  }
}

export default App

// {publisher === null
//   ? null
//   : <p>Publisher: {publisher}</p>}
