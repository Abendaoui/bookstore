import React from 'react'
import classNames from 'classnames'
import { Link, useLocation } from 'react-router-dom'
import {  FcReadingEbook } from 'react-icons/fc'
import { DASHBOARD_SIDEBAR_LINKS } from '../../lib/constants'

const linkClass =
	'flex items-center gap-2 font-light px-3 py-2 hover:bg-neutral-700 hover:no-underline active:bg-neutral-600 rounded-sm text-base'

export default function Sidebar() {
	return (
        <div className="bg-[#ebe1d9] w-60 p-3 flex flex-col shadow-xl">
            <div className="flex items-center gap-2 px-1 py-3 text-center mx-auto">
                <FcReadingEbook fontSize={24} />
                <span className="text-gray-900 text-2xl">Book</span>
            </div>
            <div className="py-8 flex flex-1 flex-col gap-0.5">
                {DASHBOARD_SIDEBAR_LINKS.map((link) => (
                    <SidebarLink key={link.key} link={link} />
                ))}
            </div>
            {/* <div className="flex flex-col gap-0.5 pt-2 border-t border-neutral-700">
                {DASHBOARD_SIDEBAR_BOTTOM_LINKS.map((link) => (
                    <SidebarLink key={link.key} link={link} />
                ))}
                <div className={classNames(linkClass, 'cursor-pointer text-red-500')}>
                    <span className="text-xl">
                        <HiOutlineLogout />
                    </span>
                    Logout
                </div>
            </div> */}
        </div>
    )
}

function SidebarLink({ link }) {
	const { pathname } = useLocation()

	return (
        <Link
            to={link.path}
            className={`rounded-xl ${classNames(pathname === link.path ? 'bg-neutral-600 text-white' : 'text-gray-500', linkClass)}`}
        >
            <span className="text-xl text-black">{link.icon}</span>
            {link.label}
        </Link>
    )
}
