export const handleFlatMap = (priceObj: any) => {
  return Object.values(priceObj)
    .filter((ele: any) => ele !== null)
    .flatMap((ele: any) => ele?.map((item: any) => item?.selling_price));
};

export const handleLowestPricing = (arr: any) => {
  return arr.reduce(
    (prev: number, cur: number) => (cur < prev ? cur : prev),
    arr[0]
  );
};

export const handlePricingIndex = (
  ele: any,
  formElement: any,
  strengthElement: any,
  packingItem: string,
  index: number,
  pricingArray: any,
  setPricingArray: any
) => {
  const priceObj =
    ele?.salt_forms_json[formElement][strengthElement][packingItem];

  const lowestPriceArray = handleFlatMap(priceObj);
  const lowestPrice = handleLowestPricing(lowestPriceArray);
  const newPricingObject = [...pricingArray];
  newPricingObject[index] = lowestPrice;
  setPricingArray(newPricingObject);
};

export const handlePackingIndex = (
  packingItem: string,
  index: number,
  packingArray: any,
  setPackingArray: any
) => {
  const newPackingVal = [...packingArray];
  newPackingVal[index] = packingItem;
  setPackingArray(newPackingVal);
};

export const handleStrengthIndex = (
  strengthItem: string,
  rowIndex: number,
  strengthsArray: any,
  setStrengthsArray: any
) => {
  const newStrengthVal = [...strengthsArray];
  newStrengthVal[rowIndex] = strengthItem;
  setStrengthsArray(newStrengthVal);
};
