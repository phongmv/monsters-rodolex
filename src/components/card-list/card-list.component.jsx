import {Component} from "react";
import Card from "../card/card.component";
import './card.style.css'
class CardList extends Component{
    render() {
        const monsters = this.props.monsters
        return <div className="card-list-container">
            { monsters.map(monsters => <Card key={monsters.id} monsters={monsters}/>) }
        </div>
    }
}

export default CardList