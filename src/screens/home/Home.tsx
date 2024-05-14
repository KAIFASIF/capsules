import axios from "axios";
import { useState } from "react";
import Row from "./Row";
import { IoSearch } from "react-icons/io5";

const Home = () => {
  const [search, setSearch] = useState("");
  const [data, setData] = useState([]);
  const [formsArray, setFormsArray] = useState<string[] | []>([]);
  const [strengthsArray, setStrengthsArray] = useState<any>([]);
  const [packingArray, setPackingArray] = useState<any>([]);

  const fetchApi = async () => {
    setFormsArray([]);
    setStrengthsArray([]);
    setPackingArray([]);
    try {
      if (!search) {
        alert("please enter medicine name");
        return;
      }
      const url = `https://backend.cappsule.co.in/api/v1/new_search?q=${search}&pharmacyIds=1,2,3`;
      const res = await axios.get(`${url}`);
      if (res?.status === 200) {
        const response = res?.data?.data?.saltSuggestions;

        setData(response);

        response?.map((ele: any) => {
          const formValue = ele?.available_forms[0];
          const strengthObj = ele?.salt_forms_json[formValue];
          const strengthValue: any = Object.keys(strengthObj)[0];
          setFormsArray((prev: any) => [...prev, formValue]);
          setStrengthsArray((prev: any) => [
            ...prev,
            Object.keys(strengthObj)[0],
          ]);
          setPackingArray((prev: any) => [
            ...prev,
            Object.keys(strengthObj[strengthValue])[0],
          ]);
        });

        setSearch("");
      }
    } catch (error) {}
  };

  return (
    <div className="bg-gray-50 flex flex-col items-center ">
      <div className="w-[70%] h-full flex flex-col justify-center items-center mt-40">
        <p className="text-lg font-semibold "> Capsule web development test</p>

        <div className="relative w-[60%] mt-10 flex items-center">
          <div className="absolute inset-y-0  left-0 px-4  flex justify-center items-center ml-8">
            <IoSearch className="text-gray-400" size={20} />
          </div>
          <input
            value={search}
            className="w-full pl-16 pr-4 py-2 border rounded-full shadow-2xl h-14 ml-8 focus:outline-none"
            placeholder="Type your medicine name here..."
            onChange={(e: any) => setSearch(e.target.value)}
          />

          <div className="absolute inset-y-0  right-0 px-4  flex justify-center items-center mr-2">
            <p
              className="cursor-pointer hover:text-gray-600"
              onClick={fetchApi}
            >
              {" "}
              search
            </p>
          </div>
        </div>
      </div>

      <div className="w-[80%]  h-full flex flex-col justify-center items-center mt-10 mb-40 space-y-10">
        {data.length > 0 ? (
          data.map((ele: any, rowIndex: number) => (
            <Row
              allProps={{
                ele,
                formsArray,
                setFormsArray,
                strengthsArray,
                setStrengthsArray,
                packingArray,
                setPackingArray,
                rowIndex,
              }}
              key={rowIndex}
            />
          ))
        ) : (
          <p className="text-2xl font-semibold text-gray-400">
            {" "}
            * Find medicines with amazing discounts
          </p>
        )}
      </div>
    </div>
  );
};

export default Home;
