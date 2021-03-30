import React, {useEffect, useRef, useState} from 'react';
import Card from "../Card/Card";
import BlankCard from "../Card/BlankCard";
import './CardContainer.scss'
import {observer} from "mobx-react-lite";
import ProductsStore from '../../store/productStore'

const CardContainer:React.FC = () => {

  const {page, allProducts, loadProducts, isLoading} = ProductsStore
  const containerRef = useRef<HTMLDivElement>(null)
  const [isScrollFetching, setIsScrollFetching] = useState(false)


  useEffect(() => {
    loadProducts()
  }, [])

  useEffect(() => {
    setIsScrollFetching(false)
  }, [isScrollFetching])


  useEffect(() => {
    document.addEventListener("scroll", handleScroll)
    return () => {
      document.removeEventListener("scroll", handleScroll)
    }
  }, [])

  const handleScroll = (event: any) => {
    if (containerRef.current !== null) {
      if ((event.target.documentElement.scrollLeft + window.innerWidth > containerRef.current.scrollWidth - 200) && !isScrollFetching && !isLoading) {
        setIsScrollFetching(true)
        console.log('loading');
      }
    }
    // console.log(containerRef.current?.scrollWidth, event.target.documentElement.scrollLeft + window.innerWidth)
  }

  const productBlock = allProducts.map((product,) => {
    return <Card key={product.id} product={product} />
  })

  return (
    <div className={'cardContainer'} ref={containerRef}>
      <BlankCard />
      {productBlock}
    </div>
  );
};

export default observer(CardContainer);
