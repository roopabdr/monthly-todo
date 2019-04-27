import React from 'react';
import './ItemList.css';

const ItemList = (props) => {
    return (
        <div>
            <input type="text" className='input' placeholder='Add Item to List..' onChange={ props.change.bind(this) } />
            <button className='button' onClick={ props.add }>Add</button>
        </div>
    );
}

export default ItemList;