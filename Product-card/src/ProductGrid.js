import React from 'react';
import { ProductImage } from './ProductImage';

export const ProductGrid = ({ heading, cta1, p1Name, p1Img, p1Price, p2Name, p2Img, p2Price, p3Name, p3Img, p3Price, p4Name, p4Img, p4Price }) =>
  <section>
      <h2 className="list-title">{heading}</h2>
      <div className="product-list">
        <div className="product-card-small">
          <div className="product-card-small__frame">
            <ProductImage image={p1Img} />
          </div>
            <div className="product-card-small__text">
                <h1 className="product-card-small__title">{p1Name}</h1>
                <h4 className="product-card-small__price">{p1Price}</h4>
            </div>
            <button className ="button button_white">{cta1}</button>
        </div>
        
        <div className="product-card-small">
          <div className="product-card-small__frame">
            <ProductImage image={p2Img} />
          </div>
          <div className="product-card-small__text">
              <h1 className="product-card-small__title">{p2Name}</h1>
              <h4 className="product-card-small__price">{p2Price}</h4>
          </div>
          <button className ="button button_white">{cta1}</button>
        </div>

        <div className="product-card-small">
          <div className="product-card-small__frame">
          <ProductImage image={p3Img} />
          </div>
          <div className="product-card-small__text">
              <h1 className="product-card-small__title">{p3Name}</h1>
              <h4 className="product-card-small__price">{p3Price}</h4>
          </div>
          <button className ="button button_white">{cta1}</button>
        </div>

        <div className="product-card-small">
          <div className="product-card-small__frame">
            <ProductImage image={p4Img} />
            </div>
            <div className="product-card-small__block">
              <div className="product-card-small__text">
                  <h1 className="product-card-small__title">{p4Name}</h1>
                  <h4 className="product-card-small__price">{p4Price}</h4>
              </div>
            </div>
            <button className ="button button_white">{cta1}</button>
        </div>
    </div>
  </section>
