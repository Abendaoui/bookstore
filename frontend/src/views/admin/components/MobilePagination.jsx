import React from 'react'
import { Link } from 'react-router-dom'
const MobilePagination = () => {
    return (
        <div className="flex flex-1 justify-between sm:hidden">
            <Link
                to="/dashboard"
                className="relative inline-flex items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50"
            >
                Previous
            </Link>
            <Link
                to="/dashboard"
                className="relative ml-3 inline-flex items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50"
            >
                Next
            </Link>
        </div>
    )
}

export default MobilePagination
