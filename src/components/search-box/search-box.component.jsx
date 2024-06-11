import './searchbox.style.css'
const SearchBox = ({ onSearchChange, placeholder }) => {
        return <div>
            <input
                className='search-box'
                type="search"
                placeholder={placeholder}
                onChange={onSearchChange}
            />
        </div>
}

export default SearchBox