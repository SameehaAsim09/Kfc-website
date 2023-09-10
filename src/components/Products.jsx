import React from 'react'
import Mycard from './Mycard';
import products, { CardsData } from '../data/products';

const Products = ({incrementCart}) => {
  return (
    <div className="row row-cols-1 row-cols-md-4 g-2">
   {
    CardsData.map(data => <Mycard key={data.id} data={data} incrementCart={incrementCart} /> )
   }
   </div>
  )
}


export default Products

