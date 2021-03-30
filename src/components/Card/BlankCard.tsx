import React from 'react';
import './Card.scss'
import Card from "./Card";
import SofaImg from "../../assets/sofa.png";

const BlankCard: React.FC = () => {
  return (
    <div className={'card'}>
      <div className="card__content blank">
        <div className="card__content__cell gray">
          Рейтинг
        </div>
        <div className="card__content__cell">
          Цена
        </div>
        <div className="card__content__cell gray">
          Цвет
        </div>
        <div className="card__content__cell">
          Материал
        </div>
        <div className="card__content__cell gray">
          Размеры
        </div>
        <div className="card__content__cell">
          Механизм
        </div>
        <div className="card__content__cell gray">
          Продавец
        </div>
      </div>
    </div>
  );
};

export default BlankCard;
