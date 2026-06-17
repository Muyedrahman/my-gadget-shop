// "use client";

// import React, { useState, useEffect } from "react";
// import { useAuth } from "@/context/AuthContext";
// import { useRouter } from "next/navigation";
// import {
//   FaPlusCircle,
//   FaTag,
//   FaDollarSign,
//   FaImage,
//   FaListAlt,
//   FaInfoCircle,
//   FaSpinner,
//   FaLock,
// } from "react-icons/fa";

// const AddGadgetMinusPage = () => {
//   const { user, loading } = useAuth();
//   const router = useRouter();

//   // ফর্ম স্টেটসমূহ
//   const [name, setName] = useState("");
//   const [price, setPrice] = useState("");
//   const [category, setCategory] = useState("Laptops & PCs");
//   const [image, setImage] = useState("");
//   const [description, setDescription] = useState("");
//   const [stock, setStock] = useState("");

//   const [formLoading, setFormLoading] = useState(false);
//   const [successMessage, setSuccessMessage] = useState("");

//   // 🔒 সিকিউরিটি মেকানিজম: আন-অথরাইজড ইউজার প্রোটেকশন
//   useEffect(() => {
//     if (!loading && !user) {
//       // ইউজার লগইন না থাকলে সরাসরি লগইন পেজে রিডাইরেক্ট
//       router.push("/login");
//     }
//   }, [user, loading, router]);

//   // ফায়ারবেস বা গ্লোবাল স্টেট লোড হওয়া পর্যন্ত ওয়েটিং স্ক্রিন
//   if (loading) {
//     return (
//       <div className="flex h-[calc(100vh-8rem)] items-center justify-center bg-gray-950 text-white">
//         <div className="w-10 h-10 border-4 border-blue-500 border-t-transparent rounded-full animate-spin"></div>
//       </div>
//     );
//   }

//   // ইউজার যদি লগইন না থাকে, তবে নিচের ফর্মটি রেন্ডার হওয়া ব্লক করবে
//   if (!user) {
//     return (
//       <div className="flex h-[calc(100vh-8rem)] flex-col items-center justify-center bg-gray-950 text-gray-400 gap-2">
//         <FaLock className="text-red-500 text-3xl animate-bounce" />
//         <p>Access Denied. Redirecting to security gateway...</p>
//       </div>
//     );
//   }

//   // ফর্ম সাবমিট হ্যান্ডলার (প্রোডাকশন রেডি মক সাবমিশন)
//   const handleAddProduct = async (e) => {
//     e.preventDefault();
//     setFormLoading(true);
//     setSuccessMessage("");

//     // এখানে একটি নতুন প্রোডাক্ট অবজেক্ট তৈরি হলো
//     const newGadget = {
//       id: Date.now().toString(), // ডাইনামিক আইডি জেনারেটর ট্রিক
//       name,
//       price: Number(price),
//       category,
//       image:
//         image ||
//         "https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?q=80&w=600", // ফলব্যাক ইমেজ
//       description,
//       stock: Number(stock) || 10,
//       rating: 5.0, // নতুন প্রোডাক্টের ডিফল্ট রেটিং
//     };

//     try {
//       // রিয়েল ডাটাবেজ (যেমন Firestore বা MongoDB) কানেক্ট করার প্রফেশনাল আর্কিটেকচার স্ট্রাকচার
//       await new Promise((resolve) => setTimeout(resolve, 1500)); // সিমুলেটিং নেটওয়ার্ক রিকোয়েস্ট

//       console.log("Successfully Registered New Gadget:", newGadget);
//       setSuccessMessage(
//         "🚀 Success! The premium gadget has been injected into our ecosystem.",
//       );

//       // ফর্ম ফিল্ডগুলো রিসেট করা
//       setName("");
//       setPrice("");
//       setImage("");
//       setDescription("");
//       setStock("");

//       // ৩ সেকেন্ড পর ইউজারকে ক্যাটালগ বা ম্যানেজ পেজে পাঠিয়ে দেওয়া
//       setTimeout(() => {
//         router.push("/items");
//       }, 2000);
//     } catch (error) {
//       console.error("Submission failed", error);
//     } finally {
//       setFormLoading(false);
//     }
//   };

