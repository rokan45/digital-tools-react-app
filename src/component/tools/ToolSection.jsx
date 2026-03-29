import React, { use } from 'react';
import ProductCard from './ProductCard';

const ToolSection = ({ cardPromise }) => {
    // console.log(cardPromise);

    const toolsData = use(cardPromise);
    console.log(toolsData)

    return (
        <div className='mx-auto mt-10 px-5'>
            <div className='text-center'>
                <h1 className='text-5xl font-extrabold'>Premium Digital Tools</h1>
                <p className='text-sm text-[#627382] text-wrap mt-5'>Choose from our curated collection of premium digital products designed <br /> to boost your productivity and creativity.</p>
            </div>

            <div className='flex justify-center items-center mt-5'>
                <button className='btn rounded-4xl rounded-r-none bg-linear-to-r from-[#4F39F6] to-[#9514FA] text-white'>Products</button>
                <button className='btn rounded-4xl rounded-l-none'>Cart (2)</button>
            </div>

            <div className='mx-auto p-5 mt-10 grid grid-cols-3 gap-2.5'>
               {
                toolsData.map((toolData,index)=> <ProductCard key={index} toolData={toolData} ></ProductCard>)
               }
            </div>
        </div>

    );
};

export default ToolSection;