import { Component, React } from "react";
import "./SearchBar.css"

class SearchBar extends Component {
    state = {  } 
    render() { 
        return (
        <section className="searchBarSection">
            <input className="searchBarSectionInput" placeholder="Zoek iets..." type="text"/>
        </section>
        );
    }
}
 
export default SearchBar;