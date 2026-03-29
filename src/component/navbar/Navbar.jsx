import React, { useState } from 'react';
import { IoIosMenu } from 'react-icons/io';
import { IoCartOutline } from 'react-icons/io5';
import { RxCross2 } from 'react-icons/rx';

const navLinks = [
    {
        id: 2,
        name: "Product",
        path: "/Product",
    },
    {
        id: 3,
        name: "Features",
        path: "/Features",
    },
    {
        id: 4,
        name: "Pricing",
        path: "/Pricing",
    },
    {
        id: 5,
        name: "Testimonials",
        path: "/Testimonials",
    },
    {
        id: 6,
        name: "FAQ",
        path: "/FAQ",
    },
];

const Navbar = () => {

    const [open, setOpen] = useState(false);


    return (
        <nav className='relative'>

            <div className='flex items-center justify-between mx-auto p-7 '>
                {/* logo left */}
                <div className=''>
                    <span onClick={() => setOpen(!open)} className='md:hidden cursor-pointer'>
                        {open ? <RxCross2 /> : <IoIosMenu />}
                    </span>

                    <h1 className='text-xl font-bold bg-linear-to-r from-[#4F39F6] to-[#9514FA] bg-clip-text text-transparent hidden md:block'>
                        <span className='text-2xl font-extrabold'>D</span>igi
                        <span className='text-2xl font-extrabold'>T</span>ools
                    </h1>
                </div>

                {/* Desktop link center*/}
                <div className='hidden md:block'>
                    <ul className='flex'>
                        {
                            navLinks.map(link => (<li key={link.id} className='mr-3 cursor-pointer font-medium hover:text-blue-500 transition'>{link.name}</li>))
                        }
                    </ul>
                </div>

                {/* nav right container */}
                <div className='flex items-center justify-center gap-4'>
                    <div>
                        <IoCartOutline />
                    </div>
                    <span className='font-semibold text-sm'>Login</span>
                    <button className='btn bg-linear-to-r from-[#4F39F6] to-[#9514FA] text-white rounded-4xl '>
                        Get Started
                    </button>
                </div>
            </div>

            {/* Mobile drop down menu */}
            {
                open && (<ul className='md:hidden bg-white shadow-md px-7 py-4 absolute w-full top-18    left-0 z-10 gap-4'>
                    {
                        navLinks.map(link => (<li key={link.id} className='cursor-pointer font-medium hover:text-blue-500 transition' onClick={() => setOpen(false)} >{link.name}</li>))
                    }
                </ul>)
            }
        </nav>
    );
};

export default Navbar;