import React, { FC, useState } from "react"
import styled, { ThemeProvider, keyframes } from "styled-components"
import Product from "../components/Product"
import Modal from "../components/Modal"
import { data } from "../data/data"

import theme from "../components/styled-component-theme"
import ITheme from "../components/styled-component-types"

const ProductsWrapperStyled = styled('div')<ITheme>`
  display: block;
  margin: 0 0 ${props => props.theme.baseSeparation};
  max-width: 110rem;
  position: relative;
  z-index: 2;

  @media (min-width: 600px) {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-gap: 2rem;
  }

  @media (min-width: 960px) {
    grid-template-columns: repeat(4, 1fr);
    margin-bottom: 5rem;
  }

  @media (min-width: 1500px) {
    grid-gap: 4rem;
  }
`

const fadeInFromLeft = keyframes`
  from {
    transform:translate(-100%, 0);
  }

  to {
    transform:translate(0, 0);
  }
`

const fadeInBiker = keyframes`
  from {
    left: 250rem;
  }

  to {
    left: 102rem;
  }
`

const ProductDescriptionStyled = styled('div')<ITheme>`
  background-color: ${props => props.theme.colorSchema.whitePrimary};
  color: ${props => props.theme.colorSchema.greenPrimary};
  padding: 2rem;
  width: calc(100% + ${props => props.theme.baseSeparation}rem *2);
  box-sizing: border-box;
  line-height: 1.5;
  display: none;
  height: 16rem;
  position: relative;

  @media (min-width: 960px) {
    display: block;
    margin: 0 -${props => props.theme.baseSeparation}rem ${props => props.theme.baseSeparation}rem;
  }

  h2 {
    font-size: 3.5rem;
    font-family: ${props => props.theme.typefaceSecondary};
    margin: 0 0 .5rem;
  }

  .animate {
    animation: ${fadeInFromLeft} .5s linear;
  }

  .description--wrap {
    max-width: 100rem;
    font-family: ${props => props.theme.typefaceSecondary};
    font-size: 2.5rem;
  }

  .biker {
    background: transparent url('../images/biker.png') 0 0 no-repeat;
    display: block;
    width: 75rem;
    height: 60rem;
    position: absolute;
    top: -32.81rem;
    left: 102rem;
    animation: ${fadeInBiker} 1s ease-out;
    animation-delay: 1s;
    animation-fill-mode: backwards;
  }
`

const Products: FC = () => {
  const [productTitle, setProductTitle] = useState<string>('Descripción del producto');
  const [productDescription, setProductDescription] = useState<string>('Haz hover sobre el disco para ver la información del mismo.');
  const [productDescriptionClass, setProductDescriptionClass] = useState<boolean>(false);
  const [showModal, setShowModal] = useState<boolean>(false);
  const [theModalImg, setTheModalImg] = useState<string>('');

  const switchClass = (bool: boolean) => setProductDescriptionClass(false);
  
  const changeDescription = (title: string, descr: string) => {
    setProductTitle(title)
    setProductDescription(descr)
    setProductDescriptionClass(true)
  }

  const openModal = (e, modalImg):void  => {
    setShowModal(prev => !prev);
    setTheModalImg(modalImg);
  }

  return (
    <>
      <ProductsWrapperStyled className="products">
        {data && data.products.map((product, index) => <Product key={product.id} showingDescription={changeDescription} removeClass={switchClass} isModalVisible={openModal} title={product.title} cover={product.cover} modalImg={product.modalImg} description={product.description} buy={product.buy} />)}
      </ProductsWrapperStyled>

      <ProductDescriptionStyled id="productDescription">
        <h2>{productTitle}:</h2>
        <div className="description--wrap">
          <p className={`${productDescriptionClass ? 'animate' : ''}`}>{productDescription && productDescription}</p>
        </div>
        <span className="biker"></span>
      </ProductDescriptionStyled>

      <Modal showModal={showModal} setShowModal={setShowModal} modalImg={theModalImg} />
    </>  
  )
}

export default Products;