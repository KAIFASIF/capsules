import { useState } from "react";
import { handleStrengthIndex } from "./utils";

const Forms = ({ allProps }: any) => {
  const {
    ele,
    formsArray,
    setFormsArray,
    strengthsArray,
    setStrengthsArray,
    packingArray,
    setPackingArray,
    rowIndex,
  } = allProps;

  const [showMore, setShowMore] = useState<boolean>(false);

  const handleForm = (formItem: string) => {
    const newString = [...formsArray];
    newString[rowIndex] = formItem;
    setFormsArray(newString);

    const StrengthVal = Object.keys(ele?.salt_forms_json[formItem])[0];
    const packingVal = Object.keys(
      ele?.salt_forms_json[formItem][StrengthVal]
    )[0];

    handleStrengthIndex(
      StrengthVal,
      packingVal,
      rowIndex,
      strengthsArray,
      setStrengthsArray,
      packingArray,
      setPackingArray
    );
  };

  const renderForm = () => {
    const availableForm = ele?.available_forms && ele?.available_forms;
    let renderedForm = availableForm.slice(0, 2);
    if (showMore) {
      renderedForm = availableForm;
    }
    return (
      renderedForm &&
      renderedForm.length > 0 &&
      renderedForm.map((item: any, index: number) => (
        <p
          key={index}
          className={`border-2 px-2  rounded  justify-center cursor-pointer
        ${
          formsArray[rowIndex] === item
            ? "border-emerald-950"
            : "border-gray-300"
        }`}
          onClick={() => handleForm(item)}
        >
          {item}
        </p>
      ))
    );
  };

  return (
    <div className="w-full">
      <div className="w-full flex">
        <p className="w-[18%]"> Farm:</p>
        <div className="w-[82%] flex flex-wrap gap-2">
          {renderForm()}

          {ele?.available_forms && ele?.available_forms.length > 4 && (
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

export default Forms;
