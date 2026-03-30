import React from 'react';

const Freetrail = () => {
    return (
        <div>
            <div className='mx-10 rounded-2xl mt-10 px-8 py-20 bg-linear-to-r from-[#4F39F6] to-[#9514FA] text-white mb-5'>
                <div className='text-center'>
                    <h2 className='text-4xl font-extrabold'>Ready to Transform Your Workflow?</h2>
                    <p className='text-sm text-gray-200 text-balance mt-5'>Join thousands of professionals who are already using Digitools to work smarter.Start your free trial today.</p>
                </div>
                <div className='flex flex-col justify-center items-center mt-10'>
                    <div className='flex gap-5'>
                        <button className="btn bg-white text-black rounded-4xl ">Explore Products</button>
                        <button className="btn bg-transparent text-white rounded-4xl border-2 border-white">View Pricing</button>
                    </div>
                    <div className='mt-5'>
                       <span>14-day free trial • No credit card required • Cancel anytime</span>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Freetrail;