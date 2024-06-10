import './App.css';
import {Component} from "react";

class App extends Component {
    constructor() {
        super()
        this.state = {
            monstersArr: [],
            searchField: ''
        }
    };

    componentDidMount() {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(res => res.json())
            .then(users => this.setState(() => {
                return {
                    monstersArr: [...users]
                }
            }))
    }

    render() {

        const filteredMonsters = this.state.monstersArr
            .filter(monster => monster.name.toLowerCase().includes(this.state.searchField.toLowerCase()))

        return (
            <div className="App">
                <input
                    className='search-box'
                    type="search"
                    placeholder="Search monsters..."
                    onChange={(event) => {
                        this.setState(() => {
                            return {
                                searchField: event.target.value
                            }
                        })
                    }}
                />
                {filteredMonsters.map((monsters) => {
                    return <h1 key={monsters.id}>{monsters.name}</h1>
                })}
            </div>
        );
    }
}

export default App;
