import React, { Component } from 'react';
import '../App.css';
import unsplash from '../api/unsplash';
import axios from 'axios';
import SearchBar from './SeachBar';
import ImageList from './ImageList';

class App extends Component{

    state  = { images: [] }

    onSearchSubmit = async term =>{
        const response = await axios.get('https://api.unsplash.com/search/photos' , {
            params:{ query:term },
            headers:{
                Authorization:'Client-ID 79IzEnOZ7J9U6Fw6psMxcBUWHxUguIjlv3E-kuP2LEY'
            }
        });
        this.setState({images:response.data.results})
    }

    render(){
        return (
            <div className="container">
                <SearchBar onSubmit={this.onSearchSubmit} 
                imagesLength={this.state.images.length}/>
                <ImageList images={this.state.images}/>
            </div>
        )
    };
}

export default App;