//   return (
//     <div className="bg-gray-950 min-h-[calc(100vh-8rem)] py-12 text-gray-100 relative overflow-hidden">
//       {/* গ্লোবাল ফিউচারিস্টিক গ্লো ইফেক্ট */}
//       <div className="absolute -top-10 left-1/2 -z-10 h-[300px] w-[500px] -translate-x-1/2 rounded-full bg-blue-500/10 blur-[100px]"></div>

//       <div className="max-w-2xl mx-auto px-4">
//         <div className="bg-gray-900/40 border border-gray-800 p-6 sm:p-10 rounded-3xl backdrop-blur-md shadow-2xl">
//           {/* হেডার */}
//           <div className="text-center mb-8">
//             <span className="inline-flex items-center gap-1.5 py-1 px-2.5 rounded-md text-xs font-semibold bg-red-500/10 text-red-400 border border-red-500/20 mb-3 uppercase tracking-wider">
//               <FaLock className="text-[10px]" /> Protected Route
//             </span>
//             <h1 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight flex items-center justify-center gap-2">
//               <FaPlusCircle className="text-blue-500 text-xl sm:text-2xl" />
//               <span>Add New Gadget</span>
//             </h1>
//             <p className="text-gray-400 text-xs sm:text-sm mt-1">
//               Deploy a futuristic tech product directly to the shop pipeline
//             </p>
//           </div>

//           {/* সাকসেস অ্যালার্ট নোটিফিকেশন */}
//           {successMessage && (
//             <div className="mb-6 p-4 bg-emerald-500/10 border border-emerald-500/20 rounded-xl text-emerald-400 text-sm font-medium animate-fade-in text-center">
//               {successMessage}
//             </div>
//           )}

//           {/* মেইন ফর্ম */}
//           <form onSubmit={handleAddProduct} className="space-y-5">
//             {/* ১. প্রোডাক্টের নাম */}
//             <div className="space-y-1.5">
//               <label className="text-xs font-bold uppercase text-gray-400 tracking-wider">
//                 Gadget Name
//               </label>
//               <div className="relative">
//                 <span className="absolute inset-y-0 left-0 flex items-center pl-3.5 text-gray-500 text-sm">
//                   <FaTag />
//                 </span>
//                 <input
//                   type="text"
//                   required
//                   value={name}
//                   onChange={(e) => setName(e.target.value)}
//                   placeholder="e.g. Sony WH-1000XM5"
//                   className="w-full bg-gray-950 text-white placeholder-gray-600 text-sm rounded-xl block pl-10 pr-4 py-3 border border-gray-800 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 outline-none transition"
//                 />
//               </div>
//             </div>

//             {/* ২. প্রাইস ও স্টক (এক লাইনে রেসপনসিভ গ্রিড) */}
//             <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
//               <div className="space-y-1.5">
//                 <label className="text-xs font-bold uppercase text-gray-400 tracking-wider">
//                   Price (USD)
//                 </label>
//                 <div className="relative">
//                   <span className="absolute inset-y-0 left-0 flex items-center pl-3.5 text-gray-500 text-sm">
//                     <FaDollarSign />
//                   </span>
//                   <input
//                     type="number"
//                     required
//                     min="1"
//                     value={price}
//                     onChange={(e) => setPrice(e.target.value)}
//                     placeholder="299"
//                     className="w-full bg-gray-950 text-white placeholder-gray-600 text-sm rounded-xl block pl-10 pr-4 py-3 border border-gray-800 focus:border-blue-500 outline-none transition"
//                   />
//                 </div>
//               </div>

