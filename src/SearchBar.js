import React from "react";
import "./SearchBar.css"

class SearchBar extends React.Component {
    state = {searchTerm: ""} 

    onSearch = (event) => {
        this.setState({searchTerm: event.value})
    }

    onSubmit = (event) =>{
        event.preventDefault()
        this.props.onSubmit(this.state.searchTerm)
    }

    render() { 
        return (
        <section className="searchBarSection">
            <form onSubmit={this.onSubmit}>
                <input  onChange={this.onSearch} className="searchBarSectionInput" placeholder="Zoek iets..." type="text" value={this.state.searchTerm}/>
            </form>
        </section>
        );
    }
}
 
export default SearchBar;