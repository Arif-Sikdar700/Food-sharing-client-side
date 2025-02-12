import React from 'react'
import Navbar from '../sharing/Navbar';
import { Outlet } from 'react-router-dom';
import Footer from '../sharing/Footer';

export default function MainLayouts() {
  return (
    <div className='max-w-7xl mx-auto'>
        <Navbar/>
        <Outlet/>
        <Footer/>
    </div>
  )
}
