import React, { useEffect } from 'react'
import { NavLink } from 'react-router-dom'
import { assets } from '../assets/assets'
import { useAppContext } from '../context/AppContext'
import toast from 'react-hot-toast'

const Navbar = () => {
    const [open, setOpen] = React.useState(false)
    const {user, setUser, setShowUserLogin, navigate, setSearchQuery, searchQuery, getCartCount, axios} = useAppContext();

    const logout = async ()=>{
      try {
        const { data } = await axios.get('/api/user/logout')
        if(data.success){
          toast.success(data.message)
          setUser(null);
          navigate('/')
        }else{
          toast.error(data.message)
        }
      } catch (error) {
        toast.error(error.message)
      }
        
    }

    useEffect(()=>{
      if(searchQuery.length > 0){
        navigate("/products")
      }
    },[searchQuery])

  return (
    <nav className="flex items-center justify-between px-6 md:px-16 lg:px-22 xl:px-32 py-4 border-b border-black  bg-amber-500  relative transition-all">

      <NavLink to='/' onClick={()=> setOpen(false)}>
        <img className="h-20 text-black" src={assets.logo} alt="logo" />
      </NavLink>

      <div className="hidden sm:flex items-center gap-14  hover:transition font-bold">
        <NavLink to='/' >Home</NavLink>
        <NavLink to='/products'>All Product</NavLink>
        <NavLink to='/Contact'>Contact</NavLink>

        <div className="hidden lg:flex items-center text-sm gap-2 border border-gray-950 px-4 rounded-full">
          <input onChange={(e)=> setSearchQuery(e.target.value)} className="py-1.5 w-full bg-transparent outline-none placeholder-gray-800" type="text" placeholder="Search products" />
         <img src={assets.search_icon} alt='search' className='w-4 h-4 '/>
        </div>

        <div onClick={()=> navigate("/cart")} className="relative cursor-pointer">
          <img src={assets.nav_cart_icon} alt='cart' className='w-6 opacity-80'/>
          <button className="absolute -top-2 -right-3 text-xs text-white bg-black  w-[18px] h-[18px] rounded-full">{getCartCount()}</button>
        </div>

      {!user ? ( <button onClick={()=> setShowUserLogin(true)} className="cursor-pointer px-8 py-2 bg-black hover:bg-green-600 transition text-white rounded-full">
          Login
        </button>)
        :
        (
          <div className='relative group'>
            <img src={assets.profile_icon} className='w-10' alt="" />
            <ul className='hidden group-hover:block absolute top-10 right-0 bg-white shadow border  border-gray-200 py-2.5 w-30 rounded-md text-sm z-40'>
              <li onClick={()=> navigate("my-orders")} className='p-1.5 pl-3 hover:bg-primary/10 cursor-pointer'>My Orders</li>
              <li onClick={logout} className='p-1.5 pl-3 hover:bg-primary/10 cursor-pointer'>Logout</li>
            </ul>
          </div>
        )}
      </div>

<div className='flex items-center gap-6 sm:hidden'>
      <div onClick={()=> navigate("/cart")} className="relative cursor-pointer">
          <img src={assets.nav_cart_icon} alt='cart' className='w-6 opacity-80'/>
          <button className="absolute -top-2 -right-3 text-xs text-white bg-primary w-[18px] h-[18px] rounded-full">{getCartCount()}</button>
        </div>
    <button onClick={() => open ? setOpen(false) : setOpen(true)} aria-label="Menu" className="">
        <img  src={assets.menu_icon} alt='menu'/>
      </button>
</div>
      

      { open && (
        <div className={`${open ? 'flex' : 'hidden'} absolute top-[60px] left-0 w-full bg-white shadow-md  hover:bg-black py-4 flex-col items-start gap-2 px-5 text-lg md:hidden`}>
        <NavLink to="/" onClick={()=> setOpen(false)} >Home</NavLink>
        <NavLink to="/products" onClick={()=> setOpen(false)}>All Product</NavLink>
        {user && 
        <NavLink to="/products" onClick={()=> setOpen(false)}>My Orders</NavLink>
        }
        <NavLink to="/ Contact" onClick={()=> setOpen(false)}>Contact</NavLink>

        {!user ? (
          <button onClick={()=>{
            setOpen(false);
            setShowUserLogin(true);
          }} className="cursor-pointer px-6 py-2 mt-2 bg-green-600  hover:bg-green-900  text-white rounded-full text-lg">
          Login
        </button>
        ) : (
          <button onClick={logout} className="cursor-pointer px-6 py-2 mt-2 bg-green-600 hover:bg-green-900 dull transition text-white rounded-full text-sm">
          Logout
        </button>
        )}
        
      </div>
      )}

    </nav>
  )
}

export default Navbar


// import React, { useEffect } from 'react';
// import { NavLink } from 'react-router-dom';
// import { assets } from '../assets/assets';
// import { useAppContext } from '../context/AppContext';
// import toast from 'react-hot-toast';

