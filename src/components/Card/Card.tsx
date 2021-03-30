import React from 'react';
import SofaImg from  '../../assets/sofa.png'
import './Card.scss'
import {IProduct} from "../../types/types";

type Props = {
  product: IProduct
}

const Card:React.FC<Props> = ({product}) => {
  return (
    <div className={'card'}>
      <div className="card__image">
        <img src={product.photo} alt="product"/>
      </div>
      <div className="card__title">
        {product.name}
      </div>
      <div className="card__content">
        <div className="card__content__cell gray">
          {product.rating}
        </div>
        <div className="card__content__cell">
          {product.price.toLocaleString('ru-RU')} ₽
        </div>
        <div className="card__content__cell gray">
          {product.color}
        </div>
        <div className="card__content__cell">
          {product.material}
        </div>
        <div className="card__content__cell gray">
          {product.size}
        </div>
        <div className="card__content__cell">
          <span className={'fadeout'}>{product.mechanism}</span>
        </div>
        <div className="card__content__cell gray">
          {product.merchant}
        </div>
      </div>
      <div className="card__buttons">
        <div className="card__buttons-like">
          <i className="far fa-heart" />
        </div>
        <div className="card__buttons-buy">
          <i className="fas fa-shopping-cart"/>
          Купить
        </div>
      </div>
    </div>
  );
};

export default Card;
