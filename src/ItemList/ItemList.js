import React from 'react';
import './ItemList.css';

const ItemList = (props) => {
    return (
        <div className='item-style'>
            <div>
                <div onClick={ () => props.itemlistClick(`itemline${props.id}`, (props.id) ) } className={ props.strike ? 'strikeout' : null }>
                    { props.itemProp }
                </div>
                <i onClick={ () => props.itemlistClick(`trash${props.id[props.id]}`, (props.id) ) } className="fas fa-trash"></i>
            </div>
        </div>
    );
}

export default ItemList;