//               <div className="space-y-1.5">
//                 <label className="text-xs font-bold uppercase text-gray-400 tracking-wider">
//                   Initial Stock
//                 </label>
//                 <div className="relative">
//                   <span className="absolute inset-y-0 left-0 flex items-center pl-3.5 text-gray-500 text-sm">
//                     <FaListAlt />
//                   </span>
//                   <input
//                     type="number"
//                     required
//                     min="1"
//                     value={stock}
//                     onChange={(e) => setStock(e.target.value)}
//                     placeholder="10"
//                     className="w-full bg-gray-950 text-white placeholder-gray-600 text-sm rounded-xl block pl-10 pr-4 py-3 border border-gray-800 focus:border-blue-500 outline-none transition"
//                   />
//                 </div>
//               </div>
//             </div>

//             {/* ৩. ক্যাটাগরি ড্রপডাউন */}
//             <div className="space-y-1.5">
//               <label className="text-xs font-bold uppercase text-gray-400 tracking-wider">
//                 Category
//               </label>
//               <div className="relative">
//                 <span className="absolute inset-y-0 left-0 flex items-center pl-3.5 text-gray-500 text-sm">
//                   <FaListAlt />
//                 </span>
//                 <select
//                   value={category}
//                   onChange={(e) => setCategory(e.target.value)}
//                   className="w-full bg-gray-950 text-gray-300 text-sm rounded-xl block pl-10 pr-4 py-3 border border-gray-800 focus:border-blue-500 outline-none transition appearance-none cursor-pointer"
//                 >
//                   <option value="Laptops & PCs">Laptops & PCs</option>
//                   <option value="Smartphones">Smartphones</option>
//                   <option value="Audio & Sound">Audio & Sound</option>
//                   <option value="Gaming Gear">Gaming Gear</option>
//                 </select>
//               </div>
//             </div>

//             {/* ৪. ইমেজ ইউআরএল */}
//             <div className="space-y-1.5">
//               <label className="text-xs font-bold uppercase text-gray-400 tracking-wider">
//                 Product Image URL
//               </label>
//               <div className="relative">
//                 <span className="absolute inset-y-0 left-0 flex items-center pl-3.5 text-gray-500 text-sm">
//                   <FaImage />
//                 </span>
//                 <input
//                   type="url"
//                   value={image}
//                   onChange={(e) => setImage(e.target.value)}
//                   placeholder="https://images.unsplash.com/..."
//                   className="w-full bg-gray-950 text-white placeholder-gray-600 text-sm rounded-xl block pl-10 pr-4 py-3 border border-gray-800 focus:border-blue-500 outline-none transition"
//                 />
//               </div>
//             </div>

//             {/* ৫. ডেসক্রিপশন */}
//             <div className="space-y-1.5">
//               <label className="text-xs font-bold uppercase text-gray-400 tracking-wider">
//                 Product Description
//               </label>
//               <div className="relative">
//                 <span className="absolute top-3 left-3.5 text-gray-500 text-sm">
//                   <FaInfoCircle />
//                 </span>
//                 <textarea
//                   required
//                   rows="4"
//                   value={description}
//                   onChange={(e) => setDescription(e.target.value)}
//                   placeholder="Enter detailed specifications and overview of the gadget..."
//                   className="w-full bg-gray-950 text-white placeholder-gray-600 text-sm rounded-xl block pl-10 pr-4 py-3 border border-gray-800 focus:border-blue-500 outline-none transition resize-none leading-relaxed"
//                 ></textarea>
//               </div>
//             </div>

//             {/* সাবমিট বাটন */}
//             <button
//               type="submit"
//               disabled={formLoading}
//               className="w-full mt-2 flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-bold py-3.5 px-4 rounded-xl transition shadow-lg shadow-blue-600/10 disabled:opacity-50 hover:-translate-y-0.5 active:translate-y-0"
//             >
//               {formLoading ? (
//                 <>
//                   <FaSpinner className="animate-spin" />
//                   <span>Processing Pipeline...</span>
//                 </>
//               ) : (
//                 <span>Publish To TechNest</span>
//               )}
//             </button>
//           </form>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default AddGadgetMinusPage;

// 2

"use client";

import React, { useState, useEffect } from "react";
import { useAuth } from "@/context/AuthContext";
import { useRouter } from "next/navigation";
import {
  FaPlusCircle,
  FaTag,
  FaDollarSign,
  FaImage,
  FaListAlt,
  FaInfoCircle,
  FaSpinner,
  FaLock,
} from "react-icons/fa";

