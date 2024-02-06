import React from 'react'
import Navbar from '../HomePage/Navbar';
import Content from '../HomePage/Content';
import Footer from '../HomePage/Footer';
import Application from '../HomePage/Application';
import { CartProvider } from 'react-use-cart';

 function FeaturesPage() {
  return (
    <CartProvider>
      <Navbar/>
      <Content/>
      <Application/>
      <Footer/>
    </CartProvider>
  )
}
export default FeaturesPage;
