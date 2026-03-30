import React, { use } from 'react';
import { FaCheck } from 'react-icons/fa';

const PricingSection = ({ pricingPromise }) => {
    // console.log(pricingPromise)
    const PricingData = use(pricingPromise)

    return (
        <div className='mx-auto mt-10 px-5'>
            <div>
                <div className='text-center'>
                    <h1 className='text-5xl font-extrabold'>Premium Digital Tools</h1>
                    <p className='text-sm text-[#627382] text-wrap mt-5'>Choose from our curated collection of premium digital products designed <br /> to boost your productivity and creativity.</p>
                </div>
            </div>
            <div className='mx-auto py-8 px-13 mt-10 grid grid-cols-3 gap-7'>
                {
                    PricingData.map((priceData, index) => {
                        const { plan, description, price, priceType, features, buttonText, highlighted } = priceData

                        return (
                            <div key={index} className={`card bg-base-100 shadow-lg p-4 ${highlighted===true?"bg-linear-to-b from-[#4F39F6] to-[#9514FA] text-white scale-110":"bg-base-100"}`}>
                                <div className="card-body">
                                    <div className="mt-2">
                                        <h2 className="text-2xl font-bold">{plan}</h2>
                                        <p className=" mt-2">{description}</p>
                                        <h2 className="mt-2"> <span className="text-2xl font-bold">${price}</span>/{priceType}</h2>
                                    </div>

                                    <ul className="mt-6 flex flex-col gap-2 text-xs">
                                        {features.map((feature, index) => (
                                            <li key={index} className="flex items-center gap-2">
                                                <span className="text-purple-600"><FaCheck className="text-green-500"/></span>
                                                {feature}
                                            </li>
                                        ))}
                                    </ul>
                                    <div className="mt-6">
                                        <button className="btn w-full rounded-4xl bg-linear-to-r from-[#4F39F6] to-[#9514FA] text-white ">{buttonText}</button>
                                    </div>
                                </div>
                            </div>
                        )

                    }

                    )
                }

            </div>

        </div>
    );
};

export default PricingSection;