import React from 'react';
import './ItemList.css';

const ItemList = (props) => {
    return (
        <div className='item-style'>
            <span>{ props.itemProp }</span>
        </div>
    );
}

export default ItemList;