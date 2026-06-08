import { useState } from 'react';

export function Alert({ type, heading, children, closable }) {
  const [visible, setVisible] = useState(true); // [state,setterMethod()]

  /*  if (!visible) {
    return null;
  } */

  return (
    <>
      <div>
        <span>{type === 'warning' ? '⚠️' : 'ℹ️'}</span>
        <span>{heading}</span>
      </div>
      {closable && <button>❌</button>}
      <div>{children}</div>
    </>
  );
}
