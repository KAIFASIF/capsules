import React from "react";
import Strength from "./Strength";
import Forms from "./Forms";
import Packing from "./Packing";

const Row = ({ allProps }: any) => {
  const { ele, formsArray, strengthsArray, packingArray, rowIndex } = allProps;

  let lowestValue = 0;

  const strengthElement = strengthsArray[rowIndex];
  const formElement = formsArray[rowIndex];
  const packingObj = ele?.salt_forms_json;

  const obj =
    packingObj &&
    formElement &&
    strengthElement &&
    packingObj[formElement][strengthElement];

  const mapArray =
    obj && packingArray && rowIndex && obj[packingArray[rowIndex]];

  if (mapArray) {
    const lowestValueArray: any = Object.values(mapArray).filter(
      (ele: any) => ele !== null
    );
    if (lowestValueArray && lowestValueArray.length > 0) {
      lowestValue = Math.min(...lowestValueArray);
    }
  }

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
        <p className="font-semibold text-indigo-950 w-[60%] text-center text-sm bg-gray-100 p-2 ">
          {lowestValue || "No stores selling this product near you"}
        </p>
      </div>
    </div>
  );
};

export default React.memo(Row);
