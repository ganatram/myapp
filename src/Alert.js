import { useState } from 'react';

export function Alert({ type, heading, children, closable }) {
  const [visible, setVisible] = useState(true); // [state,setterMethod()] // visible = true

  // by default state entities are 'constants'
  //visible = false;

  // setterMethod should not be invoked unconditionally inside a component
  //setVisible(false); // visible = false - infinite loop - callstack will exceed

  if (!visible) {
    return null;
  }

  function handleCloseClick() {
    console.log('callback function invoked');
  }

  return (
    <>
      <div>
        <span>{type === 'warning' ? '⚠️' : 'ℹ️'}</span>
        <span>{heading}</span>
      </div>
      {closable && <button onClick={handleCloseClick}>❌</button>}
      <div>{children}</div>
    </>
  );
}