const AddGadgetMinusPage = () => {
  const { user, loading } = useAuth();
  const router = useRouter();

  
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [category, setCategory] = useState("Laptops & PCs");
  const [image, setImage] = useState("");
  const [description, setDescription] = useState("");
  const [stock, setStock] = useState("");

  const [formLoading, setFormLoading] = useState(false);
  const [successMessage, setSuccessMessage] = useState("");

 
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
        <p>Access Denied. Redirecting to security gateway...</p>
      </div>
    );
  }
  

  const handleAddProduct = async (e) => {
    e.preventDefault();
    setFormLoading(true);
    setSuccessMessage("");

    const newGadget = {
      id: Date.now().toString(),
      name,
      price: Number(price),
      category,
      image:
        image ||
        "https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?q=80&w=600",
      description,
      stock: Number(stock) || 10,
      rating: 5.0,
    };

    try {
      const existingGadgets =
        JSON.parse(localStorage.getItem("myGadgets")) || [];

      localStorage.setItem(
        "myGadgets",
        JSON.stringify([...existingGadgets, newGadget]),
      );

      await new Promise((resolve) => setTimeout(resolve, 800));

      console.log("Successfully Registered New Gadget:", newGadget);
      setSuccessMessage(
        "  Success! The premium gadget has been injected into our ecosystem.",
      );

      setName("");
      setPrice("");
      setImage("");
      setDescription("");
      setStock("");

      setTimeout(() => {
        router.push("/items");
      }, 2000);
    } catch (error) {
      console.error("Submission failed", error);
    } finally {
      setFormLoading(false);
    }
  };

  return (
    <div className="bg-gray-950 min-h-[calc(100vh-8rem)] py-12 text-gray-100 relative overflow-hidden">
      <div className="absolute -top-10 left-1/2 -z-10 h-[300px] w-[500px] -translate-x-1/2 rounded-full bg-blue-500/10 blur-[100px]"></div>

      <div className="max-w-2xl mx-auto px-4">
        <div className="bg-gray-900/40 border border-gray-800 p-6 sm:p-10 rounded-3xl backdrop-blur-md shadow-2xl">
          <div className="text-center mb-8">
            <span className="inline-flex items-center gap-1.5 py-1 px-2.5 rounded-md text-xs font-semibold bg-red-500/10 text-red-400 border border-red-500/20 mb-3 uppercase tracking-wider">
              <FaLock className="text-[10px]" /> Protected Route
            </span>
            <h1 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight flex items-center justify-center gap-2">
              <FaPlusCircle className="text-blue-500 text-xl sm:text-2xl" />
              <span>Add New Gadget</span>
            </h1>
            <p className="text-gray-400 text-xs sm:text-sm mt-1">
              Deploy a futuristic tech product directly to the shop pipeline
            </p>
          </div>

          {successMessage && (
            <div className="mb-6 p-4 bg-emerald-500/10 border border-emerald-500/20 rounded-xl text-emerald-400 text-sm font-medium animate-fade-in text-center">
              {successMessage}
            </div>
          )}

          <form onSubmit={handleAddProduct} className="space-y-5">
            <div className="space-y-1.5">
              <label className="text-xs font-bold uppercase text-gray-400 tracking-wider">
                Gadget Name
              </label>
              <div className="relative">
                <span className="absolute inset-y-0 left-0 flex items-center pl-3.5 text-gray-500 text-sm">
                  <FaTag />
                </span>
                <input
                  type="text"
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="e.g. Sony WH-1000XM5"
                  className="w-full bg-gray-950 text-white placeholder-gray-600 text-sm rounded-xl block pl-10 pr-4 py-3 border border-gray-800 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 outline-none transition"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              <div className="space-y-1.5">
                <label className="text-xs font-bold uppercase text-gray-400 tracking-wider">
                  Price (USD)
                </label>
                <div className="relative">
                  <span className="absolute inset-y-0 left-0 flex items-center pl-3.5 text-gray-500 text-sm">
                    <FaDollarSign />
                  </span>
                  <input
                    type="number"
                    required
                    min="1"
                    value={price}
                    onChange={(e) => setPrice(e.target.value)}
                    placeholder="299"
                    className="w-full bg-gray-950 text-white placeholder-gray-600 text-sm rounded-xl block pl-10 pr-4 py-3 border border-gray-800 focus:border-blue-500 outline-none transition"
                  />
                </div>
              </div>

              <div className="space-y-1.5">
                <label className="text-xs font-bold uppercase text-gray-400 tracking-wider">
                  Initial Stock
                </label>
                <div className="relative">
                  <span className="absolute inset-y-0 left-0 flex items-center pl-3.5 text-gray-500 text-sm">
                    <FaListAlt />
                  </span>
                  <input
                    type="number"
                    required
                    min="1"
                    value={stock}
                    onChange={(e) => setStock(e.target.value)}
                    placeholder="10"
                    className="w-full bg-gray-950 text-white placeholder-gray-600 text-sm rounded-xl block pl-10 pr-4 py-3 border border-gray-800 focus:border-blue-500 outline-none transition"
                  />
                </div>
              </div>
            </div>

            <div className="space-y-1.5">
              <label className="text-xs font-bold uppercase text-gray-400 tracking-wider">
                Category
              </label>
              <div className="relative">
                <span className="absolute inset-y-0 left-0 flex items-center pl-3.5 text-gray-500 text-sm">
                  <FaListAlt />
                </span>
                <select
                  value={category}
                  onChange={(e) => setCategory(e.target.value)}
                  className="w-full bg-gray-950 text-gray-300 text-sm rounded-xl block pl-10 pr-4 py-3 border border-gray-800 focus:border-blue-500 outline-none transition appearance-none cursor-pointer"
                >
                  <option value="Laptops & PCs">Laptops & PCs</option>
                  <option value="Smartphones">Smartphones</option>
                  <option value="Audio & Sound">Audio & Sound</option>
                  <option value="Gaming Gear">Gaming Gear</option>
                </select>
              </div>
            </div>

            <div className="space-y-1.5">
              <label className="text-xs font-bold uppercase text-gray-400 tracking-wider">
                Product Image URL
              </label>
              <div className="relative">
                <span className="absolute inset-y-0 left-0 flex items-center pl-3.5 text-gray-500 text-sm">
                  <FaImage />
                </span>
                <input
                  type="url"
                  value={image}
                  onChange={(e) => setImage(e.target.value)}
                  placeholder="https://images.unsplash.com/..."
                  className="w-full bg-gray-950 text-white placeholder-gray-600 text-sm rounded-xl block pl-10 pr-4 py-3 border border-gray-800 focus:border-blue-500 outline-none transition"
                />
              </div>
            </div>

            <div className="space-y-1.5">
              <label className="text-xs font-bold uppercase text-gray-400 tracking-wider">
                Product Description
              </label>
              <div className="relative">
                <span className="absolute top-3 left-3.5 text-gray-500 text-sm">
                  <FaInfoCircle />
                </span>
                <textarea
                  required
                  rows="4"
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                  placeholder="Enter detailed specifications and overview of the gadget..."
                  className="w-full bg-gray-950 text-white placeholder-gray-600 text-sm rounded-xl block pl-10 pr-4 py-3 border border-gray-800 focus:border-blue-500 outline-none transition resize-none leading-relaxed"
                ></textarea>
              </div>
            </div>

            <button
              type="submit"
              disabled={formLoading}
              className="w-full mt-2 flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-bold py-3.5 px-4 rounded-xl transition shadow-lg shadow-blue-600/10 disabled:opacity-50 hover:-translate-y-0.5 active:translate-y-0"
            >
              {formLoading ? (
                <>
                  <FaSpinner className="animate-spin" />
                  <span>Processing Pipeline...</span>
                </>
              ) : (
                <span>Publish To TechNest</span>
              )}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddGadgetMinusPage;