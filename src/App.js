import logo from './logo.svg';
import './App.css';

import { useState } from 'react';

function App() {

  const [product,setProduct] = useState([]);
  const productList = ['Tesla','Doggy Bag','Chicken Nuggets','Reason to do my Interactive Portfolio'];
  const [addClick,setClick] = useState(0);

  function addProduct(e){
    e.preventDefault(); //prevents html form from redirecting
    setClick(addClick+1); //counts clicks to account for item numbers in cart
    const oneProduct = e.target.elements.products.value; //listener of select option
    const itemIndex = product.findIndex(item => item.idk === oneProduct); //finds index of useState array (product) using product name and assigning it to value of itemIndex
    // console.log(itemIndex); //testing purposes
    // console.log(oneProduct);//testing purposes

    if(itemIndex=== -1){ //outputs -1 if element doesn't exist in array
      const cartItems = { //creates object array
        idk: oneProduct,
        quantity:1
      }
      setProduct([...product,cartItems]); //adds new cart item since it doesn't exist
    }else{
      const newCart = [...product];//pushes object into product array.
      newCart[itemIndex].quantity =  newCart[itemIndex].quantity + 1;  //update only quantity and not push
      setProduct(newCart);//updates product array with newCart's quantity
    }
  }

  return (
    <div className="App">
      {/* bruv kek this what the comments look like. doesn't show in web inspector */}
      
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>
          Shopping Cart.
        </h1>
        <form onSubmit={addProduct}>
        <label htmlFor="products">Products: </label>
        <select id="products" name="products">
          {productList.map((thing, i) => <option key={i}>{thing}</option> )}
        </select>
        <button type="submit">Add Product</button>
        </form>
        <ul>
          {/* ternary if statement to output list if product array has something. uses :null to represent no else statement */}
          {product.length>0?product.map((thing, i) => <li key={i}>{thing.idk} x {thing.quantity}</li>):null}
        </ul>
        {/* ternary if else statements for cart status */}
        {
          addClick === 0
            ? <p>Add some items...</p>
            : addClick === 1
              ? <p>You have one item in your cart.</p>
              : <p>You have {addClick} items in your cart.</p>
        }
      </header>
    </div>
  );
}

export default App;
