import React from 'react';

import caret from './images/caret.svg';

export const ProductDesc = ({ name, description, rating, features, shade }) => (
  <section>
    <div className="product-name">
      <h2 className="product-name__title">{name}</h2>
      <p className="product-name__text">{description}</p>
    </div>
    <figure className="rating-block">
      <div className="rating-block__stars">
        <img  src={rating} alt="Product Rating" /> 
      </div>
      <div className="rating-block__arrow">
        <img src={caret} alt="View All Ratings" />
      </div>
    </figure>
    <section>
      <div className="description">
        <div className="description-row">
          <div className="description-row__cell">
            <h4>Benefits</h4>
            <p>{features.benefits}</p>
          </div>
          <div className="description-row__cell">
            <h4>Finish</h4>
            <p>{features.finish}</p>
          </div>
        </div>
        <div className="description-row">
          <div className="description-row__cell">
            <h4>Coverage</h4>
            <p>{features.coverage}</p>
          </div>
          <div className="description-row__cell">
            <h4>Key Ingredients</h4>
            <p>
              {features.keyIngredients} <a href="https://www.garnier.co.uk/">More</a>
            </p>
          </div>
        </div>
      </div>
    </section>
    <section>
      <div className="shade-block">
        <span>{shade.name}</span>
        <div className="shade-block__color" style={{ background: shade.color }}></div>
      </div>
    </section>
  </section>
);
