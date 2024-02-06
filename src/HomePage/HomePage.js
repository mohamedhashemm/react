import Navbar from "./Navbar";
import Header from "./Header";
import Solve from "./Solve";
import Content from "./Content";
import Clinic from "./Clinic";
import Book from "./Book";
import Application from "./Application";
import Footer from "./Footer";
import { CartProvider } from "react-use-cart";

function HomePage(){
  return(
    <CartProvider>
<Navbar/>
<Header/>
<Solve/>
<Content/>
<Clinic/>
<Book/>
<Application/>
<Footer/>
    </CartProvider>
  )
}
export default HomePage;