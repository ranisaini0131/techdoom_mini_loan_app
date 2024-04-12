import React, { useEffect } from "react";
import { useState } from "react";
import axios from "axios";

function UserDetails() {
  const [token, setToken] = useState(localStorage.getItem("token"));
  const [data, setData] = useState([]);
  const [amount, setAmount] = useState();

  let config = {
    method: "get",
    maxBodyLength: Infinity,
    url: "http://localhost:8080/api/v1/loans/getLoanById",
    headers: {
      Authorization: "Bearer " + token,
    },
  };

  const getData = async () => {
    const res = await axios(config);
    console.log(res, "21");
    return res;
  };

  useEffect(async () => {
    const Data = await getData();
    console.log(Data, "42");
    setData(Data?.data?.Loans);
  }, []);
  console.log(data, "42");
  const handleRepay = (_id) => {
    console.log(_id, "48");
  };

  return (
    <>
      <div className="sm:mx-auto sm:w-full sm:max-w-sm bg bg-black mb-10">
        <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-white">
          Your Details
        </h2>
      </div>

      <table className="table-auto w-full ">
        <thead>
          <tr>
            <th className="px-4 py-2">Customer ID</th>
            <th className="px-4 py-2">Amount</th>
            <th className="px-4 py-2">Status</th>
            <th className="px-4 py-2">Repay</th>
          </tr>
        </thead>
        <tbody>
          {data?.map((row, index) => (
            <tr key={index}>
              <td className="border px-4 py-2">{row.user}</td>
              <td className="border px-4 py-2">{row.amount}</td>
              <td className="border px-4 py-2">{row.status}</td>
              <td className="border px-4 py-2">
                {
                  <button
                    onClick={() => handleRepay(row._id)}
                    className="bg-red-500 hover:bg-red-600 text-white px-2 py-1 rounded mr-2"
                  >
                    Rapay
                  </button>
                }
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
            {" "}
            Schedule Custom Repayments{" "}
          </h2>
        </div>

        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <form className="space-y-6" action="#" method="POST">
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Amount
              </label>
              <div className="mt-2">
                <input
                  id="email"
                  name="email"
                  type="email"
                  value={amount}
                  // onChange={handleChange}
                  autoComplete="email"
                  required
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div>
              <button
                type="submit"
                className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Repay
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default UserDetails;
