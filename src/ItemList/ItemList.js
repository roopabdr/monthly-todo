import React from 'react';
import './ItemList.css';

const ItemList = () => {
    return (
        <div>
            <input type="text" className='input' placeholder='Add Item to List..' />
            <button className='button'>Add</button>
        </div>
    );
}

export default ItemList;