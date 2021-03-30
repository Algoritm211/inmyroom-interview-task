import React, {useEffect, useRef, useState} from 'react';
import Card from "../Card/Card";
import BlankCard from "../Card/BlankCard";
import './CardContainer.scss'
import {observer} from "mobx-react-lite";
import ProductsStore from '../../store/productStore'
import Loader from "../Loader/Loader";

const CardContainer:React.FC = () => {

  const {page, allProducts, loadProducts, isLoading, _productsWithPages} = ProductsStore
  const containerRef = useRef<HTMLDivElement>(null)
  const [isScrollFetching, setIsScrollFetching] = useState(false)


  useEffect(() => {
    loadProducts(page)
  }, [])

  useEffect(() => {
    setIsScrollFetching(false)
  }, [isScrollFetching])

  useEffect(() => {
    if (isScrollFetching && !isLoading) {
      if (_productsWithPages.length > page + 1) {
        setIsScrollFetching(false)
        loadProducts(page + 1)
      }
    }
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
      }
    }
  }

  const productBlock = allProducts.map((product,) => {
    return <Card key={product.id} product={product} />
  })

  return (
    <div className={'cardContainer'} ref={containerRef}>
      <BlankCard />
      {productBlock}
      {isLoading && <Loader />}
    </div>
  );
};

export default observer(CardContainer);
