import React from 'react';
import './ItemList.css';

const ItemList = (props) => {
    return (
        <div className='item-style'>
            <div>
                <span>{ props.itemProp }</span>
                <i class="fas fa-trash"></i>
            </div>
        </div>
    );
}

export default ItemList;