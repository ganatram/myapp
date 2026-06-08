export function Alert({ type, heading, children, closable }) {
  return (
    <>
      <div>
        <span>{type === 'warning' ? '⚠️' : 'ℹ️'}</span>
        <span>{heading}</span>
      </div>
      <div>{children}</div>
    </>
  );
}
