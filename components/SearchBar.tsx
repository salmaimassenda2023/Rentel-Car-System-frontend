'use client';

import React from 'react';

const SearchBar = () => {
    const handleSearch=()=>{

    }
    return (
        <div className="flex items-center justify-center mt-10">
            <div className="relative w-full max-w-md">
                <input
                    type="text"
                    placeholder="Search for  models"
                    className="w-full p-4 pl-10 text-sm text-gray-700 bg-white border border-gray-300 rounded-full shadow-sm focus:ring-2 focus:ring-primary-blue focus:outline-none"
                />
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-500"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                    />
                </svg>
            </div>
        </div>
    );
};

export default SearchBar;
