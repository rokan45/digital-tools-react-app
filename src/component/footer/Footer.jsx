import React from 'react';

const Footer = () => {
    return (
        <footer className="bg-base-200 px-10 py-14">
            {/* Top Section */}
            <div className="flex items-start justify-between gap-10">

                {/* Brand */}
                <div className="max-w-xs">
                    <h1 className="text-2xl font-extrabold bg-linear-to-r from-[#4F39F6] to-[#9514FA] bg-clip-text text-transparent">
                        DigiTools
                    </h1>
                    <p className="text-sm text-gray-500 mt-3 leading-relaxed">
                        Premium digital tools for creators, professionals, and businesses. Work smarter with our suite of powerful tools.
                    </p>
                </div>

                {/* Links */}
                <div className="flex flex-col">
                    <h6 className="font-bold text-xs uppercase tracking-widest text-gray-400 mb-3">Product</h6>
                    <a className="link link-hover text-sm mb-1">Features</a>
                    <a className="link link-hover text-sm mb-1">Pricing</a>
                    <a className="link link-hover text-sm mb-1">Templates</a>
                    <a className="link link-hover text-sm mb-1">Integrations</a>
                </div>

                <div className="flex flex-col">
                    <h6 className="font-bold text-xs uppercase tracking-widest text-gray-400 mb-3">Company</h6>
                    <a className="link link-hover text-sm mb-1">About</a>
                    <a className="link link-hover text-sm mb-1">Blog</a>
                    <a className="link link-hover text-sm mb-1">Careers</a>
                    <a className="link link-hover text-sm mb-1">Press</a>
                </div>

                <div className="flex flex-col">
                    <h6 className="font-bold text-xs uppercase tracking-widest text-gray-400 mb-3">Resources</h6>
                    <a className="link link-hover text-sm mb-1">Documentation</a>
                    <a className="link link-hover text-sm mb-1">Help Center</a>
                    <a className="link link-hover text-sm mb-1">Community</a>
                    <a className="link link-hover text-sm mb-1">Contact</a>
                </div>

                {/* Social */}
                <div className="flex flex-col">
                    <h6 className="font-bold text-xs uppercase tracking-widest text-gray-400 mb-4">Social</h6>
                    <div className="flex gap-3">
                        {/* Twitter */}
                        <a className="btn btn-sm btn-circle btn-ghost border border-gray-300">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" className="fill-current">
                                <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
                            </svg>
                        </a>
                        {/* YouTube */}
                        <a className="btn btn-sm btn-circle btn-ghost border border-gray-300">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" className="fill-current">
                                <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z" />
                            </svg>
                        </a>
                        {/* Facebook */}
                        <a className="btn btn-sm btn-circle btn-ghost border border-gray-300">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" className="fill-current">
                                <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z" />
                            </svg>
                        </a>
                    </div>
                </div>
            </div>

            {/* Divider */}
            <div className="border-t border-gray-300 mt-10 pt-6 flex items-center justify-between text-sm text-gray-400">
                <p>© {new Date().getFullYear()} DigiTools. All rights reserved.</p>
                <div className="flex gap-5">
                    <a className="link link-hover">Privacy Policy</a>
                    <a className="link link-hover">Terms of Service</a>
                    <a className="link link-hover">Cookies</a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;