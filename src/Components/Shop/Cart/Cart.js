
import CartBanner from '../CardBanner/CartBanner';
import BillingAddress from './BillingAddress/BillingAddress';
import CartTable from './CartTable/CartTable';
import { useParams } from 'react-router';

const Cart = () => {
    const { id } = useParams();
    

    return (
        <div>
            <CartBanner></CartBanner>
            <CartTable id ={id}></CartTable>
            <div className='flex justify-between mx-16 mt-10'>
                <button className="btn btn-wide hover:bg-red-500 ease-out duration-500 hover:border-0">Continue Shopping</button>
                <div>
                <button className="btn btn-outline mr-3">Clear Cart</button>
                <button className="btn btn-outline">Update Cart</button>
                </div>
            </div>
            <BillingAddress></BillingAddress>
        </div>
    );
};

export default Cart;