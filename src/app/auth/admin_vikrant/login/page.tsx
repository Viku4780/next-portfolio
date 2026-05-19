'use client';

import React, { useState } from 'react'
import axios from 'axios';

interface FormData {
    name: string;
    email: string;
    password: string;
}

const page = () => {
    const [formData, setFormData] = useState<FormData>({
        name: "",
        email: "",
        password: ""
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        e.preventDefault();

        const { name, value } = e.target;

        setFormData(prev => ({ ...prev, [name]: value }));
    }

    const handleSubmit = async(e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        const response = await axios.post('/api/auth/admin/login', JSON.stringify(formData));

        console.log(response.data);
    }

    return (
        <div className=' flex justify-center overflow-hidden items-center p-[2px] relative sm:w-[400px] mx-auto z-1 rounded'>

            <div className='absolute inset-0 bg-gradient-to-r from-white via-black/20 to-black/50 dark:bg-gradient-to-r dark:from-white/0 dark:via-white/20 dark:to-white/50 z-2 sm:scale-150 scale-200 animate-[spin_3s_linear_infinite]'/>

            <form onSubmit={handleSubmit} className='flex flex-col gap-5  p-1 sm:p-3 rounded shadow-lg w-full  relative z-3 bg-gray-100 dark:text-white  dark:bg-gray-900'>
                <h2 className='text-center text-2xl mt-5'><span className='text-primary font-semibold'>Admin</span> Login</h2>
                <div >
                    <p className='text-sm'>Name</p>
                    <input onChange={handleChange} name='name' type="text" placeholder='Enter your name' className='outline-none border border-dark p-2 rounded mt-1 w-full  focus:border-primary' required />
                </div>

                <div >
                    <p className='text-sm'>Email</p>
                    <input onChange={handleChange} name='email' type="email" placeholder='Enter your email' className='outline-none border border-dark p-2 rounded mt-1 w-full  focus:border-primary' required />
                </div>

                <div >
                    <p className='text-sm'>Password</p>
                    <input onChange={handleChange} name='password' type="password" placeholder='Enter password' className='outline-none border border-dark p-2 rounded mt-1 w-full focus:border-primary' required />
                </div>

                <button type='submit' className='bg-primary/50 p-2 rounded hover:bg-primary transition cursor-pointer mb-5'>Sign In</button>
            </form>
        </div>
    )
}

export default page

