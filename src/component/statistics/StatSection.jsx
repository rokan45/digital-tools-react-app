import React from 'react';

const StatSection = () => {
    return (
        <div className="stats bg-linear-to-r from-[#4F39F6] to-[#9514FA] text-white flex items-center justify-center p-10">
            <div className="stat place-items-center p-1">
                <div className="stat-value">50K+</div>
                <div className="stat-desc text-white">Active Users</div>
            </div>

            <div className="stat place-items-center p-1">
                <div className="stat-value text-white">200+</div>
                <div className="stat-desc text-white">Premium Tools</div>
            </div>

            <div className="stat place-items-center p-1">
                <div className="stat-value">4.9</div>
                <div className="stat-desc text-white">Rating</div>
            </div>
        </div>
    );
};

export default StatSection;