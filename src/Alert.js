export function Alert({ type, heading, children }) {
  return (
    <>
      <div> {type} </div>
      <div> {heading} </div>
      <div> {children} </div>
    </>
  );
}
