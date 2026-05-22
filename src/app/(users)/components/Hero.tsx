'use client';

import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa'
import { motion } from 'framer-motion';
import { fadeInUp, scaleIn } from '@/utils/animation';

const Hero = () => {
    return (
        <section className='py-28'>
            <div className="container max-w-7xl mx-auto px-4">
                <div className='max-w-3xl mx-auto text-center'>
                    <motion.div
                        {...scaleIn}
                        transition={{ delay: 0.2 }}
                        initial='hidden'
                        className='flex flex-col items-center mb-4'>
                        <Image src={'/profile.jpg'} alt='profile image' width={100} height={100} className='rounded-full mb-4 w-32 h-32 object-cover ring-2 ring-primary' />
                    </motion.div>

                    <motion.h1
                        {...fadeInUp}
                        transition={{ delay: 0.3 }}
                        className='text-4xl md:text-6xl font-bold mb-6'>Hi, I'm <span className='text-primary'>Vikrant Kumar</span></motion.h1>

                    <motion.p
                        {...fadeInUp}
                        transition={{ delay: 0.5 }}
                        className='text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-8'>
                        Full Stack Developer | UI/UX Enthusiast
                    </motion.p>

                    <motion.div className='flex justify-center space-x-4 mb-8'
                        {...fadeInUp}
                        transition={{ delay: 0.5 }}
                    >
                        <motion.a
                            href="https://github.com/Viku4780"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-2xl text-gray-600 hover:text-primary dark:text-gray-300 dark:hover:text-primary transition-colors"
                            whileHover={{ scale: 1.2 }}
                            whileTap={{ scale: 0.9 }}
                        >
                            <FaGithub />
                        </motion.a>
                        <motion.a
                            href="www.linkedin.com/in/vikrant-kumar-263aba40a"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-2xl text-gray-600 hover:text-primary dark:text-gray-300 dark:hover:text-primary transition-colors"
                            whileHover={{ scale: 1.2 }}
                            whileTap={{ scale: 0.9 }}
                        >
                            <FaLinkedin />
                        </motion.a>
                        <motion.a
                            href="https://x.com/Viku5748"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-2xl text-gray-600 hover:text-primary dark:text-gray-300 dark:hover:text-primary transition-colors"
                            whileHover={{ scale: 1.2 }}
                            whileTap={{ scale: 0.9 }}
                        >
                            <FaTwitter />
                        </motion.a>
                    </motion.div>

                    <motion.div className='flex flex-col md:flex-row justify-center gap-4'
                        {...fadeInUp}
                        transition={{ delay: 0.6 }}
                    >
                        <motion.div
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            <Link
                                href="/projects"
                                className="bg-primary inline-block w-full md:w-auto text-white px-8 py-3 rounded-lg hover:bg-primary/90 transition-colors"
                            >
                                View Projects
                            </Link>
                        </motion.div>
                        <motion.div
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            <Link
                                href="/contact"
                                className=" inline-block w-full bg-gray-500  md:w-auto text-gray-800 dark:text-white px-8 py-3 rounded-lg hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors"
                            >
                                Contact Me
                            </Link>
                        </motion.div>
                    </motion.div>
                </div>
            </div>
        </section >
    );
}

export default Hero
