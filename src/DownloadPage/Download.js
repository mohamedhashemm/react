import React from 'react'
import Navbar from '../HomePage/Navbar';
import Footer from '../HomePage/Footer';
import Application from '../HomePage/Application';
import Clinic from '../HomePage/Clinic';
import { CartProvider } from 'react-use-cart';

 function Download() {
  return (
    <CartProvider>
    <Navbar/>
    <Clinic/>
    <Application/>
    <Footer/>  
    </CartProvider>
  )
}
export default Download;