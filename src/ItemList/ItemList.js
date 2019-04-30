import React from 'react';
import './ItemList.css';

const ItemList = (props) => {
    return (
        <div className='item-style'>
            <div>
                <div onClick={ () => props.itemlistClick('Item Line') }>{ props.itemProp }</div>
                <i onClick={ () => props.itemlistClick('Trash Icon') } className="fas fa-trash"></i>
            </div>
        </div>
    );
}

export default ItemList;