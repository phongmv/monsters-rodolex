import Card from "../card/card.component";
import './card.style.css'

const CardList = ({monsters}) => {
    return <div className="card-list-container">
        {monsters.map(monsters => <Card key={monsters.id} monsters={monsters}/>)}
    </div>
}

export default CardList