import './App.css';
import {Component} from "react";
import CardList from "./components/card-list/card-list.component";
import SearchBox from "./components/search-box/search-box.component";

class App extends Component {
    constructor() {
        super()
        this.state = {
            monstersArr: [],
            searchField: '',
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

    onSearchChange = (event) => {
        this.setState(() => {
            return {
                searchField: event.target.value
            }
        })
    }

    render() {
        const { monstersArr, searchField } = this.state;
        const { onSearchChange } = this
        const filteredMonsters = monstersArr.filter(monster => monster.name.toLowerCase().includes(searchField.toLowerCase()))

        return (
            <div className="App">
                <h1 className="app-title">Monsters Rolodex</h1>
               <SearchBox
                onSearchChange={onSearchChange}
                placeholder="Seach monsters..."
               />
                <CardList monsters={filteredMonsters}/>
            </div>
        );
    }
}

export default App;
