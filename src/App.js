import {React, Component} from "react";
import "./App.css"
import SearchBar from "./SearchBar";
import ImgCard from "./ImgCard";

class App extends Component {
    state = { name: "hallo"}; 

    render() { 
        return(
            <article>
                <SearchBar/>   
                <ImgCard name={this.state.name}/>
            </article>
        );
    }
}
 
export default App;
