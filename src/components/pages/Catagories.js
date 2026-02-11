import React from 'react'
import Cardsec from '../Cardsec'

export default function Catagories(props) {
  return (
    <div className='mt-2 pt-5 container-fluid d-flex justify-content-center cardcont'>
      <Cardsec src="https://images.unsplash.com/photo-1573920011462-eb3003086611?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80" title="Phones" mode={props.mode} togglemode={props.togglemode}/>
      <Cardsec src="https://images.unsplash.com/photo-1556905055-8f358a7a47b2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80" title="Clothes" mode={props.mode} togglemode={props.togglemode}/>
      <Cardsec src="https://images.unsplash.com/photo-1606787366850-de6330128bfc?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80" title="Food" mode={props.mode} togglemode={props.togglemode}/>
      <Cardsec src="https://images.unsplash.com/photo-1496181133206-80ce9b88a853?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1171&q=80" title="Laptops" mode={props.mode} togglemode={props.togglemode}/>
      <Cardsec src="https://images.unsplash.com/photo-1535131749006-b7f58c99034b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80" title="Sports" mode={props.mode} togglemode={props.togglemode}/>
      <Cardsec src="https://images.unsplash.com/photo-1583209814683-c023dd293cc6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80" title="Cosmetics" mode={props.mode} togglemode={props.togglemode}/>
      <Cardsec src="https://images.unsplash.com/photo-1505740420928-5e560c06d30e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80" title="Gadgets" mode={props.mode} togglemode={props.togglemode}/>
      <Cardsec src="https://images.unsplash.com/photo-1604335398549-1b80aadd00a8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1171&q=80" title="Electronics" mode={props.mode} togglemode={props.togglemode}/>
    </div>
  )
}
