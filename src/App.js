import { useState } from 'react';
import React from "react";

import { Classes } from './components/classes/classes';
import { Form as FormFunc } from './components/func/func';
import { Message } from './components/Message';
import style from './index.module.css';

export const App = () => {
  const [toggles, setToggle] = useState(false);
  const [toggleFormClass, setToggleFormClass] = useState(false);

  //const [arr] = useState([{id:1, value:1},{id:2, value:2},{id:3, value:3},{id:4, value:4},{id:5, value:5},{id:6, value:6}]);
  const [arr] = useState([1,2,3,4,5,6]);

  return (
    <React.Fragment>

      <button onClick={() => setToggleFormClass(!toggleFormClass)}>
        {toggleFormClass ? 'hide FORM class' : 'show FORM class'}
      </button>
      {toggleFormClass && <Classes name="my Form" />}

      <hr />
      <button onClick={() => setToggle(!toggles)}>
        {toggles ? 'hide FORM function' : 'show FORM function'}
      </button>
      {toggles && <FormFunc name="javascript_HOME" />}
      <hr />
      <ul className={style.background}>
        {arr.map(item => <li key={item}>{item}</li>)}
      </ul>
      <hr />
      <Message mes="получено из App" />
    </React.Fragment>
  );
};
