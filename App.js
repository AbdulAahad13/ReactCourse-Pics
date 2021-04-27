import React from 'react'
import SearchBar from './SearchBar'
import axios from 'axios';
class App extends React.Component {
    onSearchSubmit(term) {
        axios.get('https://api.unsplash.com/search/photos', {
            headers: {
                Authorization: 'Client-ID ry2GG18_4d9EJr8rmHD3e-i8KZm3BMkmGglrwxj-KcA '
            }
        })
    }


    render() {
        return (
            <div className='ui container' style={{ marginTop: '10px' }}>
                <SearchBa r onSubmit={this.onSearchSubmit} />
            </div>
    
    }
}

export default App