import React from "react";
import "./App.css"
import SearchBar from "./SearchBar";
import ImgCard from "./ImgCard";

class App extends React.Component {
    state = { name: "", imgSrc: "", number: "", list: []}; 

    onSearch = (searchTerm) =>{
        console.log("hallo")
    }

    onSubmit = () =>{
        this.props.onSubmit(this.state.searchTerm)
    }

    render() { 
        return(
            <article>
                <SearchBar onSubmit = {this.onSubmit} onSearch={this.onSearch} />   
                <ImgCard name={this.state.name} number={this.state.number} imgSrc={this.state.imgSrc} />
            </article>
        );
    }
}
 
export default App;
