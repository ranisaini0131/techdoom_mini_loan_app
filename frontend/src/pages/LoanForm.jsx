import React, { useState } from "react";
import { PhotoIcon, UserCircleIcon } from "@heroicons/react/24/solid";

function LoanForm() {
  const [panNumber, setPanNumber] = useState("");
  const [bankAccountNumber, setBankAccountNumber] = useState("");
  const [aadharNumber, setAadharNumber] = useState("");

  const handlePanNumberChange = (event) => {
    setPanNumber(event.target.value);
  };

  const handleBankAccountNumberChange = (event) => {
    setBankAccountNumber(event.target.value);
  };

  const handleAadharNumberChange = (event) => {
    setAadharNumber(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Logic to handle form submission
    console.log("Form submitted:", {
      panNumber,
      bankAccountNumber,
      aadharNumber,
    });
  };

  return (
    <form>
      <div className="space-y-12">
        <div className="border-b border-gray-900/10 pb-12">
          <h2 className="font-semibold leading-7 text-white bg-black py-7 flex items-center justify-center text-5xl bd mt-5 mb-5">
            Loan Form
          </h2>
          <p className="mt-1 text-2xl leading-6 text-black flex items-center justify-center">
            This information will be displayed publicly so be careful what you
            share.
          </p>
        </div>

        <div className="border-b border-gray-900/10 pb-12">
          <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
            <div className="sm:col-span-3">
              <label
                htmlFor="panNumber"
                className="block text-3xl font-medium leading-6 text-gray-900"
              >
                PAN NUMBER
              </label>
              <div className="mt-2">
                <input
                  type="number"
                  name="panNumber"
                  id="panNumber"
                  autoComplete="panNumber"
                  className="block w-full rounded-md border-2  py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div className="sm:col-span-3">
              <label
                htmlFor="adharNumber"
                className="block text-3xl font-medium leading-6 text-gray-900"
              >
                ADHAR NUMBER
              </label>
              <div className="mt-2">
                <input
                  type="number"
                  name="adharNumber"
                  id="adharNumber"
                  autoComplete="adharNumber"
                  className="block w-full rounded-md border-2 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div className="sm:col-span-4">
              <label
                htmlFor="bankAccount"
                className="block text-3xl font-medium leading-6 text-gray-900"
              >
                Bank Account Number
              </label>
              <div className="mt-2">
                <input
                  id="bankAccount"
                  name="bankAccount"
                  type="number"
                  autoComplete="bankAccount"
                  className="block w-full rounded-md border-2 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-6 flex items-center justify-center gap-x-6">
        <button
          type="submit"
          className="rounded-md bg-indigo-600 px-3 py-2 mb-7 border text-4xl font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
        >
          Apply
        </button>
      </div>
    </form>
  );
}

export default LoanForm;
