'use client';

import Link from 'next/link';
import React, { useState } from 'react'
import { FaEnvelope, FaMapMarkerAlt, FaPhone } from 'react-icons/fa';
import { fadeInUp, fadeIn, slideInLeft, slideInRight } from '@/utils/animation';
import { motion } from 'framer-motion';

interface FormData {
  name: string;
  email: string;
  message: string;
}

type FormStatus = "idle" | "loading" | "success" | "error";

const page = () => {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    message: ""
  });

  const [status, setStatus] = useState<FormStatus>("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(formData)
      });

      if (!response.ok) {
        throw new Error("Failed to send message");
      }

      setStatus("success");
      setFormData({
        name: "",
        email: "",
        message: ""
      });

    } catch (error) {
      setStatus("error");
    }
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  }

  return (
    <div className='container max-w-7xl mx-auto py-20'>
      <motion.h1
        className="text-4xl font-bold mb-8 text-center"
        {...fadeInUp}
      >
        Contact Me
      </motion.h1>

      <div className='grid grid-cols-1 md:grid-cols-2 gap-12'>
        {/* contact info */}
        <motion.div className='space-y-8' {...slideInLeft}>
          <motion.div {...fadeInUp}>
            <h2 className='text-2xl font-semibold mb-4'>Get in Touch</h2>

            <p className='text-secondary md:w-2/3'>I'm always open to discussing new projects, creature ideas, or opportunities to be part of your visions.</p>
          </motion.div>

          <motion.div
           className='space-y-4'
            variants={fadeIn}
            initial="initial"
            animate="animate"
           >
            <motion.div
             className='flex items-center gap-4'
             variants={fadeInUp}
              whileHover={{ x: 10 }}
              transition={{ type: "spring", stiffness: 300 }}
             >
              <FaEnvelope className='w-6 h-6 text-primary' />

              <div>
                <h3 className='text-semibold'>Email:</h3>
                <a href={"mailto:vikrantkr.dev80@gmail.com"} className='text-secondary hover:text-primary'>vikrantkr.dev80@gmail.com</a>
              </div>
            </motion.div>

            <motion.div 
            className='flex items-center gap-4'
             variants={fadeInUp}
              whileHover={{ x: 10 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <FaPhone className='w-6 h-6 text-primary' />

              <div>
                <h3 className='text-semibold'>Phone</h3>
                <a href={"tel:7232812685"} className='text-secondary hover:text-primary'>7232812685</a>
              </div>
            </motion.div>

            <motion.div 
            className='flex items-center gap-4'
             variants={fadeInUp}
              whileHover={{ x: 10 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <FaMapMarkerAlt className='w-6 h-6 text-primary' />

              <div>
                <h3 className='text-semibold'>Location</h3>
                <p className='text-secondary'>Bihar, India</p>
              </div>
            </motion.div>

          </motion.div>
      </motion.div>

      {/* contact form */}
      <motion.div className='bg-white dark:bg-dark/50 p-6 rounded-lg shadow-md'   {...slideInRight}>
        <motion.form className='space-y-6' onSubmit={handleSubmit} variants={fadeIn}
            initial="initial"
            animate="animate">
          <motion.div variants={fadeInUp}>
            <label htmlFor="name" className='block text-sm font-medium mb-2'>Name</label>
            <input required value={formData.name} onChange={handleChange} type="text" id='name' name='name' placeholder='Enter your name' className='w-full px-4 py-2 rounded-md border border-gray-300 dark:border-gray-700 bg-white dark:bg-dark focus:ring-2 focus:ring-primary focus:border-none' />
          </motion.div>

          <motion.div variants={fadeInUp}>
            <label htmlFor="email" className='block text-sm font-medium mb-2'>Email</label>
            <input required value={formData.email} onChange={handleChange} type="email" id='email' name='email' placeholder='Enter your email' className='w-full px-4 py-2 rounded-md border border-gray-300 dark:border-gray-700 bg-white dark:bg-dark focus:ring-2 focus:ring-primary focus:border-none' />
          </motion.div>

          <motion.div variants={fadeInUp}>
            <label htmlFor="message" className='block text-sm font-medium mb-2'>Message</label>
            <textarea value={formData.message} onChange={handleChange} rows={4} required id='message' name='message' placeholder='Enter your message' className='w-full px-4 py-2 rounded-md border border-gray-300 dark:border-gray-700 bg-white dark:bg-dark focus:ring-2 focus:ring-primary focus:border-none' />
          </motion.div>

         <motion.button
              type="submit"
              disabled={status === 'loading'}
              className="w-full btn btn-primary"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              {status === 'loading' ? 'Sending...' : 'Send Message'}
            </motion.button>

          {
            status === "success" && (
              <motion.p 
                className="text-green-500 text-center"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
              >
                Message sent successfully!
              </motion.p>
            )
          }

          {
            status === "error" && (
             <motion.p 
                className="text-red-500 text-center"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
              >
                Failed to send message. Please try again.
              </motion.p>
            )
          }

        </motion.form>
      </motion.div>
    </div>
    </div >
  )
}

export default page;
