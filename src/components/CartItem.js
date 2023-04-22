import React, { useContext } from 'react';
//import link
import { Link } from 'react-router-dom';

//import icons
import { IoMdAdd, IoMdClose, IoMdRemove } from 'react-icons/io';

//import cart context
import { CartContext } from '../contexts/CartContext';

const CartItem = ({ item }) => {
  const { removeFromCart, increaseAmount, decreaseAmount } = useContext(CartContext)
  //destructure item
  const { id, title, price, image, amount } = item;
  return <div className='flex gap-x-4 py-2 lg:px-6 border-b border-gray-200 w-full font-light text-gray-500 '>
    <div className='flex w-full min-h-[150px] items-center gap-x-4'>
      {/*image */}
      <div>
        <Link to={`/product/${id}`}>
          <img className='max-w-[80px]' src={image} alt="" />
        </Link>
      </div>
      <div className='w-full flex flex-col'>
        <div className='flex justify-between mb-2'>
          {/*title & icon*/}
          <div>
            {/*title*/}
            <Link className='text-sm uppercase font-medium max-w-[240] text-primary hover:underline' to={`/product/${id}`}>{title}</Link>
          </div>
          {/*remove icon*/}
          <div onClick={() => removeFromCart(id)} className='text-xl cursor-pointer'><IoMdClose className='text-gray-500 hover:text-red-500 transition ' /></div>
        </div>
        <div className=' flex gap-x-2 h-[36px] text-sm'>
          {/*quantity */}
          <div className='flex flex-1 max-w-[100px] items-center h-full border text-primary font-medium'>
            {/* minus icon */}
            <div onClick={() => decreaseAmount(id)} className=' flex-1 flex justify-center items-center cursor-pointer'>
              <IoMdRemove />
            </div>
            {/* amount */}
            <div className='h-full flex justify-center px-2 items-center'>
              {amount}
            </div>
            {/* plus icon */}
            <div onClick={() => increaseAmount(id)} className='flex-1 flex justify-center items-center cursor-pointer'>
              <IoMdAdd />
            </div>
          </div>
          {/*item price */}
          <div className='flex flex-1 items-center justify-around'>$ {price}</div>
          {/*final price */}
          {/* make price at 2 decimal places */}
          <div className='flex flex-1 justify-end items-center text-primary font-medium  '>{`$ ${parseFloat(price * amount).toFixed(2)}`}</div>
        </div>
      </div>
    </div>
  </div >;
};

export default CartItem;
