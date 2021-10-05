import React, { FC } from "react"
import styled from "styled-components"
import theme from "../components/styled-component-theme"
import ITheme from "../components/styled-component-types"

const ProductStyled = styled('div')<ITheme>`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 90%;
  margin: 0 auto;
  position: relative;

  @media (min-width: 600px) {
    width: 100%;
    margin: 0;
  }

  .product__cover {
    width: 100%;
    display: block;
    margin: 0 0 1.5rem;
    cursor: zoom-in;

    @media (min-width: 960px) {
      margin: 0 0 1rem;
    }
  }

  .product__title {
    font-family: ${props => props.theme.typefaceSecondary};
    color: ${props => props.theme.colorSchema.greenPrimary};
    text-transform: uppercase;
    font-size: 2.1rem;
    line-height: 1.25;
    margin: 0 .5rem .5rem;

    @media (min-width: 960px) {
      opacity: .8;
      position: absolute;
      top: 0;
      right: 0;
      font-size: 1.2rem;
      font-family: ${props => props.theme.typefacePrimary};
      background-color: ${props => props.theme.colorSchema.greenPrimary};
      color: ${props => props.theme.colorSchema.whitePrimary};
      margin: 0;
      padding: .5rem;
      text-align: right;
      display: none;
    }
  }

  &:hover {
    .product__title {
      @media (min-width: 960px) {
        display: block;
      }
    }
  }

  .product__description {
    font-family: ${props => props.theme.typefaceSecondary};
    color: ${props => props.theme.colorSchema.greenPrimary};
    font-size: 1.6rem;
    line-height: 1.5;
    margin: 0 .5rem 1.5rem;

    @media (min-width: 960px) {
      display: none;
    }
  }

  .product__btns {
    position: relative;
    margin: 0 0 5rem;

    @media (min-width: 960px) {
      margin: 0;
    }
  }

  .product__btns .btn {
    color: ${props => props.theme.colorSchema.whitePrimary};
    background-color: ${props => props.theme.colorSchema.greenPrimary};
    border: none;
    padding: 1rem 1rem;
    font-size: 2rem;
    font-family: ${props => props.theme.typefaceSecondary};
    text-transform: uppercase;
    display: block;
    width: 80%;
    cursor: pointer;
    margin: 0 auto;

    @media (min-width: 600px) {
      width: 100%;
    }

    @media (min-width: 1500px) {
      font-size: 4.2rem;
    }
  }

  .product__btns__popup {
    display: none;
    background-color: rgba(0, 101, 97, .8);
    border: .2rem solid ${props => props.theme.colorSchema.greenPrimary};
    max-width: 17.5rem;
    box-sizing: border-box;
    position: absolute;
    bottom: 50%;
    right: -1rem;
  }

  .product__btns:hover .product__btns__popup {
    display: block;
  }

  .product__btns__popup li {
    text-align: center;
  }

  .product__btns__popup li a {
    display: block;
    padding: 1rem 1.5rem;
  }

  .product__btns__popup li a:hover .btn-link {
    transform: scale(1.15);
  }

  .product__btns__popup .btn-link {
    max-width: auto;
    max-height: 4rem;
    display: inline-block;
    transition: all .5s;
  }
`

type Props = {
  removeClass: (value: boolean) => void,
  showingDescription: (title:desc, desc: string) => void,
  isModalVisible: (value: boolean, modalImg: string) => void,
  title: string,
  cover: string,
  modalImg: string,
  description: string,
  buy: Array<PropsBuy>
}

type PropsBuy = {
  name: string,
  url: string,
  logo: string
}

const Product: FC<Props> = ({ showingDescription, removeClass, isModalVisible, title, cover, modalImg, description, buy }) => (
  <ProductStyled onMouseEnter={e => showingDescription(title, description)} onMouseLeave={e => removeClass(true)}>
    <img className="product__cover" src={cover} alt={`Cover del disco ${title}`} onClick={e => isModalVisible(true, modalImg)} />
    <div className="product__title">{title}</div>
    <div className="product__description">{description}</div>
    <div className="product__btns">
      <button className="btn">Comprar</button>
      <ul className="product__btns__popup">
        {buy.map((shop, index) => <li key={index}><a href={shop.url} title={`Comprar el disco en ${shop.name}`} target="_blank"><img className="btn-link" src={shop.logo} alt={`Logo de ${shop.name}`} /></a></li>)}   
      </ul>
    </div>
  </ProductStyled>
)

export default Product;