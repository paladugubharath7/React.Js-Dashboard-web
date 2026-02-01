import { useEffect, useState } from "react";

export const APP = () => {
  const [name, setName] = useState("test")
  //mounting
  useEffect(() => {
    alert("api called")
    // api logic
  }, [name]) // dependency array

  return (
    <div className="rootDiv">
      <h1>Mounted / Render App</h1>
      <button onClick={setName('clicked')}>Click</button>
    </div>
  );
};
