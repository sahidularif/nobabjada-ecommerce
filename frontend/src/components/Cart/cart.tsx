import React from "react";
import headphone from "../../images/headphone-2.png";
import { BsBagPlusFill, BsBagDashFill } from "react-icons/bs";
import {
  useAppDispatch,
  useAppSelector,
} from "../../redux/hooks/useTypeSelector";
import { Product } from "../../redux/reducer/productSlice";
import { addProductToCart, removeProductFromCart } from "../../redux/reducer/cartSlice";
import { MdClose } from "react-icons/md";

const Cart = () => {
  const dispatch = useAppDispatch()
  const { products, totalPrice } = useAppSelector((state) => state.cart);
  // console.log(products);
  const handleDeleteProduct = (pd:number)=>{
    dispatch(removeProductFromCart({ id: pd, full: true }))
  }

  const handleIncreaseProduct = (product:Product) => {
    dispatch(addProductToCart({product:product}))
  }

  const handleDecreaseProduct = (pd: number) => {
    dispatch(removeProductFromCart({id: pd}))
  }
  return (
    <div>
      {products &&
        products.map((pd) => (
          <div className="cart_item">
             <button
              onClick={() => handleDeleteProduct(pd.id)}
              className="bg-accent-300 text-neutral-900 delete_pd" style={{'border': 'none'}}
            >
             <MdClose fontSize={50} className="" title="Delte from cart"/>
            </button>
            <div className="cart_body">
              <img src={pd.img_url} alt="cart item" />
              <div className="item_description">
                <h6>Beats Solo Headphone</h6>
                <p>Sub total: ${pd.price * pd.quantity} </p>
               
              </div>
            </div>
            <div className="cart_item_btn">
              <span className="tf-ion-android-remove-circle" onClick={() =>handleDecreaseProduct(pd.id)}></span>             
              &nbsp;{pd.quantity}&nbsp;
              <span className="tf-ion-android-add-circle" onClick={() => handleIncreaseProduct(pd)}> </span>
            </div>
            
          </div>
        ))}
       
    </div>
  );
};

export default Cart;
