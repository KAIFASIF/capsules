import React, { useState } from "react";
import { handleStrengthIndex } from "./utils";

const Strength = ({ allProps }: any) => {
  const {
    ele,
    formsArray,
    strengthsArray,
    setStrengthsArray,
    packingArray,
    setPackingArray,
    rowIndex,
  } = allProps;
  const salt_Json = ele?.salt_forms_json;
  const obj = salt_Json[formsArray[rowIndex]];
  const [showMore, setShowMore] = useState<boolean>(false);

  const handleStrengths = (strengthItem: string) => {
    const formItem = formsArray[rowIndex];

    const packingVal = Object.keys(
      ele?.salt_forms_json[formItem][strengthItem]
    )[0];

    handleStrengthIndex(
      strengthItem,
      packingVal,
      rowIndex,
      strengthsArray,
      setStrengthsArray,
      packingArray,
      setPackingArray
    );
  };

  const renderStrength = () => {
    let renderedStrengths = obj && Object.keys(obj).slice(0, 4);
    if (showMore) {
      renderedStrengths = obj && Object.keys(obj);
    }
    return (
      renderedStrengths &&
      renderedStrengths.map((item: any, index: number) => (
        <p
          key={index}
          className={`border-2 px-2 rounded cursor-pointer 
          ${
            strengthsArray[rowIndex] === item
              ? "border-emerald-950"
              : "border-gray-300"
          }                
          
          `}
          onClick={() => handleStrengths(item)}
        >
          {item}
        </p>
      ))
    );
  };

  return (
    <div className="w-full py-2">
      <div className="w-full flex">
        <p className="w-[18%] mt-1"> Strength:</p>
        <div className="w-[60%] flex flex-wrap gap-2 ">
          {renderStrength()}
          {obj && Object.keys(obj).length > 4 && (
            <p
              onClick={() => setShowMore((prev: boolean) => !prev)}
              className="font-semibold text-blue-600 cursor-pointer"
            >
              {!showMore ? "more..." : "hide"}{" "}
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default React.memo(Strength);
