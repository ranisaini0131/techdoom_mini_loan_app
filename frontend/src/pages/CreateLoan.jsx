import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function CreateLoan() {
  const [token, setToken] = useState(localStorage.getItem("token"));
  const [amount, setAmount] = useState("");
  const [terms, setTerms] = useState("");
  const navigate = useNavigate();

  //handle form submission
  const handleSubmit = async (e) => {
    try {
      let data = JSON.stringify({
        amount: amount,
        terms: terms,
      });

      let config = {
        method: "post",
        maxBodyLength: Infinity,
        url: "http://localhost:8080/api/v1/loans/create-loan",
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer " + token,
        },
        data: data,
      };

      axios
        .request(config)
        .then((response) => {
          // console.log(JSON.stringify(response.data));
          navigate("/user-details");
        })
        .catch((error) => {
          console.log(error);
        });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="flex min-h-full flex-1 flex-col justify-center border border-gray-300 px-6 py-12 lg:px-8 ">
      <div className="sm:mx-auto sm:w-full sm:max-w-sm bg">
        <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
          Create Your Loan
        </h2>
      </div>

      <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
        <div>
          <label
            htmlFor="amount"
            className="block text-sm font-medium leading-6 text-gray-900"
          >
            Amount
          </label>
          <div className="mt-2">
            <input
              id="amount"
              name="amount"
              type="number"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
              autoComplete="amount"
              required
              className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            />
          </div>
        </div>

        <div>
          <label
            htmlFor="terms"
            className="block text-sm font-medium leading-6 text-gray-900"
          >
            Terms
          </label>
          <div className="mt-2">
            <input
              id="terms"
              name="terms"
              type="number"
              value={terms}
              onChange={(e) => setTerms(e.target.value)}
              autoComplete="terms"
              required
              className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            />
          </div>
        </div>

        <div>
          <button
            onClick={handleSubmit}
            className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          >
            Submit
          </button>
        </div>
      </div>
    </div>
  );
}

export default CreateLoan;
