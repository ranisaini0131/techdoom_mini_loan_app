import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function AdminPage() {
  const [token, setToken] = useState(localStorage.getItem("token"));
  const [data, setData] = useState([]);
  const navigate = useNavigate();

  let config = {
    method: "get",
    maxBodyLength: Infinity,
    url: "http://localhost:8080/api/v1/loans/getLoans",
    headers: {
      Authorization: "Bearer " + token,
    },
    data: data,
  };
  setToken(token);

  const getData = async () => {
    const res = await axios(config);
    console.log(res.data.Loans, "21");
    return res;
  };

  useEffect(async () => {
    const Data = await getData();
    console.log(Data, "31");
    setData(Data?.data?.Loans);
  }, []);

  getData();

  return (
    <>
      <div className="sm:mx-auto sm:w-full sm:max-w-sm bg bg-black mb-10">
        <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-white">
          Admin Page
        </h2>
      </div>
      <div className="container mx-auto px-4 py-8">
        <table className="w-full border-collapse border border-gray-300">
          <thead>
            <tr className="bg-gray-100">
              <th className="border border-gray-300 px-4 py-2">
                Customer Name
              </th>
              <th className="border border-gray-300 px-4 py-2">Amount</th>
              <th className="border border-gray-300 px-4 py-2">Date</th>
              <th className="border border-gray-300 px-4 py-2">Total Amount</th>
              <th className="border border-gray-300 px-4 py-2">
                Total Remaining Amount
              </th>
              <th className="border border-gray-300 px-4 py-2">Status</th>
              {/* <th className="border border-gray-300 px-4 py-2">Actions</th> */}
            </tr>
          </thead>
          <tbody>
            {data.Loans?.map((item) => (
              <tr key={item.id}>
                <td className="border border-gray-300 px-4 py-2">{item._id}</td>
                <td className="border border-gray-300 px-4 py-2">
                  {item.amount}
                </td>
                <td className="border border-gray-300 px-4 py-2">
                  {item.date}
                </td>
                <td className="border border-gray-300 px-4 py-2">
                  {item.totalAmount}
                </td>
                <td className="border border-gray-300 px-4 py-2">
                  {item.totalRemainingAmount}
                </td>
                {/* <td className="border border-gray-300 px-4 py-2">{item.status}</td> */}
                <td className="border border-gray-300 px-4 py-2">
                  {item.status === "Pending" && (
                    <button className="bg-green-500 hover:bg-green-600 text-white px-2 py-1 rounded mr-2">
                      Approve
                    </button>
                  )}
                  {item.status === "Approved" && (
                    <button className="bg-green-500 hover:bg-green-700 text-white font-bold py-1 px-2 rounded">
                      Approved
                    </button>
                  )}
                  {item.status === "Rejected" && (
                    <button className="bg-red-500 hover:bg-red-700 text-white font-bold py-1 px-2 rounded">
                      Rejected
                    </button>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}

export default AdminPage;
