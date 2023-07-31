import React, {  useState } from 'react';
import { RiDeleteBin6Line } from "react-icons/ri";
import { BsPlus } from "react-icons/bs";
import { HiMinusSm } from "react-icons/hi";

const CartTable = ({id}) => {
  const [counter, setCounter] = useState(0);
  const [countError, setCountError] = useState("");
  // const [cartItems, setCartItems] = useState([]);
  // console.log(cartItems)
    

    // get single product
    // useEffect(() =>{
    //   fetch(`https://dazzle-sneackers-server.onrender.com/api/v1/sneackers/${id}`)
    //     .then(res => res.json())
    //     .then(data => setCartItems(data))
    // },[id])

  const increase = () => {
    setCountError("");
    if (counter >= 11) {
      return setCountError("this quantity not available!");
    }
    setCounter((count) => count + 1);
  };
  const decrease = () => {
    setCountError("");
    if (counter <= 0) {
      return setCountError("select positive number");
    }
    setCounter((count) => count - 1);
  };
  return (
    <div className="mt-24">
      <div className=" mx-12 mx-auto">
        <table className="table w-full">
          {/* head */}
          <thead>
            <tr>
              <th></th>
              <th>Products</th>
              <th>Price</th>
              <th>Quantity</th>
              <th>Total</th>
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}
            <tr>
              <th>
                <label>
                  <RiDeleteBin6Line className="text-2xl hover:text-red-500 ease-out duration-500 cursor-pointer" />
                </label>
              </th>
              <td>
                <div className="flex items-center space-x-3">
                  <div className="avatar">
                    <div className="mask mask-squircle w-28 h-28">
                      <img src="https://htmldemo.net/shome/shome/assets/img/shop/8.webp" />
                    </div>
                  </div>
                  <div>
                    <div className="font-bold">Brown Casual</div>
                  </div>
                </div>
              </td>
              <td>$210</td>
              <td>
                <span className="border py-3 px-5 rounded cursor-pointer">
                  <HiMinusSm onClick={decrease} className="inline mr-2" />
                  {counter}
                  <BsPlus onClick={increase} className="inline ml-2" />
                </span>
                <p className="text-red-500">{countError}</p>
              </td>
              <th>$700</th>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default CartTable;
