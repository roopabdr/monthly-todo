import React from 'react';
import './ItemList.css';

const ItemList = (props) => {
    return (
        <div className='item-style'>
            <div>
                <div onClick={ () => props.itemlistClick(`itemline${props.id[props.id.length - 1]}`) }>{ props.itemProp }</div>
                <i onClick={ () => props.itemlistClick(`trash${props.id[props.id.length - 1]}`) } className="fas fa-trash"></i>
            </div>
        </div>
    );
}

export default ItemList;