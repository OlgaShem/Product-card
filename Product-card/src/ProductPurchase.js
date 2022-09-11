import React from 'react';

import caret from './images/caret.png';
import minus from './images/minus.png';
import plus from './images/plus.png';

export const ProductPurchase = ({ price }) =>
  <section>
    <div className="buy-block">
      <div className="buy-block__row">
          <div className="quantity">
            <p> Quantity </p>
            <div className="quantity__counter">
              <img src={minus} alt="Decrease Quantity"/>
            1 
              <img src={plus} alt="Increase Quantity"/>
              </div>
          </div>
            <div className="purchase">
              One time purchase  <img src={caret} alt="Select Frequency"/>
            </div>
        </div>
      <div className="buy-block__row buy-block__row_second">
        <div className="price">{price}</div>
        <div className="button-block">
          <button name="AddToBag" className ="button button_black">Add To Bag</button>
        </div>
      </div>
    </div>
  </section>