import './App.css';
import CardList from "./components/card-list/card-list.component";
import SearchBox from "./components/search-box/search-box.component";
import { useEffect, useState } from "react";

const App = () => {
    const [searchField, setSearchField] = useState('')
    const [monsters, setMonsters] = useState([])
    const [filteredMonsters, setFilteredMonster] = useState([])

    console.log("rendered!")

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(res => res.json())
            .then(users => setMonsters(users))
    }, []);

    useEffect(() => {
        const filteredMonsters = monsters.filter(monster => monster.name.toLowerCase().includes(searchField.toLowerCase()))
        setFilteredMonster(filteredMonsters)
    }, [monsters, searchField]);

    const onSearchChange = (event) => {
        const searchingField = event.target.value
        setSearchField(searchingField)
    }


    return (
            <div className="App">
                <h1 className="app-title">Monsters Rolodex</h1>
               <SearchBox
                onSearchChange={onSearchChange}
                placeholder="Search monsters..."
               />
                <CardList monsters={filteredMonsters}/>
            </div>
        );
}

// class App extends Component {
//     constructor() {
//         super()
//         this.state = {
//             monstersArr: [],
//             searchField: '',
//         }
//     };
//
//     componentDidMount() {
//         fetch('https://jsonplaceholder.typicode.com/users')
//             .then(res => res.json())
//             .then(users => this.setState(() => {
//                 return {
//                     monstersArr: [...users]
//                 }
//             }))
//     }
//
//     onSearchChange = (event) => {
//         this.setState(() => {
//             return {
//                 searchField: event.target.value
//             }
//         })
//     }
//
//     render() {
//         const { monstersArr, searchField } = this.state;
//         const { onSearchChange } = this
//         const filteredMonsters = monstersArr.filter(monster => monster.name.toLowerCase().includes(searchField.toLowerCase()))
//
//         return (
//             <div className="App">
//                 <h1 className="app-title">Monsters Rolodex</h1>
//                <SearchBox
//                 onSearchChange={onSearchChange}
//                 placeholder="Search monsters..."
//                />
//                 <CardList monsters={filteredMonsters}/>
//             </div>
//         );
//     }
// }
//
export default App;
