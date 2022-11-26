import React, { useState } from "react";

export const AddCategory = ({onNewCategory}) => {
  const [inputValue, setInputValue] = useState("");

  const onInputChange = (e) => {
    setInputValue(e.target.value)
  }

  const onSubmit = (e) => {
    e.preventDefault();
    const newInputValue = inputValue.trim();
    if(newInputValue.length <= 1 ) return;
    //setCategories(categories => [inputValue, ...categories]);
    onNewCategory(newInputValue);
    setInputValue('');
  }

  return (
    <>
        <form onSubmit={onSubmit}>
            <input type="text" placeholder="Buscar GIFs" value={inputValue} onChange={onInputChange}></input>
        </form>
    </>
  );
};
