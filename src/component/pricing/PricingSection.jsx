import React from 'react';

const PricingSection = () => {
    return (
        <div className='mx-auto mt-10 px-5'>
            <div className='text-center'>
                <h1 className='text-5xl font-extrabold'>Premium Digital Tools</h1>
                <p className='text-sm text-[#627382] text-wrap mt-5'>Choose from our curated collection of premium digital products designed <br /> to boost your productivity and creativity.</p>
            </div>

            <div className='mx-auto py-8 px-15 mt-10 grid grid-cols-3 gap-4'>
               <div className='card bg-base-100 shadow-sm p-4'>
                 <div className="card-body">
                    <div className="mt-2">
                        <h2 className="text-2xl font-bold">Starter</h2>
                        <p className="text-gray-500 mt-2">Perfect for getting started</p>
                        <h2 className="mt-2"> <span className="text-2xl font-bold">$23</span>/month</h2>
                    </div>

                    <ul className="mt-6 flex flex-col gap-2 text-xs">
                       <li>Access to 10 free tools</li>
                       <li>Access to 10 free tools</li>
                       <li>Access to 10 free tools</li>
                       <li>Access to 10 free tools</li>
                       <li>Access to 10 free tools</li>
                    </ul>
                    <div className="mt-6">
                        <button className="btn w-full rounded-4xl bg-linear-to-r from-[#4F39F6] to-[#9514FA] text-white ">Get Started Free</button>
                    </div>
                </div>
               </div>
              
            </div>
        </div>
    );
};

export default PricingSection;