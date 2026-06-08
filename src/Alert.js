export function Alert({ type, heading, children, closable }) {
  let visible = false;

  if (!visible) {
    return <div> hello component code </div>;
  }

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
