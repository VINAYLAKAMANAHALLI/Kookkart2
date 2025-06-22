import React, { useEffect, useState } from 'react'
import { useAppContext } from '../context/AppContext'
import { dummyOrders } from '../assets/assets'
import toast from 'react-hot-toast';


const MyOrders = () => {

    const [myOrders, setMyOrders] = useState([])
    const {currency, axios, user} = useAppContext()

    const fetchMyOrders = async ()=>{
        try {
            const { data } = await axios.get('/api/Order/user')
            if(data.success){
                setMyOrders(data.orders)
            }
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(()=>{
        if(user){
            fetchMyOrders()
        }
    },[user])

    const cancelOrder = async (orderId) => {
  if (!window.confirm("Are you sure you want to cancel this order?")) return;

  try {
    const { data } = await axios.put(`/api/order/${orderId}/cancel`);
    if (data.success) {
      toast.success("Order cancelled");
      fetchMyOrders(); // refresh list
    } else {
      toast.error(data.message);
    }
  } catch (error) {
    toast.error("Failed to cancel order");
  }
}


  return (
    <div className='mt-16 pb-16'>
        <div className='flex flex-col items-end w-max mb-8'>
            <p className='text-2xl font-medium uppercase'>My orders</p>
            <div className='w-16 h-0.5 bg-primary rounded-full'></div>
        </div>
        {myOrders.map((order, index)=>(
            <div key={index} className='border border-gray-200 rounded-lg mb-10 p-4 py-5 max-w-4xl'>
                <p className='flex justify-between md:items-center text-gray-900 md:font-medium max-md:flex-col'>
                    <span>OrderId : {order._id}</span>
                    <span>Payment : {order.paymentType}</span>
                    <span>Total Amount : {currency}{order.amount}</span>
                </p>
                {order.items.map((item, index)=>(
                    <div key={index}
                    className={`relative bg-white text-gray-800/70 ${
                order.items.length !== index + 1 && "border-b"
              } border-gray-300 flex flex-col md:flex-row md:items-center justify-between p-4 py-5 md:gap-16 w-full max-w-4xl`}>
                

                      <div className='flex items-center mb-4 md:mb-0'>
                        <div className='bg-primary/10 p-4 rounded-lg'>
                         <img src={item.product.image[0]} alt="" className='w-16 h-16' />
                         </div>
                         <div className='ml-4'>
                            <h2 className='text-xl font-medium text-gray-800'>{item.product.name}</h2>
                            <p>Category: {item.product.category}</p>
                         </div>
                       </div>

                    <div className='flex flex-col justify-center md:ml-8 mb-4 md:mb-0'>
                        <p>Quantity: {item.quantity || "1"}</p>
                        <p>Status: {order.status}</p>
                        <p>Date: {new Date(order.createdAt).toLocaleDateString()}</p>
                    </div>
                    <p className='text-primary text-lg font-medium'>
                        Amount: {currency}{item.product.offerPrice * item.quantity}
                    </p>
                    {order.status !== 'Cancelled' && (
  <div className="flex justify-end mt-4">
    <button
      onClick={() => cancelOrder(order._id)}
      className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-md text-sm"
    >
      Cancel Order
    </button>
  </div>
)}

                        
                    </div>
                ))}
            </div>
        ))}
        
      
    </div>
  )
}

export default MyOrders
