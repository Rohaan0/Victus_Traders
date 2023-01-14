import React, {useState} from 'react'
import {BsSearch} from "react-icons/bs"

const SearchBar = () => {
    const [search, setSearch] = useState("")

  return (
    <div className="search-bar">
    <BsSearch size="1.5em" color="#CC6600" />
    <input type="text" 
    placeHolder="Search for a Card" 
    value={search}  
    onChange={(e) => setSearch(e.target.value)} 
    className="card-input"
    />
    </div>
  )
}

export default SearchBar