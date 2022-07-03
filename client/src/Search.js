import React from "react";


function Search ( { handleSearch, search } ) {
    

return (
    <div className="searchbar">
        <label htmlFor="search">Search by Restaurant Name: </label>
        <input type="text" id="search" placeholder="Enter Restaurant Here" value={search} onChange={handleSearch}/>
    </div>
)
}

export default Search;