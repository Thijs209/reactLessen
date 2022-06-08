import React from "react";

const ImgCard = (props) => {
    return (
        <section className="imgCardSection"> 
            <figure className="imgCardSectionFigure">
                <img className="imgCardSectionImg" src="props.imgSrc"></img>
                <figcaption className="imgCardSectionFigCaption">
                    {props.name || "Geen naam beschikbaar"} <br/>
                    {props.number || "Geen nummer beschikbaar"}
                </figcaption>
            </figure>
        </section>
    );
}

export default ImgCard;