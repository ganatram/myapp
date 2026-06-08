export function Alert({ type, heading, children, closable }) {
  let visible = false;

  if (!visible) {
    return null;
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
