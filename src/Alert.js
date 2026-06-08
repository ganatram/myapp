export function Alert(Obj) {
  return (
    <>
      <div> {Obj.type} </div>
      <div> {Obj.heading} </div>
    </>
  );
}

/* Obj = {
  type: "information",
  heading: "success"
} */
