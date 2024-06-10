import {Component} from "react";
import './searchbox.style.css'
class SearchBox extends Component {
    render(){
        const { onSearchChange, placeholder } = this.props
        return <div>
            <input
                className='search-box'
                type="search"
                placeholder={placeholder}
                onChange={onSearchChange}
            />
        </div>
    }
}

export default SearchBox