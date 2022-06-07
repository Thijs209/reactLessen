import {React} from "react";

class ImgCard extends Component {
    state = {  } 
    render() { 
        return (
            <section className="imgCardSection"> 
                <figure className="imgCardSectionFigure">
                    <img className="imgCardSectionImg"></img>
                    <figcaption className="imgCardSectionFigCaption">
                        {props.name || "Geen naam beschikbaar"}
                    </figcaption>
                </figure>
            </section>
        );
    }
}

export default ImgCard;