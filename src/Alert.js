export function Alert({ type, heading, children, closable }) {
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