// const Navbar = () => {
//   const [open, setOpen] = React.useState(false);
//   const {
//     user, setUser, setShowUserLogin, navigate,
//     setSearchQuery, searchQuery, getCartCount, axios
//   } = useAppContext();

//   const logout = async () => {
//     try {
//       const { data } = await axios.get('/api/user/logout');
//       if (data.success) {
//         toast.success(data.message);
//         setUser(null);
//         navigate('/');
//       } else {
//         toast.error(data.message);
//       }
//     } catch (error) {
//       toast.error(error.message);
//     }
//   };

//   useEffect(() => {
//     if (searchQuery.length > 0) {
//       navigate("/products");
//     }
//   }, [searchQuery]);

//   return (
//     <nav className="flex items-center justify-between px-6 md:px-16 lg:px-20 py-4 border-b border-gray-300 bg-gradient-to-r from-orange-400 via-orange-400 to-orange-300 relative shadow-sm transition-all z-50">
//       <NavLink to='/' onClick={() => setOpen(false)}>
//         <img className="h-16 md:h-20" src={assets.logo} alt="logo" />
//       </NavLink>

//       <div className="hidden sm:flex items-center gap-10 font-semibold text-gray-800">
//         <NavLink to='/' className="hover:text-black transition">Home</NavLink>
//         <NavLink to='/products' className="hover:text-black transition">All Product</NavLink>
//         <NavLink to='/Contact' className="hover:text-black transition">Contact</NavLink>

//         <div className="hidden lg:flex items-center gap-2 border border-gray-900 rounded-full px-4 bg-white shadow-sm">
//           <input
//             onChange={(e) => setSearchQuery(e.target.value)}
//             className="py-1.5 w-full bg-transparent text-gray-900 placeholder-gray-400 outline-none"
//             type="text"
//             placeholder="Search products"
//           />
//           <img src={assets.search_icon} alt='search' className='w-4 h-4 opacity-60' />
//         </div>

//         <div onClick={() => navigate("/cart")} className="relative cursor-pointer">
//           <img src={assets.nav_cart_icon} alt='cart' className='w-6' />
//           <span className="absolute -top-2 -right-3 text-xs font-bold text-white bg-red-600 w-5 h-5 rounded-full flex items-center justify-center">
//             {getCartCount()}
//           </span>
//         </div>

//         {!user ? (
//           <button onClick={() => setShowUserLogin(true)} className="px-6 py-2 bg-black text-white rounded-full hover:bg-green-700 transition">
//             Login
//           </button>
//         ) : (
//           <div className="relative group">
//             <img src={assets.profile_icon} className="w-10 rounded-full cursor-pointer" alt="profile" />
//             <ul className="hidden group-hover:block absolute top-12 right-0 bg-white shadow-lg border rounded-md text-sm text-gray-700 w-40 z-50">
//               <li onClick={() => navigate("my-orders")} className="px-4 py-2 hover:bg-gray-100 cursor-pointer">My Orders</li>
//               <li onClick={logout} className="px-4 py-2 hover:bg-gray-100 cursor-pointer">Logout</li>
//             </ul>
//           </div>
//         )}
//       </div>

//       {/* Mobile Navbar */}
//       <div className='flex items-center gap-4 sm:hidden'>
//         <div onClick={() => navigate("/cart")} className="relative cursor-pointer">
//           <img src={assets.nav_cart_icon} alt='cart' className='w-6' />
//           <span className="absolute -top-2 -right-3 text-xs text-white bg-red-600 w-5 h-5 rounded-full flex items-center justify-center">
//             {getCartCount()}
//           </span>
//         </div>
//         <button onClick={() => setOpen(!open)} aria-label="Menu">
//           <img src={assets.menu_icon} alt='menu' />
//         </button>
//       </div>

//       {/* Mobile Menu */}
//       {open && (
//         <div className="absolute top-[72px] left-0 w-full bg-white shadow-lg py-4 px-5 text-lg flex flex-col gap-4 border-t border-gray-200 md:hidden z-40">
//           <NavLink to="/" onClick={() => setOpen(false)} className="hover:text-green-600">Home</NavLink>
//           <NavLink to="/products" onClick={() => setOpen(false)} className="hover:text-green-600">All Product</NavLink>
//           {user && <NavLink to="/my-orders" onClick={() => setOpen(false)} className="hover:text-green-600">My Orders</NavLink>}
//           <NavLink to="/Contact" onClick={() => setOpen(false)} className="hover:text-green-600">Contact</NavLink>
//           {!user ? (
//             <button
//               onClick={() => {
//                 setOpen(false);
//                 setShowUserLogin(true);
//               }}
//               className="mt-2 bg-green-600 hover:bg-green-800 text-white rounded-full px-6 py-2 text-base transition"
//             >
//               Login
//             </button>
//           ) : (
//             <button
//               onClick={logout}
//               className="mt-2 bg-red-600 hover:bg-red-800 text-white rounded-full px-6 py-2 text-base transition"
//             >
//               Logout
//             </button>
//           )}
//         </div>
//       )}
//     </nav>
//   );
// };

// export default Navbar;

