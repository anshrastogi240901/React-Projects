import styles from "./MealItem.module.css";
import MealItemForm from "./MealItemForm";
import {useContext} from 'react';
import CartContext from "../../../Store/CartContext";
function MealItem(props) {
  const cartCtx = useContext(CartContext);
  const price = `₹${props.price.toFixed(2)}`;
  const addToCartHandler = amount=>{
    cartCtx.addItem({
      id:props.id,
      name:props.name,
      amount:amount,
      price:props.price
    })
  };
  return (
    <li className={styles.meals}>
      <div>
        <h3>{props.name}</h3>
        <div className={styles.description}>{props.description}</div>
        <div className={styles.price}>{price}</div>
      </div>
      <div>
        <MealItemForm onAddToCart ={addToCartHandler}/>
      </div>
    </li>
  );
}
export default MealItem;
