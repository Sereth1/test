// components/Form.tsx
import { useState, ChangeEvent, FormEvent } from "react";
import { motion } from "framer-motion";

const FormSubmit = () => {
  const [number, setNumber] = useState<number | string>("");
  const [error, setError] = useState<string>("");

  const handleNumberChange = (e: ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setNumber(value === "" ? "" : parseInt(value));
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (typeof number === "number" && number <= 10) {
      setError("Number must be greater than 10");
    } else {
      setError("");
      alert("Form submitted successfully");
    }
  };

  return (
    <div className="flex flex-col items-center justify-center p-10 h-screen border">
      <h1 className="text-2xl font-bold mb-4"></h1>

      <motion.div
        className="bg-white border rounded-xl px-8 pt-6 pb-8 mb-4 w-[330px]"
        initial={{ x: "-100vw" }}
        animate={{ x: 0 }}
        transition={{ type: "spring", stiffness: 50 }}
      >
        <form onSubmit={handleSubmit}>
          <h2
            style={{ fontFamily: "Times New Roman" }}
            className="text-blue-500 text-4xl mb-4 "
          >
            Form
          </h2>
          <div className="mb-4">
            <label
              style={{ fontFamily: "Times New Roman" }}
              className="block text-gray-700 text-sm font-semibold mb-2"
              htmlFor="number"
            >
              Number
            </label>
            <input
              required
              type="number"
              id="number"
              value={number}
              onChange={handleNumberChange}
              placeholder="Please enter a number"
              style={{ fontFamily: "Times New Roman" }}
              className="shadow appearance-none border rounded-lg w-full py-1 px-1 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            />
          </div>
          {error && <p className="text-red-500 text-xs pb-3 italic">{error}</p>}
          <div className="flex items-center justify-end">
            <button
              type="submit"
              className="border-2 border-blue-500 text-blue-500 font-bold py-[1px] px-[10px] rounded-lg focus:outline-none focus:shadow-outline transition duration-300 ease-in-out hover:bg-blue-500 hover:text-white hover:shadow-lg"
            >
              Submit
            </button>
          </div>
        </form>
      </motion.div>
    </div>
  );
};

export default FormSubmit;
