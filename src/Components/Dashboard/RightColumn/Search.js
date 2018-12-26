import React, {useState} from 'react';
import '../Dashboard.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faSearch} from '@fortawesome/free-solid-svg-icons';

const Search = ({
    handleBtnFindClick
}) => {

    let [txtFind, setTxtFind] = useState('')

    return (
        <div className="search-follow">
            <input onChange={(e) => setTxtFind(e.target.value)} placeholder="Tìm Kiếm..." />
            <FontAwesomeIcon onClick={() =>handleBtnFindClick(txtFind)} icon={faSearch} />
        </div>
    )
}

export default Search;