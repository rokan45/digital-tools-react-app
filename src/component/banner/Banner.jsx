import React from 'react';
import BannerImg from './../../assets/banner.png'
import CircleImg from './../../assets/circle.png'
import ButtonImg from './../../assets/Play.png'
const Banner = () => {
    return (
        <div className="hero min-h-screen p-10">
            <div className="hero-content flex-col lg:flex-row-reverse px-5">
                <div className=''>
                    <img src={BannerImg} alt="Banner Image" />
                </div>
                <div className='p-2.5'>
                    <button className='flex items-center justify-center gap-1 p-2 bg-[#E1E7FF] rounded-4xl text-purple-500 text-sm font-medium'><img src={CircleImg} alt="circle icon" /> New: AI-Powered Tools Available</button>

                    <h1 className='text-5xl font-extrabold leading-15 text-balance'>Supercharge Your Digital Workflow</h1>
                    <p className="py-4 text-balance text-[#627382]">
                        Access premium AI tools, design assets, templates, and productivity
                        software—all in one place. Start creating faster today.
                        <br />
                        Explore Products
                    </p>
                    <div className='flex gap-5'>
                        <button className="btn bg-linear-to-r from-[#4F39F6] to-[#9514FA] text-white rounded-4xl ">Explore Products</button>
                        <button className="btn bg-transparent text-purple-700 rounded-4xl border-2 border-purple-600"> <img src={ButtonImg} alt="button image" />Watch Demo</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;