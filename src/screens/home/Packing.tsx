import { useState } from "react";
import { handlePackingIndex, handlePricingIndex } from "./utils";

const Packing = ({ allProps }: any) => {
  const {
    ele,
    formsArray,
    strengthsArray,
    packingArray,
    setPackingArray,
    pricingArray,
    setPricingArray,
    rowIndex,
  } = allProps;

  const strengthElement = strengthsArray[rowIndex];
  const formElement = formsArray[rowIndex];
  const packingObj = ele?.salt_forms_json;
  const [showMore, setShowMore] = useState<boolean>(false);

  const obj =
    packingObj &&
    formElement &&
    strengthElement &&
    packingObj[formElement][strengthElement];

  const handlePacking = (item: string) => {
    handlePackingIndex(item, rowIndex, packingArray, setPackingArray);
    handlePricingIndex(
      ele,
      formElement,
      strengthElement,
      item,
      rowIndex,
      pricingArray,
      setPricingArray
    );
  };

  const renderPacking = () => {
    let renderedPacking = obj && Object.keys(obj).slice(0, 4);
    if (showMore) {
      renderedPacking = obj && Object.keys(obj);
    }
    return (
      renderedPacking &&
      renderedPacking.map((item: any, index: number) => (
        <p
          className={`border-2 px-2 rounded cursor-pointer
                ${pricingArray[rowIndex] ? "border-solid" : "border-dashed"} 
                ${
                  packingArray[rowIndex] === item
                    ? "border-emerald-950"
                    : "border-gray-300"
                }`}
          key={index}
          onClick={() => handlePacking(item)}
        >
          {item}
        </p>
      ))
    );
  };

  return (
    <div className="w-full">
      <div className="w-full flex">
        <p className="w-[18%]"> Packing:</p>
        <div className="w-[82%] flex flex-wrap gap-x-2">
          {renderPacking()}
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

export default Packing;
