import React, { useState } from "react";
import { SiConvertio } from "react-icons/si";

const Temp = () => {
  const [inputNum, setInputNum] = useState(0);
  const [inputData, setInputData] = useState("Celsius");
  const [outputNum, setOutputNum] = useState(32);
  const [outputData, setOutputData] = useState("Fahrenheit");

  const ResultOut = () => {
    if (inputData === outputData) {
      setOutputNum(inputNum);
      setOutputNum(inputNum);
    } else if (inputData === "Celsius" && outputData === "Fahrenheit") {
      setOutputNum((9 * inputNum + 160) / 5);
    } else if (inputData === "Fahrenheit" && outputData === "Celsius") {
      setOutputNum((5 * inputNum - 160) / 9);
    } else if (inputData === "Celsius" && outputData === "Kelvin") {
      // console.log(typeof inputNum);
      setOutputNum(Number(inputNum) + 273);
    } else if (inputData === "Kelvin" && outputData === "Celsius") {
      setOutputNum(inputNum - 273);
    } else if (inputData === "Fahrenheit" && outputData === "Kelvin") {
      setOutputNum((5 * inputNum - 160) / 9 + 273);
    } else if (inputData === "Kelvin" && outputData === "Fahrenheit") {
      setOutputNum((inputNum - 273) * 1.8 + 32);
    }
  };
  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      ResultOut();
    }
  };
  const CleanAll = () => {
    setInputNum(0);
    setOutputNum(32);
    setInputData("Celsius");
    setOutputData("Fahrenheit");
  };

  return (
    <div className=" w-full h-full sm:w-[450px] sm:h-[500px] bg-gradient-to-r from-[#b5dca6de] to-[#dbdf83] sm:bg-gray-300 mx-auto rounded-lg shadow-lg tracking-wider">
      <h1 className=" text-3xl text-center font-semibold py-8 ">
        Temperature Converter
      </h1>
      <div className=" flex flex-col justify-center items-center gap-6 mt-8 ">
        <div className=" flex max-[450px]:flex-col sm:justify-around  mx-8 max-[450px]:gap-3 gap-6">
          <input
            type="text"
            className=" rounded-md py-2 px-3 text-lg outline-none font-semibold"
            value={inputNum}
            onChange={(e) => setInputNum(e.target.value)}
            onKeyDown={handleKeyDown}
          />
          <select
            className="rounded-md py-2 px-3 text-lg outline-none "
            onChange={(e) => setInputData(e.target.value)}
            value={inputData}
          >
            <option value="Celsius">Celsius</option>
            <option value="Fahrenheit">Fahrenheit</option>
            <option value="Kelvin">Kelvin</option>
          </select>
        </div>
        <div className=" flex justify-center">
          <SiConvertio
            size={30}
            color="red"
            className=" cursor-pointer"
            onClick={ResultOut}
          />
        </div>
        <div className=" flex max-[450px]:flex-col sm:justify-around mx-8 max-[450px]:gap-3 gap-6">
          <input
            type="text"
            className=" rounded-md py-2 px-3 text-lg outline-none font-semibold"
            value={outputNum}
            // onChange={(e) => setOutputNum(e.target.value)}
          />
          <select
            className="rounded-md py-2 px-3 text-lg outline-none"
            onChange={(e) => setOutputData(e.target.value)}
            value={outputData}
          >
            <option value="Fahrenheit">Fahrenheit</option>
            <option value="Celsius">Celsius</option>
            <option value="Kelvin">Kelvin</option>
          </select>
        </div>
      </div>
      <div className=" flex justify-center my-16">
        <button
          className=" w-[120px] bg-red-600 font-semibold tracking-wide text-white text-lg py-2 rounded-lg"
          onClick={CleanAll}
        >
          Reset
        </button>
      </div>
    </div>
  );
};

export default Temp;