import React,{FC} from 'react'
import Image from 'next/image'
import { useDispatch } from 'react-redux';
import { addToCart } from '@/redux/cartSlice';
import { Product } from '@/app/page';

interface CardProductProps {
    product: Product
}

const CardProduct:FC<CardProductProps> = ({product}) => {
    const dispatch = useDispatch();
    const handleAddToCart = (product: Product) => {
        dispatch(addToCart({ ...product, quantity: 1 }));
      };
  return (
    <div
            
            style={{ maxWidth: "350px" }}
            className="border p-4 rounded-lg me-auto ms-auto"
          >
            {/* <img src={product.imageUrl} alt={product.name} className="h-48 w-full object-cover rounded-lg" /> */}
            <Image
              src={product.thumbnail}
              alt={product.title}
              width={300}
              height={300}
              className="h-48 w-full object-cover rounded-lg"
            />
            <h3 className="text-lg font-semibold mt-2">{product.title}</h3>
            <p className="text-gray-600">
              {product.description.slice(0, 100)}...
            </p>
            <div className="mt-2 flex justify-between items-center">
              <span className="text-xl font-bold">
                ${product.price.toFixed(2)}
              </span>
              <span className="text-yellow-500">{product.rating} ★</span>
            </div>
            <div>
              <button
              onClick={() => handleAddToCart(product)}
              className="mt-4 w-full bg-blue-500 text-white p-2 rounded"
            >
              Add to Cart
            </button>
            </div>

          </div>
  )
}

export default CardProduct