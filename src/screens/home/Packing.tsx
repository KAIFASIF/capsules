import { handlePackingIndex } from "./utils";

const Packing = ({ allProps }: any) => {
  const {
    ele,
    formsArray,
    strengthsArray,
    packingArray,
    setPackingArray,
    rowIndex,
  } = allProps;

  const strengthElement = strengthsArray[rowIndex];
  const formElement = formsArray[rowIndex];
  const packingObj = ele?.salt_forms_json;

  const obj =
    packingObj &&
    formElement &&
    strengthElement &&
    packingObj[formElement][strengthElement];

  const handlePacking = (item: string) => {
    handlePackingIndex(item, rowIndex, packingArray, setPackingArray);
  };

  return (
    <div className="w-full">
      <div className="w-full flex">
        <p className="w-[18%]"> Packing:</p>
        <div className="w-[82%] flex flex-wrap gap-x-2">
          {obj &&
            Object.keys(obj)?.map((item: any, index: number) => (
              <p
                className={`border-2 px-2 rounded cursor-pointer ${
                  packingArray[rowIndex] === item
                    ? "border-emerald-950"
                    : "border-gray-300"
                }`}
                key={index}
                onClick={() => handlePacking(item)}
              >
                {item}
              </p>
            ))}
        </div>
      </div>
    </div>
  );
};

export default Packing;
