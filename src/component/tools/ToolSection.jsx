import React, { use, useState } from 'react';
import ProductCard from './ProductCard';
import Cart from '../cart/Cart';

const ToolSection = ({ cardPromise,addProduct,setAddProduct }) => {
    // console.log(cardPromise);

    const toolsData = use(cardPromise);
    // console.log(toolsData)

    // Product and cart button event handle
    const [select, setSelect] = useState("Product")

    return (
        <div className='mx-auto mt-10 px-5'>
            <div className='text-center'>
                <h1 className='text-5xl font-extrabold'>Premium Digital Tools</h1>
                <p className='text-sm text-[#627382] text-wrap mt-5'>Choose from our curated collection of premium digital products designed <br /> to boost your productivity and creativity.</p>
            </div>

            <div className='flex justify-center items-center mt-5'>
                <button onClick={() => setSelect("Product")} className={`btn rounded-4xl rounded-r-none ${select === "Product" ? "bg-linear-to-r from-[#4F39F6] to-[#9514FA] text-white" : "btn"}`}>Products</button>
                <button onClick={() => setSelect("Cart")} className={`btn rounded-4xl rounded-l-none ${select === "Product" ? "btn" : "bg-linear-to-r from-[#4F39F6] to-[#9514FA] text-white"}`}>Cart ({addProduct.length})</button>
            </div>
            {
                select === "Product" ?
                    <div className='mx-auto p-5 mt-10 grid grid-cols-1 gap-2.5 md:grid-cols-2 lg:grid-cols-3'>
                        {
                            toolsData.map((toolData, index) => <ProductCard key={index} toolData={toolData} setAddProduct={setAddProduct} addProduct={addProduct} ></ProductCard>)
                        }
                    </div>
                    :
                    <div>
                        <Cart addProduct={addProduct} setAddProduct={setAddProduct} ></Cart>
                    </div>
            }


        </div>

    );
};

export default ToolSection;