import React from 'react'

class SearchBar extends React.Component{

    state = { term: '', displayResult:null }

    handleSubmit = (e) =>{
        e.preventDefault()
        this.props.onSubmit(this.state.term)
        this.setState({displayResult:'1'})
    }

    render(){
        return(
            <div className="wrap-searchbar">
                <form onSubmit={this.handleSubmit}>
                    <label>Search image</label>
                    <input 
                    type="text" 
                    value={this.state.term}
                    onChange={e=>this.setState({term: e.target.value})}/>
                    <button>Search</button>
                </form>
                <br />
                {
                    this.state.displayResult === null ? '': `Your search ${this.state.term} returns ${this.props.imagesLength}`
                }
                
            </div>
        )
    }
}


export default SearchBar;