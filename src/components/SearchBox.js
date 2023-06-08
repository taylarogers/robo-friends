import React from 'react';
import './SearchBox.css';

const SearchBox = ({ searchChange }) => {
    return (
        <div className="pa2">
            <input 
                className="pa3 tc ba b--black-20 bg-black-20 br3"
                type="search" 
                placeholder="Search robots..." 
                onChange={searchChange}
            />
        </div>
    );
}

export default SearchBox;