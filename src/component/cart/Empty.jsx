import React from 'react';
import { IoCartOutline } from 'react-icons/io5';


const Empty = () => {
    return (
        <div className='mx-10 flex flex-col justify-center  items-center p-20 bg-gray-50 rounded-2xl'>
           <div className='mt-5'><IoCartOutline className='text-6xl text-gray-400 *:' /></div>
           <h2 className='font-bold text-gray-400'>Your cart is empty</h2>
        </div>
    );
};

export default Empty;