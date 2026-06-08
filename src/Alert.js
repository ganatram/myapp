export function Alert(Obj) {
  /* Obj = {
  type: "information",
  heading: "success",
  children:'everything is really good'
} */

  return (
    <>
      <div> {Obj.type} </div>
      <div> {Obj.heading} </div>
      <div> {Obj.children} </div>
    </>
  );
}
