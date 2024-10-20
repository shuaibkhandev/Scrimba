import React from 'react'
import Card from './Card'
import productImage1 from "../../public/images/katie-zaferes.png";
import starIcon from "../assets/star.png";
import data from '../data';
const Cards = () => {
  
    
  return (
    <>
 {data.map((item)=>{
        return <Card key={item.id} {...item} item={item} />
        
        // return <Card key={item.id} item={item} />
        
    })
}
    </>
  )
}

export default Cards