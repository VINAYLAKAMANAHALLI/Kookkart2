import React from 'react'
import { categories } from '../assets/assets'
import { useAppContext } from '../context/AppContext'

const Categories = () => {

    const {navigate} = useAppContext()

  return (
    <div className='mt-16'>
      <p className='text-2xl md:text-3xl font-extrabold '>Categories</p>
      <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 lg:grid-cols-6 xl:grid-cols-5 mt-9 gap-5'>

        {categories.map((category, index)=>(
            <div key={index} className='group cursor-pointer py-4  gap-9 rounded-lg flex flex-col justify-center items-center hover:scale-105 transition-all duration-300 ease-in-out'
            style={{backgroundColor: category.bgColor}}
            onClick={()=>{
                navigate(`/products/${category.path.toLowerCase()}`);
                scrollTo(0,0)
            }}
            >
                <img src={category.image} alt={category.text} className='group-hover:scale-120 transition max-w-28'/>
                <p className='text-xl font-bold'>{category.text}</p>
            </div>
                    
        ))}

        
      </div>
    </div>
  )
}

export default Categories
