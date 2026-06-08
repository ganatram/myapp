export function Alert({ type, heading, children, closable }) {
  return (
    <>
      <div> {type} </div>
      <div> {heading} </div>
      <div> {children} </div>
      {closable && <button> Close </button>}
    </>
  );
}
