"use client";
import React from 'react'
import CardProduct from '../CardProduct/CardProduct'
//importamos los datos del carrito de compras desde el store de redux
import { useSelector } from 'react-redux';
import { RootState } from '@/redux/store';


const Cart = () => {
    //obtenemos los datos del carrito de compras
    const cartItems = useSelector((state: RootState) => state.cart.products);
  const totalPrice = useSelector((state: RootState) => state.cart.totalPrice);

  //mostrar una leyenda si el carrito de compras esta vacio
    if (cartItems.length === 0) {
        return (
        <h1 
            style={{ textAlign: 'center', minHeight: '90vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}
        className='text-white text-4xl'>Cart is empty</h1>
        )
    }

  return (
    <div style={{marginTop:'10vh'}}>
        
        {/* Mostramos los productos del carrito de compras */}
        <div className='flex flex-wrap gap-4'>
        {cartItems.map((product) => (
            <CardProduct key={product.id} product={product} />
        ))}
        </div>
        {/* Mostramos el total de la compra */}
        <div className='mt-8'>
            <h2 className='text-4xl'>Total: ${totalPrice.toFixed(2)}</h2>
        </div>
    </div>
  )
}

export default Cart