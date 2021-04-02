import React from 'react';
import SofaImg from  '../../assets/sofa.png'
import './Card.scss'
import {IProduct} from "../../types/types";
import ProductStore from '../../store/productStore'

type Props = {
  product: IProduct
}

const Card:React.FC<Props> = ({product}) => {

  const {setProductLiked, setProductUnliked, setProductToCart, removeProductFromCart} = ProductStore

  const rating = Math.floor(product.rating)
  let RatingBlock: Array<JSX.Element> = []

  for (let i = 0; i < rating; i++) {
    RatingBlock.push(<i className="fas fa-star" />)
  }

  const onBuy = () => {
    setProductToCart(product.id)
  }

  const onRemoveFromCart = () => {
    removeProductFromCart(product.id)
  }

  const onLike = () => {
    setProductLiked(product.id)
  }

  const onUnlike = () => {
    setProductUnliked(product.id)
  }

  return (
    <div className={'card'}>
      <div className="card__image">
        <img src={product.photo} alt="product"/>
      </div>
      <div className="card__title">
        {product.name}
      </div>
      <div className="card__content">
        <div className="card__content__cell rating gray">
          {RatingBlock}
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
          <a href="#">{product.merchant}</a>
        </div>
      </div>
      <div className="card__buttons">
        {!product.isLiked ? (
          <div className="card__buttons-like" onClick={onLike}>
            <i className="far fa-heart" />
          </div>
        ) : (
          <div className="card__buttons-like" onClick={onUnlike}>
            <i className="fas fa-heart-broken" />
          </div>
        )}
        {!product.inBasket ? (
          <div className="card__buttons-buy" onClick={onBuy}>
            <i className="fas fa-shopping-cart"/>
            Купить
          </div>
        ) : (
          <div className="card__buttons-buy" onClick={onRemoveFromCart}>
            <i className="fas fa-trash-alt"/>
            Удалить
          </div>
        )}

      </div>
    </div>
  );
};

export default Card;
