import React, { useState } from "react";
import Strength from "./Strength";
import Forms from "./Forms";
import Packing from "./Packing";

const Row = ({ allProps }: any) => {
  const {
    ele,
    formsArray,
    strengthsArray,
    packingArray,
    pricingArray,
    rowIndex,
  } = allProps;

  function firstKeyAndValue(obj:any) {
    for (let key in obj) {
      return [key, obj[key]];
    }
  }
  
  function first(obj:any) {
    for (let key in obj) {
      return [key, obj[key]];
    }
  }
  
  const [firstKey, firstValue] = firstKeyAndValue(ele?.salt_forms_json);
  const [firstStrgenth, setFitshe] = firstKeyAndValue(ele?.salt_forms_json[firstKey]);

  // const [firstKey, firstValue] = firstKeyAndValue(ele?.salt_forms_json);
  // const [firstKey, firstValue] = firstKeyAndValue(ele?.salt_forms_json);


  console.log(firstStrgenth)
  // Object.entries(ele?.salt_forms_json[firstKey])?.map(([key, val]:any)=>{
  //   console.log(key)
  // })
  // console.log(ele?.salt_forms_json)
  return (
    <div className="w-full flex   p-4 rounded  justify-center gap-4 shadow bg-gradient-to-r from-white from-10%  to-100% to-cyan-100">
      <div className="w-1/3">
        <Forms allProps={allProps} />
        <Strength allProps={allProps} />
        <Packing allProps={allProps} />
      </div>
      <div className="w-1/3 flex flex-col   justify-center items-center">
        <p className="text-xl font-semibold">{ele?.salt}</p>
        <p className="font-medium text-indigo-950">
          {formsArray[rowIndex]} | {strengthsArray[rowIndex]} |{" "}
          {packingArray[rowIndex]}
        </p>
      </div>
      <div className="w-1/4 flex flex-col   justify-center items-center">
        {pricingArray[rowIndex] ? (
          <p className="font-semibold text-indigo-950 w-[60%] text-center text-xl  p-2 ">
            From Rs {pricingArray[rowIndex]}
          </p>
        ) : (
          <p className="font-semibold text-indigo-950 w-[60%] text-center text-sm bg-gray-100 p-2 ">
            No stores selling this product near you
          </p>
        )}
      </div>
    </div>
  );
};

export default React.memo(Row);
// import React from "react";
// import Strength from "./Strength";
// import Forms from "./Forms";
// import Packing from "./Packing";

// const Row = ({ allProps }: any) => {
//   const {
//     ele,
//     formsArray,
//     strengthsArray,
//     packingArray,
//     pricingArray,
//     rowIndex,
//   } = allProps;

//   return (
//     <div className="w-full flex   p-4 rounded  justify-center gap-4 shadow bg-gradient-to-r from-white from-10%  to-100% to-cyan-100">
//       <div className="w-1/3">
//         <Forms allProps={allProps} />
//         <Strength allProps={allProps} />
//         <Packing allProps={allProps} />
//       </div>
//       <div className="w-1/3 flex flex-col   justify-center items-center">
//         <p className="text-xl font-semibold">{ele?.salt}</p>
//         <p className="font-medium text-indigo-950">
//           {formsArray[rowIndex]} | {strengthsArray[rowIndex]} |{" "}
//           {packingArray[rowIndex]}
//         </p>
//       </div>
//       <div className="w-1/4 flex flex-col   justify-center items-center">
//         {pricingArray[rowIndex] ? (
//           <p className="font-semibold text-indigo-950 w-[60%] text-center text-xl  p-2 ">
//             From Rs {pricingArray[rowIndex]}
//           </p>
//         ) : (
//           <p className="font-semibold text-indigo-950 w-[60%] text-center text-sm bg-gray-100 p-2 ">
//             No stores selling this product near you
//           </p>
//         )}
//       </div>
//     </div>
//   );
// };

// export default React.memo(Row);
