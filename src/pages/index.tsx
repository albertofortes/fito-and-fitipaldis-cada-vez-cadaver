import React from 'react'
import styled, { ThemeProvider, keyframes } from "styled-components"

import {Helmet} from "react-helmet"
import Products from "../components/Products"
import Footer from "../components/Footer"

import GlobalStyle from "../components/globalStyles"
import theme from "../components/styled-component-theme"
import ITheme from "../components/styled-component-types"

import "../third-party/onetrust.css"

const fadeInFromLeft = keyframes`
  from {
    transform:translateX(-150%);
  }

  to {
    transform:translateX(0);
  }
`

const fadeInFromTop = keyframes`
  from {
    transform:translateY(-500%);
    opacity: 0;
  }

  to {
    transform:translateY(0);
    opacity: 1;
  }
`

const fadeIn = keyframes`
  from {
    opacity: 0;
  }

  to {
    opacity: 1;
  }
`

const HeaderStyled = styled('div')<ITheme>`
  background: #83ada1 url(${props => props.theme.bgImage}) 0 0 repeat;
  box-sizing: border-box;
  padding: ${props => props.theme.baseSeparation}rem ${props => props.theme.baseSeparation}rem 7rem;
  display: flex;
  min-height: calc(100vh - 5rem);
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  color: #fff;
  font-family: ${props => props.theme.typefacePrimary};
  overflow: hidden;

  p, 
  h1 {
    margin: 0 0 1em;
  }

  .logo {
    max-width: 100%;

    @media (min-width: 768px) {
      max-width: 80%;
      margin-bottom: 1rem;
    }

    @media (min-width: 960px) {
      max-width: 50rem;
    }

    @media (min-width: 1200px) {
      max-width: 75rem;
    }
  }

  .claim-wrapper {
    display: block;
    margin: 0 0 2rem;
    color: ${props => props.theme.colorSchema.greenPrimary};
    width: 100%;

    @media (min-width: 768px) {
      display: flex;
      flex-direction: column;
      align-items: center;
    }

    @media (min-width: 960px) {
      width: auto;
    }
  }

  .claim-wrapper .claim-row {
    display: block;

    @media (min-width: 768px) {
      flex-direction: row;
      display: flex;
      align-items: center;
    }
  }

  .claim {
    align-items: center;
    border: .2rem solid ${props => props.theme.colorSchema.greenPrimary};
    padding: 1.2rem 2rem;
    text-transform: uppercase;
    font-family: ${props => props.theme.typefaceSecondary};
    font-size: 1.4rem;
    text-align: center;
    width: 100%;
    box-sizing: border-box;

    @media (min-width: 600px) {
      font-size: 1.8rem;
      padding: .6rem 2rem;
      text-align: left;
      display: flex;
      animation: ${fadeInFromTop} .75s linear;
      animation-delay: 1s;
      animation-fill-mode: backwards;
    }

    @media (min-width: 1024px) {
      font-size: 2.2rem;
      padding: 1.2rem 2rem;
    }
  }

  .logo__claim {
    margin: 0 2rem 0 0;
    width: auto;
    height: 8rem;
    max-width: 320px;
    display: none;

    @media (min-width: 768px) {
      display: block;
      animation-name: ${fadeInFromLeft};
      animation-duration: 1s;
    }

    @media (min-width: 960px) {
      width: 12rem;
      height: 100%;
    }

    @media (min-width: 1024px) {
      width: 17rem;
    }
  }

  .logo__claim--alternate {
    display: block;
    font-size: 2.6rem;
    text-align: center;
    font-family: ${props => props.theme.typefaceSecondary};
    margin: 0 0 1rem;

    @media (min-width: 768px) {
      display: none;
    }
  }

  .claim-wrapper .meta {
    text-transform: uppercase;
    width: 100%;
    text-align: center;
    font-size: 1.2rem;
    margin: 1rem 0 0;

    @media (min-width: 768px) {
      font-size: 1.6rem;
      animation: ${fadeIn} .5s linear;
      animation-delay: 2s;
      animation-fill-mode: backwards;
      text-align: right;
    }
  }
`

const IndexPage = () =>  {
  return (
    <>
    <Helmet htmlAttributes={{lang: 'es'}}>
      <meta charSet="utf-8" />
      <title>Fito &amp; Fitipaldis. Cada vez cadáver</title>
      <meta property="og:url" content="http://www.cadavezcadaver.es/" />
      <meta property="og:title" content="Fito &amp; Fitipaldis. Cada vez cadáver" />
      <meta name="description" content="Fito &amp; Fitipaldis. Cada vez cadáver." />
      <meta property="og:image" content="http://www.cadavezcadaver.es/images/og.jpg" />
      <meta property="og:site_name" content="cadavezcadaver.es" />

      <meta name="facebook-domain-verification" content="dwesox6tbnkcmo4ux7w8xnf2y8t2tr" />

      <link rel="canonical" href="http://cadavezcadaver.es/" />

    </Helmet>
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <HeaderStyled>
        <img className='logo' src={'../images/fito-fitipaldis-logo.png'} alt="Fito &amp; Fitipaldis" />
        <div className="claim-wrapper">
          <div className="claim-row">
            <div className="logo__claim--alternate">Cada vez cadáver</div>
            <img className='logo__claim' src={'../images/cada-vez-cadaver.png'} alt="Cada vez cadáver" />
            <div className="claim">Nuevo álbum disponible el 24 de septiembre<br /> Resérvalo ya y consigue gratis el DVD “20 años y una noche” con todos los formatos.</div>  
          </div>
          <p className="meta">Lámina firmada por Fito en la edición Box Superdeluxe.</p>
        </div>
        <Products />
      </HeaderStyled>
    </ThemeProvider>
    <Footer />
  </>
  )
}

export default IndexPage