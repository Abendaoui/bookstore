import React from 'react'
import Pagination from 'react-js-pagination';
const Paginate = ({ total, current_page, per_page, handleChange }) => {
    return (
        <div className="flex items-center justify-between border-t border-gray-200 bg-gray-100 px-4 py-3 sm:px-6">
            <Pagination
                totalItemsCount={total && 8}
                activePage={current_page}
                itemsCountPerPage={per_page}
                onChange={(page) => handleChange(page)}
                itemClass="inline-block mx-1"
                linkClass="px-3 py-2 rounded-lg bg-gray-200 text-gray-700 hover:bg-gray-300 hover:text-gray-900"
                activeLinkClass="rounded-lg bg-[#d2bba8] text-white"
                disabledClass="rounded-lg bg-gray-200 text-gray-500 cursor-not-allowed"
            />
        </div>
    );
};

export default Paginate
