import React, { useState } from 'react';
import PropTypes from 'prop-types';

export const AddCategory = ({setCategories}) => {
    const [inputValue, setinputValue] = useState("")

    const handleInputValue =(e) =>{
        setinputValue(e.target.value)
    }
    const handleSubmit=(e)=>{
        e.preventDefault();
        if(inputValue.trim().length > 1){
           setCategories(cats =>[inputValue, ...cats])
            console.log('Submit hecho');
        }
        setinputValue('');
    }

    return (
        <form onSubmit={handleSubmit}>
            <h2>AddCategory</h2>
            <h2>{inputValue}</h2>
            <input 
                type="text"
                value={inputValue}
                onChange={handleInputValue}
             />
        </form>
    )
}

AddCategory.propTypes = {
    setCategories: PropTypes.func.isRequired
}