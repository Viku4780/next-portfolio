import React, { useState } from 'react'
import { motion } from 'framer-motion'
import Link from 'next/link';

const DropDown = () => {
    const [dropDownActive, setDropDownActive] = useState<boolean>(false);

    const toggleDropDown = () => {
        setDropDownActive(!dropDownActive);
    }

    return (
        <div className='relative '>
            <div role="button " className='' onClick={toggleDropDown}>
                {!dropDownActive ? (<svg
                    xmlns="http://w3.org"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="2"
                    stroke="currentColor"
                    className="w-6 h-6"
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                    />
                </svg>) : (<svg
                    xmlns="http://w3.org"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="2"
                    stroke="#FF61F8"
                    className="w-6 h-6"
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M4.5 15.75l7.5-7.5 7.5 7.5"
                    />
                </svg>)
                }

            </div>

            {dropDownActive && <motion.ul
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.1 }} className="top-[-90] w-40 p-4 rounded shadow-sm absolute bg-gray-900 right-0 z-10 flex flex-col gap-3 text-sm "
            >
                <li className='hover:text-primary cursor-pointer'><a>Logout</a></li>
                <li className='hover:text-primary cursor-pointer'>
                    <Link href={'/'}>Home</Link>
                </li>
            </motion.ul>}

        </div>
    )
}

export default DropDown
