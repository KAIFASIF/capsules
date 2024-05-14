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
  packingItem: string,
  rowIndex: number,
  strengthsArray: any,
  setStrengthsArray: any,
  packingArray: any,
  setPackingArray: any
) => {
  const newStrengthVal = [...strengthsArray];
  newStrengthVal[rowIndex] = strengthItem;
  setStrengthsArray(newStrengthVal);
  handlePackingIndex(packingItem, rowIndex, packingArray, setPackingArray);
};
