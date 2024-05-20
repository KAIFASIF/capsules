import { useState } from "react";

type filedType = {
  email: "" | string;
  mobile: "" | string;
};
const Currying = () => {
  const [field, setField] = useState({ email: "", mobile: "" });

  // const handleOnchange =(e: any) =>
  //   setField((prev: filedType) => ({ ...prev, email: e.target.value }));

  const handleOnchange = (field: keyof filedType) =>(e:any)=>
    setField((prev: filedType) => ({ ...prev, [field]: e.target.value }));

  const onCLickds = () => alert(JSON.stringify(field));

  return (
    <div className="flex flex-col justify-center items-center h-screen bg-red-400 gap-y-10">
   
      {/* <input onChange={handleOnchange} /> */}
      <input onChange={handleOnchange("mobile")} />
      {/* <input onChange={(e: any) => handleOnchange("mobile", e)} /> */}
      {/* <input onChange={(e: any) => handleOnchange("email", e)} />
      <input onChange={(e: any) => handleOnchange("mobile", e)} /> */}
      <br />
      <br />
      <br />
      <button onClick={onCLickds}>click</button>
    </div>
  );
};

export default Currying;
