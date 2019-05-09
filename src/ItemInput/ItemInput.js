import React from 'react';
import './ItemInput.css';

const ItemInput = (props) => {
    return (
        <div>
            <input 
                type="text" 
                className='input' 
                placeholder='Add Item to List..' 
                onChange={ (event) => props.change(event.target.value) } 
                onKeyPress={ (event) => event.key === 'Enter'? props.keyPress() : console.log('god knows') }
            />
            <button className='button' onClick={ props.add }>Add</button>
        </div>
    );
}

export default ItemInput;