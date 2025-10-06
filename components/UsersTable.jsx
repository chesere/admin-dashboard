"use client";
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Edit, Search, Trash2 } from "lucide-react";
import Image from "next/image";

const UsersTable = () => {
  const [clients, setClients] = useState([]);
  useEffect(() => {
    const fetchClients = async () => {
      try {
        const res = await fetch("/data/data.json");
        const data = await res.json();
        setClients(data.clients);
      } catch (error) {
        console.error("Error fetching Clients", error);
      }
    };
    fetchClients();
  }, []);
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.2, duration: 0.5 }}
      className="bg-[#1e1e1e] backdrop-blur-md shadow-lg rounded-xl p-4 sm:p-6 border border-[#1f1f1f] mx-2 sm:mx-0"
    >
      <div className="flex flex-col sm:flex-row justify-between items-center mb-6 gap-4 sm:gap-0">
        <h2 className="text-lg sm:text-xl font-semibold text-gray-100 text-center sm:text-left">
          Clients
        </h2>
        <div className="relative w-full sm:w-auto">
          <input
            type="text"
            placeholder="Search Clients"
            className="bg-[#2f2f2f] text-white placeholder-gray-400 rounded-lg pl-10 pr-4 py-2  w-full sm:w-64 focus:outline-none focus:ring-2 focus:ring-gray-500 duration-200 text-sm"
          />
          <Search
            className="absolute left-3 top-2.5  text-gray-400 "
            size={18}
          />
        </div>
      </div>
      <div>
        <table className="min-w-full divide-y divide-gray-700">
          <thead>
            <tr>
              {["Name", "Email", "Phone Numbers", "Country", "Actions"].map(
                (header) => (
                  <th
                    key={header}
                    className="px-3 sm:px-6 py-2 sm:py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider hidden sm:table-cell"
                  >
                    {header}
                  </th>
                )
              )}
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-700">
            {clients.map((client, index) => (
              <motion.tr
                key={client.id}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.3 }}
                className="flex flex-col sm:table-row mb-4 sm:mb-0 border-b sm:border-b-0 border-gray-700 sm:border-none p-2 sm:p-0"
              >
                {/*Mobile view*/}
                <td className="sm:hidden px-3 py-2">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
                      <Image
                        src={client.image}
                        width={36}
                        height={36}
                        className="w-9 h-9 rounded-full"
                        alt="client image"
                      />
                      <div className="ml-3">
                        <div className="text-sm font-medium text-gray-100">
                          {client.name}
                        </div>
                        <div className="text-xs text-gray-400">
                          {client.email}
                        </div>
                      </div>
                    </div>
                    <div className="flex space-x-1 -mt-5 -mr-4">
                      <button className="text-ndigo-500 hover:text-indigo-300">
                        <Edit size={16} />
                      </button>
                      <button className="text-red-500 hover:text-red-300">
                        <Trash2 size={16} />
                      </button>
                    </div>
                  </div>
                  <div className="mt-2 text-xs text-gray-300">
                    <div>Phone: {client.phoneNumber}</div>
                    <div>Coutry: {client.country}</div>
                  </div>
                </td>
              </motion.tr>
            ))}
          </tbody>
        </table>
      </div>
    </motion.div>
  );
};

export default UsersTable;
