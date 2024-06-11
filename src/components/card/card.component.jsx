import './card.style.css'
const Card = ({monsters}) => {
        const {id, name, email} = monsters
        return <div className="card-container">
            <img src={`https://robohash.org/${id}?size=180x180`} alt={`monster ${name}`}/>
            <h2>{name}</h2>
            <p>{email}</p>
        </div>
}

export default Card