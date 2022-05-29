
import style from './message.module.css'
import React from "react";

export const Message = (props) => {
  return (
    <>
      <div>this Message - component</div>
      <p className={style.background}>Message: {props.mes}</p>
    </>
  );
};