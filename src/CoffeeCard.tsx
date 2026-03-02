import type { JSX } from "react";
import type { Card } from "./JsonExtractor";
import './CoffeeCard.scss'
import star from './assets/Star.svg'
import starFill from './assets/Star_fill.svg'
interface CoffeeProps {
    card: Card
}

const CoffeeCard = ({ card }: CoffeeProps): JSX.Element => {

    const {name, image, price, rating, votes, popular, available } = card;

    return <div className="CardContainer">
        {popular &&(<span className="popular">Popular</span>)}
        <img className='CardImage' src={image} alt="Immagine del caffè" />
        <div className='NameAndPrice'>
            <p>{name}</p>
            <span className='Price'>{price}</span>
        </div>
        <div className="ratingsContainer">
            <img src={votes > 0 ? starFill : star} className='star'></img>
            <span className="rate">{rating}</span>
            <span className="votes">{`(${votes} votes)`}</span>
           {!available && <span className="soldOut">Sold out</span>}
        </div>
    </div>


}
export default CoffeeCard;