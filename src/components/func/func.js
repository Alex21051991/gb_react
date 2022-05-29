import { useState } from 'react';

import style from './form.module.css'
import React from "react";

export const Form = (props) => {
  const [count, setCount] = useState(0);

  const handleClick = () => {
    setCount(count + 1);
  }
  return (
    <>
      <div>this func - FUNCTION</div>
      <p className={style.background}>Счетчик через функцию: {count}</p>
      <button onClick={handleClick}>click</button>
      <p style={{ backgroundColor: 'green' }}>Name: {props.name}</p>
    </>
  );
};