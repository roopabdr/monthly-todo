import React from 'react';
import './ItemList.css';

const ItemList = (props) => {
    return (
        <div className='item-style'>
            <div>
                <p>{ props.itemProp }</p>
                <i class="fas fa-trash"></i>
            </div>
        </div>
    );
}

export default ItemList;