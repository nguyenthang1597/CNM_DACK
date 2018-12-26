import React, { useState, useEffect } from 'react';
import './Interact.css'
import getName from '../../../API/getName'

import {
    faShare,
    faComment,
    faThumbsUp,
    faHeart,
    faGrinSquintTears,
    faSurprise,
    faAngry,
    faFrown,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Interact = ({
    reactions
}) => {
    let [tab, setTab] = useState(1);
    let [arrReaction, setArr] = useState([]);

    useEffect(()=> {
        let _arrReaction = [];
        for(let i =1;i<=6;i++) {
            let arr = reactions.filter(e => e.Reaction === i)
            _arrReaction = [..._arrReaction,arr];
            setArr(_arrReaction);
        }
    },)

    return (
        <div className='interact-container'>
            <div className='react-tab'>
                <div className={`tab like ${tab === 1 ? 'active' : null}`} onClick={() => setTab(1)}><FontAwesomeIcon icon={faThumbsUp} />  ({arrReaction[0] ? arrReaction[0].length : 0})</div>
                <div className={`tab love ${tab === 2 ? 'active' : null}`} onClick={() => setTab(2)}><FontAwesomeIcon icon={faHeart} /> ({arrReaction[1] ? arrReaction[1].length : 0})</div>
                <div className={`tab haha ${tab === 3 ? 'active' : null}`} onClick={() => setTab(3)}><FontAwesomeIcon icon={faGrinSquintTears} /> ({arrReaction[2] ? arrReaction[2].length : 0})</div>
                <div className={`tab haha ${tab === 4 ? 'active' : null}`} onClick={() => setTab(4)}><FontAwesomeIcon icon={faSurprise} /> ({arrReaction[3] ? arrReaction[3].length : 0})</div>
                <div className={`tab haha ${tab === 5 ? 'active' : null}`} onClick={() => setTab(5)}><FontAwesomeIcon icon={faFrown} /> ({arrReaction[4] ? arrReaction[4].length : 0})</div>
                <div className={`tab angry ${tab === 6 ? 'active' : null}`} onClick={() => setTab(6)}><FontAwesomeIcon icon={faAngry} /> ({arrReaction[5] ? arrReaction[5].length : 0})</div>
            </div>
            <div className='list-interact'>
                {reactions.filter(e => e.Reaction === tab).map((i, index) => <Item Address={i._id} key={index} />)}
            </div>
        </div>

    );
}

const Item = ({ Address }) => {

    let [name, setName] = useState('');

    useEffect(() => {
        getName(Address).then(res => setName(res.data.Name));
    }, [Address])

    return (
        <div className='item'>
            <div>{name}</div>
            <div>@{Address}</div>
        </div>
    );
}

export default Interact;