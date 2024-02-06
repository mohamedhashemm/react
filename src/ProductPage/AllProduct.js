import React, { Component } from 'react'
import Navbar from '../HomePage/Navbar'
import axios from 'axios'
import { CartProvider } from 'react-use-cart'

 class AllProduct extends Component {

state={
    person:[]
}
componentDidMount(){
    axios.get('/js/Abi.json')
   .then((item)=>{
this.setState(
    {
        person:item.data.products,
    } 
)
   })
}


  render() {
    return (
      <CartProvider>
        <Navbar/>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
<div className='container'>
<div className='row'>
{this.state.person.map((result)=>(

<div className="col-md-4 text-center mb-3" key={result.id}>  
<img style={{height:"350px"}} src={result.images[0]} className="img-fluid"></img>
  <h2>{result.title}</h2>
<h6>{result.description}</h6>
     </div>
))}
</div>

        </div>
   
      </CartProvider>
    )
  }
}

export default AllProduct
