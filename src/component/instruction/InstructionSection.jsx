import React from 'react';
import UserImg from './../../assets/user.png'
import PakageImg from './../../assets/package.png'
import RocketImg from './../../assets/rocket.png'

const InstructionSection = () => {
    return (
        <div className='mx-auto mt-10 px-5'>
            {/* Title */}
            <div className='text-center'>
                <h1 className='text-4xl font-extrabold'>Get Started in 3 Steps</h1>
                <p className='text-sm text-[#627382] text-wrap mt-5'>Start using premium digital tools in minutes, not hours.</p>
            </div>
            {/* instruction Card */}
            <div className='mt-5 grid grid-cols-3 gap-4 py-10 px-15'>
                <div className='flex flex-col items-center py-5 relative text-center shadow-lg'>
                    <span className='bg-linear-to-r from-[#4F39F6] to-[#9514FA] text-white rounded-4xl p-1 absolute top-3 right-3'>01</span>
                    <img src={UserImg} alt="" />
                    <h2 className='text-2xl font-bold mt-2'>Create Account</h2>
                    <p className='text-sm text-balance text-gray-500 mt-2'>Sign up for free in seconds. No credit card required to get started.</p>
                </div>
                <div className='flex flex-col items-center py-5 relative text-center shadow-lg'>
                    <span className='bg-linear-to-r from-[#4F39F6] to-[#9514FA] text-white rounded-4xl p-1 absolute top-3 right-3'>02</span>
                    <img src={PakageImg} alt="" />
                    <h2 className='text-2xl font-bold mt-2'>Choose Products</h2>
                    <p className='text-sm text-balance text-gray-500 mt-2'>Browse our catalog and select the tools that fit your needs.</p>
                </div>
                <div className='flex flex-col items-center py-5 relative text-center shadow-lg'>
                    <span className='bg-linear-to-r from-[#4F39F6] to-[#9514FA] text-white rounded-4xl p-1 absolute top-3 right-3'>03</span>
                    <img src={RocketImg} alt="" />
                    <h2 className='text-2xl font-bold mt-2'>Start Creating</h2>
                    <p className='text-sm text-balance text-gray-500 mt-2'>Download and start using your premium tools immediately.</p>
                </div>


            </div>
        </div>
    );
};

export default InstructionSection;