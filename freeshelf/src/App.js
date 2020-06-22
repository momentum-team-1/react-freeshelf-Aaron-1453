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
    // if selectedBooks array icludes id passed in
    if (this.state.selectedBooks.includes(parseInt(event.target.parentElement.id))) {
      // we need to remove that id from our selectedBooks array
      this.setState({
        isExpanded: false,
        selectedBooks: this.state.selectedBooks.filter(id => id !== parseInt(event.target.parentElement.id))
      })
    } else {
      // add the id to the selectedBooks array
      this.setState({
        isExpanded: !this.state.selectedBooks.includes(parseInt(event.target.parentElement.id)),
        selectedBooks: [...this.state.selectedBooks, parseInt(event.target.parentElement.id)]
      })
    }
  }

  render () {
    console.log(this.state)

    return (
      <div className='page-container'>
        <div className='header'>
          React Freeshelf
        </div>
        {books.map(
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
            return (<div
              key={idx} id={idx}
              className='book-container'
            >
              <h1>{title}</h1>
              <h3>{author}</h3>
              <a href={url}>{url}</a>
              <p>{shortDescription}</p>
              <button onClick={(event) => this.handleClick(event)}>
                {this.state.isExpanded && this.state.selectedBooks.includes(idx) ? 'less information' : 'more information'}
              </button>

              {this.state.selectedBooks.includes(idx) && (<div className='book-details'>
                <p>
                                 Publisher:{' '}
                  {publisher === null ? <em>Info not available</em> : publisher}
                </p>
                <p>
                  Publication date:{' '}
                  {publicationDate === null ? (<em>Info not available</em>) : (publicationDate)}
                </p>
                <p>Full description: {detailedDescription}</p>
              </div>)}
              <div className='image'>
                <img onError={(event) => event.target.setAttribute('src', './logo512.png')} src={coverImageUrl} alt='react' />
              </div>
                    </div>)
          }
        )}
        <div className='footer'>
          © Aaron O'Brien
        </div>
      </div>
    )
  }
}

export default App
