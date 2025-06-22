


import React, { useEffect } from 'react';
import { useAppContext } from '../../context/AppContext';
import toast from 'react-hot-toast';

const ProductList = () => {
    const {products, currency, axios, fetchProducts} = useAppContext()

    const toggleStock = async (id, inStock)=>{
        try {
            const { data } = await axios.post('/api/product/stock', {id, inStock});
            if (data.success){
                fetchProducts();
                toast.success(data.message)
            }else{
                toast.error(data.message)
            }
        } catch (error) {
            toast.error(error.message)
        }
    }

  return (
    <div className="no-scrollbar flex-1 h-[95vh] overflow-y-scroll flex flex-col justify-start bg-orange-300">
      <div className="w-full md:p-10 p-4">
        <h2 className="pb-4 text-xl font-semibold text-black">All Products</h2>

        {/* {products?.length > 0 ? ( */}
          <div className="flex flex-col items-center max-w-6xl w-full overflow-auto rounded-md bg-white border border-gray-300">
            <table className="table-auto w-full">
              <thead className="bg-gray-100 text-gray-800 text-sm text-left">
                <tr>
                  <th className="px-4 py-3 font-semibold">Product</th>
                  <th className="px-4 py-3 font-semibold">Category</th>
                  <th className="px-4 py-3 font-semibold hidden md:table-cell">Selling Price</th>
                  <th className="px-4 py-3 font-semibold">In Stock</th>
                </tr>
              </thead>
              <tbody className="text-sm text-black">
                {products.map((product) => (
                  <tr key={product._id} className="border-t border-gray-200 hover:bg-gray-50 transition">
                    <td className="px-4 py-3 flex items-center gap-4">
                      <img src={product.image?.[0]} alt="Product" className="w-16 h-16 object-cover border rounded" />
                      <span className="font-medium">{product.name}</span>
                    </td>
                    <td className="px-4 py-3">{product.category}</td>
                    <td className="px-4 py-3 hidden md:table-cell">
                      {currency}
                      {product.offerPrice}
                    </td>
                    <td className="px-4 py-3">
                      <div className="relative inline-flex items-center cursor-pointer gap-3">
                        <input
                          id={`stock-toggle-${product._id}`}
                          type="checkbox"
                          checked={product.inStock}
                          onChange={() => toggleStock(product._id, !product.inStock)}
                          className="sr-only peer"
                        />
                        <label htmlFor={`stock-toggle-${product._id}`} className="flex items-center">
                          <div className="w-12 h-7 bg-slate-300 rounded-full peer-checked:bg-blue-600 transition-colors duration-200"></div>
                          <span className="dot absolute left-1 top-1 w-5 h-5 bg-black rounded-full transition-transform duration-200 peer-checked:translate-x-5"></span>
                        </label>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        {/* ) */}
          
          <p className="text-center text-gray-500 mt-4">No products available.</p>
        
        {/* } */}
      </div>
    </div>
  );
};

export default ProductList;


// import React, { useEffect } from 'react';
// import { useAppContext } from '../../context/AppContext';
// import toast from 'react-hot-toast';

// const ProductList = () => {
//   const { products, currency, axios, fetchProducts } = useAppContext();

//   useEffect(() => {
//     fetchProducts(); // Ensure data loads on mount
//   }, []);

//   const toggleStock = async (id, inStock) => {
//     try {
//       const { data } = await axios.post('/api/product/stock', { id, inStock });
//       if (data.success) {
//         fetchProducts();
//         toast.success(data.message);
//       } else {
//         toast.error(data.message);
//       }
//     } catch (error) {
//       toast.error(error.message);
//     }
//   };

//   return (
//     <div className="no-scrollbar flex-1 h-[95vh] overflow-y-scroll flex flex-col justify-start bg-white">
//       <div className="w-full md:p-10 p-4">
//         <h2 className="pb-4 text-xl font-semibold text-black">All Products</h2>

//         {products?.length > 0 ? (
//           <div className="w-full overflow-x-auto">
//             <table className="min-w-[700px] w-full table-auto border border-gray-300 rounded-md">
//               <thead className="bg-gray-100 text-gray-800 text-sm text-left">
//                 <tr>
//                   <th className="px-4 py-3 font-semibold">Product</th>
//                   <th className="px-4 py-3 font-semibold">Category</th>
//                   <th className="px-4 py-3 font-semibold hidden md:table-cell">Selling Price</th>
//                   <th className="px-4 py-3 font-semibold">In Stock</th>
//                 </tr>
//               </thead>
//               <tbody className="text-sm text-black">
//                 {products.map((product) => (
//                   <tr key={product._id} className="border-t border-gray-200 hover:bg-gray-50 transition">
//                     <td className="px-4 py-3 flex items-center gap-4">
//                       <img
//                         src={product.image?.[0]}
//                         alt="Product"
//                         className="w-16 h-16 object-cover border rounded"
//                       />
//                       <span className="font-medium">{product.name}</span>
//                     </td>
//                     <td className="px-4 py-3">{product.category}</td>
//                     <td className="px-4 py-3 hidden md:table-cell">
//                       {currency}
//                       {product.offerPrice}
//                     </td>
//                     <td className="px-4 py-3">
//                       <div className="relative inline-flex items-center cursor-pointer gap-3">
//                         <input
//                           id={`stock-toggle-${product._id}`}
//                           type="checkbox"
//                           checked={product.inStock}
//                           onChange={() => toggleStock(product._id, !product.inStock)}
//                           className="sr-only peer"
//                         />
//                         <label htmlFor={`stock-toggle-${product._id}`} className="flex items-center">
//                           <div className="w-12 h-7 bg-slate-300 rounded-full peer-checked:bg-blue-600 transition-colors duration-200"></div>
//                           <span className="dot absolute left-1 top-1 w-5 h-5 bg-black rounded-full transition-transform duration-200 peer-checked:translate-x-5"></span>
//                         </label>
//                       </div>
//                     </td>
//                   </tr>
//                 ))}
//               </tbody>
//             </table>
//           </div>
//         ) : (
//           <p className="text-center text-gray-500 mt-4">No products available.</p>
//         )}
//       </div>
//     </div>
//   );
// };

// export default ProductList;


// import React, { useEffect, useState } from 'react';
// import { useAppContext } from '../../context/AppContext';
// import toast from 'react-hot-toast';

// const ProductList = () => {
//   const { products, currency, axios, fetchProducts } = useAppContext();
//   const [localStock, setLocalStock] = useState({}); // local stock for faster toggle

//   useEffect(() => {
//     fetchProducts();
//   }, []);

//   useEffect(() => {
//     // When products update, sync local state
//     const stockState = {};
//     products?.forEach((p) => {
//       stockState[p._id] = p.inStock;
//     });
//     setLocalStock(stockState);
//   }, [products]);

//   const toggleStock = async (id) => {
//     const currentStock = localStock[id];
//     const newStock = !currentStock;

//     // Optimistic update
//     setLocalStock((prev) => ({ ...prev, [id]: newStock }));

//     try {
//       const { data } = await axios.post('/api/product/stock', {
//         id,
//         inStock: newStock,
//       });
//       if (data.success) {
//         toast.success(data.message);
//         fetchProducts(); // sync backend data
//       } else {
//         throw new Error(data.message);
//       }
//     } catch (error) {
//       // Revert on error
//       setLocalStock((prev) => ({ ...prev, [id]: currentStock }));
//       toast.error(error.message);
//     }
//   };

//   return (
//     <div className="no-scrollbar flex-1 h-[95vh] overflow-y-scroll flex flex-col justify-start bg-white">
//       <div className="w-full md:p-10 p-4">
//         <h2 className="pb-4 text-xl font-semibold text-black">All Products</h2>

//         {products?.length > 0 ? (
//           <div className="w-full overflow-x-auto">
//             <table className="min-w-[700px] w-full table-auto border border-gray-300 rounded-md">
//               <thead className="bg-gray-100 text-gray-800 text-sm text-left">
//                 <tr>
//                   <th className="px-4 py-3 font-semibold">Product</th>
//                   <th className="px-4 py-3 font-semibold">Category</th>
//                   <th className="px-4 py-3 font-semibold hidden md:table-cell">Selling Price</th>
//                   <th className="px-4 py-3 font-semibold">In Stock</th>
//                 </tr>
//               </thead>
//               <tbody className="text-sm text-black">
//                 {products.map((product) => (
//                   <tr key={product._id} className="border-t border-gray-200 hover:bg-gray-50 transition">
//                     <td className="px-4 py-3 flex items-center gap-4">
//                       <img
//                         src={product.image?.[0]}
//                         alt="Product"
//                         className="w-16 h-16 object-cover border rounded"
//                       />
//                       <span className="font-medium">{product.name}</span>
//                     </td>
//                     <td className="px-4 py-3">{product.category}</td>
//                     <td className="px-4 py-3 hidden md:table-cell">
//                       {currency}{product.offerPrice}
//                     </td>
//                     <td className="px-4 py-3">
//                       <div className="relative inline-block w-12 align-middle select-none transition duration-200 ease-in">
//                         <input
//                           type="checkbox"
//                           id={`toggle-${product._id}`}
//                           className="sr-only peer"
//                           checked={localStock[product._id] || false}
//                           onChange={() => toggleStock(product._id)}
//                         />
//                         <label
//                           htmlFor={`toggle-${product._id}`}
//                           className="block bg-slate-300 peer-checked:bg-blue-600 w-12 h-7 rounded-full cursor-pointer relative"
//                         >
//                           <span
//                             className="absolute left-1 top-1 w-5 h-5 bg-black rounded-full transition-transform duration-300 peer-checked:translate-x-5"
//                           ></span>
//                         </label>
//                       </div>
//                     </td>
//                   </tr>
//                 ))}
//               </tbody>
//             </table>
//           </div>
//         ) : (
//           <p className="text-center text-gray-500 mt-4">No products available.</p>
//         )}
//       </div>
//     </div>
//   );
// };

// export default ProductList;








