import React from 'react';
import TraiIng from './../../assets/products/design-tool.png'
import Empty from './Empty';

const Cart = ({ addProduct, setAddProduct }) => {
    console.log(addProduct);

    const handleRemoveBtn = (product) => {
        const filterProduct = addProduct.filter((item) => item.title !== product.title)
        setAddProduct(filterProduct);
    }

    const total = addProduct.reduce((sum, product) => sum + product.price, 0);

    return (
        <div>
            {addProduct.length === 0 ?
                <Empty></Empty>
                :
                <div className='mx-10 py-10 px-5 bg-gray-10 shadow-lg rounded-2xl'>
                    <h2 className='text-xl font-bold'>Your Cart</h2>


                    {
                        addProduct.map((product, index) => (
                            <div key={index} className='flex items-center justify-between mt-5 border bg-gray-50 p-7 rounded-3xl'>
                                <div className='flex items-center gap-5'>
                                    <img src={product.icon} alt="" width={"30px"} height={"30px"} />
                                    <div>
                                        <h2 className='text-lg font-bold'>{product.title}</h2>
                                        <h3 className='text-sm font-bold text-gray-400'>{product.price}$</h3>
                                    </div>
                                </div>
                                <div>
                                    <button onClick={() => handleRemoveBtn(product)} className='text-lg font-bold text-red-500 cursor-pointer'>Remove</button>
                                </div>
                            </div>

                        ))
                    }


                    <div className='mt-5 flex justify-between p-5'>
                        <h3 className='text-lg'>Total</h3>
                        <span className='font-bold text-lg'>{total}$</span>
                    </div>
                    <button className='btn w-full rounded-4xl bg-linear-to-r from-[#4F39F6] to-[#9514FA] text-white '>Proceed to Checkout</button>

                </div>
            }
        </div>
    );
};

export default Cart;