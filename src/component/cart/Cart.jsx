import React from 'react';
import TraiIng from './../../assets/products/design-tool.png'

const Cart = () => {
    return (
        <div className='mx-10 py-10 px-5 bg-gray-10 shadow-lg rounded-2xl'>
            <h2 className='text-xl font-bold'>Your Cart</h2>

            <div className='flex items-center justify-between mt-5 border bg-gray-50 p-7 rounded-3xl'>
                <div className='flex items-center gap-5'>
                    <img src={TraiIng} alt="" />
                    <div>
                        <h2 className='text-lg font-bold'>AI Writing Pro</h2>
                        <h3 className='text-sm font-bold text-gray-400'>29$</h3>
                    </div>
                </div>
                <div>
                    <button className='text-lg font-bold text-red-500'>Remove</button>
                </div>
            </div>
            <div className='flex items-center justify-between mt-5 border bg-gray-50 p-7 rounded-3xl'>
                <div className='flex items-center gap-5'>
                    <img src={TraiIng} alt="" />
                    <div>
                        <h2 className='text-lg font-bold'>AI Writing Pro</h2>
                        <h3 className='text-sm font-bold text-gray-400'>29$</h3>
                    </div>
                </div>
                <div>
                    <button className='text-lg font-bold text-red-500'>Remove</button>
                </div>
            </div>
           

            <div className='mt-5 flex justify-between p-5'>
                <h3 className='text-lg'>Total</h3>
                <span className='font-bold text-lg'>$78</span>
            </div>
            <button className='btn w-full rounded-4xl bg-linear-to-r from-[#4F39F6] to-[#9514FA] text-white '>Proceed to Checkout</button>

        </div>
    );
};

export default Cart;