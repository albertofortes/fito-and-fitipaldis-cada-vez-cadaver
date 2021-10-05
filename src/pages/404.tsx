import * as React from "react"
import { Link } from "gatsby"
import styled, { ThemeProvider } from "styled-components"

import theme from "../components/styled-component-theme"
import ITheme from "../components/styled-component-types"

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

    @media (min-width: 1024px) {
      max-width: 67%;
    }
  }

  .claim-wrapper {
    display: block;
    margin: 0 0 2rem;
    color: ${props => props.theme.colorSchema.greenPrimary};

    @media (min-width: 768px) {
      display: flex;
      flex-direction: column;
      align-items: center;
    }
  }

  .claim-wrapper .claim-row {
    display: block;

    @media (min-width: 768px) {
      flex-direction: row;
      display: flex;
    }
  }

  .claim {
    align-items: center;
    border: .2rem solid ${props => props.theme.colorSchema.greenPrimary};
    padding: 1.2rem 2rem;
    text-transform: uppercase;
    font-family: ${props => props.theme.typefaceSecondary};
    font-size: 1.8rem;
    text-align: center;

    @media (min-width: 768px) {
      font-size: 3.1rem;
      text-align: left;
      display: flex;
    }

    @media (min-width: 1500px) {
      font-size: 4.8rem;
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
    }

    @media (min-width: 1024px) {
      width: 20rem;
      height: auto;
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
    text-align: right;
    font-size: 1.2rem;
    margin: 1rem 0 0;

    @media (min-width: 768px) {
      font-size: 1.6rem;
    }

    @media (min-width: 1500px) {
      font-size: 2.6rem;
    }
  }
`

const NotFoundStyled = styled('div')<ITheme>`
  font-family: ${props => props.theme.typefaceSecondary};
  color: ${props => props.theme.colorSchema.greenPrimary};
  text-transform: uppercase;
  font-size: 1.2rem;
  margin: 3rem 0 0;

  @media (min-width: 768px) {
    font-size: 1.6rem;
  }

  @media (min-width: 1500px) {
    font-size: 2.6rem;
  }

  a {
    color: ${props => props.theme.colorSchema.greenPrimary};
  }
`

const NotFoundPage = () => {
  return (
    <ThemeProvider theme={theme}>
      <HeaderStyled>
        <img className='logo' src={'../images/fito-fitipaldis-logo.png'} alt="Fito & Fitipaldis" />
        <div className="claim-wrapper">
          <div className="claim-row">
            <div className="logo__claim--alternate">Cada vez cadáver</div>
            <img className='logo__claim' src={'../images/cada-vez-cadaver.png'} alt="Cada vez cadáver" />
            <div className="claim">Nuevo álbum disponible el x del x<br /> resérvalo ya y llévatelo firmado*</div>  
          </div>
          <p className="meta">*Solo disponible en formatos selectos.</p>
        </div>
        <NotFoundStyled>
          <h1>404. La página que buscas no existe.</h1>
          <p><Link to="/">Ir a la home</Link>.</p>
        </NotFoundStyled>
      </HeaderStyled>
    </ThemeProvider>
  )
}

export default NotFoundPage
