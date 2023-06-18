import React from 'react'

const Title = ({ children }) => {
    return (
        <div className="text-center mt-3">
            <h1 className="text-2xl text-[#d2bba8] font-bold">{children}</h1>
        </div>
    )
}

export default Title
