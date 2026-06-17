"use client";

import React, { useState, useEffect } from "react";
import { useAuth } from "@/context/AuthContext";
import { useRouter } from "next/navigation";
import { gadgets as initialGadgets } from "@/lib/items";
import {
  FaTrashAlt,
  FaBoxes,
  FaLock,
  FaSpinner,
  FaTools,
  FaExternalLinkAlt,
} from "react-icons/fa";
import Link from "next/link";

const ManageGadgetsPage = () => {
  const { user, loading } = useAuth();
  const router = useRouter();

  
  const [gadgetInventory, setGadgetInventory] = useState(initialGadgets);
  const [deleteLoadingId, setDeleteLoadingId] = useState(null);

 
  useEffect(() => {
    if (!loading && !user) {
      router.push("/login");
    }
  }, [user, loading, router]);
 
  if (loading) {
    return (
      <div className="flex h-[calc(100vh-8rem)] items-center justify-center bg-gray-950 text-white">
        <div className="w-10 h-10 border-4 border-blue-500 border-t-transparent rounded-full animate-spin"></div>
      </div>
    );
  }

   
  if (!user) {
    return (
      <div className="flex h-[calc(100vh-8rem)] flex-col items-center justify-center bg-gray-950 text-gray-400 gap-2">
        <FaLock className="text-red-500 text-3xl animate-bounce" />
        <p>Unauthorized. Re-routing to core gateway...</p>
      </div>
    );
  }

 
  const handleDeleteProduct = async (id) => {
    if (
      !window.confirm(
        "Are you absolutely sure you want to purge this gadget from TechNest ecosystem?",
      )
    ) {
      return;
    }

    setDeleteLoadingId(id); 

    try {
       
      await new Promise((resolve) => setTimeout(resolve, 1000));

     
      setGadgetInventory((prev) => prev.filter((item) => item.id !== id));
      console.log(
        `Product with ID ${id} successfully removed by ${user.email}`,
      );
    } catch (error) {
      console.error("Delete operation failed", error);
    } finally {
      setDeleteLoadingId(null);
    }
  };

  return (
    <div className="bg-gray-950 min-h-[calc(100vh-8rem)] py-12 text-gray-100 relative overflow-hidden">
      
      <div className="absolute top-0 right-1/4 -z-10 h-[250px] w-[400px] rounded-full bg-blue-500/5 blur-[120px]"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
     
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mb-10 border-b border-gray-900 pb-6">
          <div className="text-center sm:text-left">
            <h1 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight flex items-center justify-center sm:justify-start gap-2.5">
              <FaTools className="text-blue-500 text-xl sm:text-2xl" />
              <span>Inventory Management</span>
            </h1>
            <p className="text-gray-400 text-xs sm:text-sm mt-1">
              Authorized Manager Panel:{" "}
              <span className="text-blue-400 font-medium">{user.email}</span>
            </p>
          </div>
          <Link
            href="/items/add"
            className="bg-blue-600 hover:bg-blue-700 text-white font-semibold text-xs sm:text-sm px-4 py-2.5 rounded-xl transition shadow-md shadow-blue-600/10"
          >
            + Add New Item
          </Link>
        </div>

         
        {gadgetInventory.length > 0 ? (
          <div className="bg-gray-900/30 border border-gray-800 rounded-2xl overflow-hidden backdrop-blur-md shadow-2xl">
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="bg-gray-950 border-b border-gray-800 text-gray-400 text-xs uppercase tracking-wider font-bold">
                    <th className="p-4 sm:p-5">Gadget Info</th>
                    <th className="p-4 sm:p-5">Category</th>
                    <th className="p-4 sm:p-5">Price</th>
                    <th className="p-4 sm:p-5">Stock</th>
                    <th className="p-4 sm:p-5 text-center">Actions</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-900 text-sm">
                  {gadgetInventory.map((gadget) => (
                    <tr
                      key={gadget.id}
                      className="hover:bg-gray-900/20 transition-colors group"
                    >
                      
                      <td className="p-4 sm:p-5">
                        <div className="flex items-center gap-3.5">
                          <img
                            src={gadget.image}
                            alt={gadget.name}
                            className="w-12 h-12 object-cover rounded-xl bg-gray-950 border border-gray-800 shrink-0"
                          />
                          <div>
                            <h3 className="font-bold text-white group-hover:text-blue-400 transition-colors line-clamp-1 max-w-[180px] sm:max-w-xs">
                              {gadget.name}
                            </h3>
                            <p className="text-gray-500 text-xs mt-0.5">
                              ID: TN-{gadget.id}
                            </p>
                          </div>
                        </div>
                      </td>

                     
                      <td className="p-4 sm:p-5 text-gray-350 font-medium">
                        {gadget.category}
                      </td>

                       
                      <td className="p-4 sm:p-5 font-extrabold text-white">
                        ${gadget.price}
                      </td>

                   
                      <td className="p-4 sm:p-5">
                        <div className="flex items-center gap-2">
                          <span
                            className={`w-2 h-2 rounded-full ${gadget.stock < 5 ? "bg-red-500 animate-pulse" : "bg-emerald-500"}`}
                          ></span>
                          <span className="font-semibold text-gray-300">
                            {gadget.stock} units
                          </span>
                        </div>
                      </td>

                     
                      <td className="p-4 sm:p-5">
                        <div className="flex items-center justify-center gap-3">
                         
                          <Link
                            href={`/items/${gadget.id}`}
                            className="p-2.5 bg-gray-950 border border-gray-800 hover:border-gray-700 text-gray-400 hover:text-white rounded-xl transition text-xs"
                            title="View Live Page"
                          >
                            <FaExternalLinkAlt />
                          </Link>

                          
                          <button
                            disabled={deleteLoadingId === gadget.id}
                            onClick={() => handleDeleteProduct(gadget.id)}
                            className="p-2.5 bg-red-500/10 border border-red-500/20 hover:bg-red-600 hover:text-white text-red-400 rounded-xl transition text-xs disabled:opacity-40"
                            title="Delete Item"
                          >
                            {deleteLoadingId === gadget.id ? (
                              <FaSpinner className="animate-spin" />
                            ) : (
                              <FaTrashAlt />
                            )}
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        ) : (
          
          <div className="text-center py-20 border border-dashed border-gray-800 rounded-2xl bg-gray-900/10">
            <FaBoxes className="text-gray-600 text-5xl mx-auto mb-4" />
            <p className="text-gray-400 text-lg font-medium">
              Your TechNest inventory is completely empty.
            </p>
            <Link
              href="/items/add"
              className="mt-4 inline-block text-sm bg-blue-600 hover:bg-blue-700 text-white font-semibold px-4 py-2 rounded-xl transition"
            >
              Inject New Gadget
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default ManageGadgetsPage;
