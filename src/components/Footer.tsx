import * as React from "react"
import styled, { ThemeProvider } from "styled-components"
import theme from "../components/styled-component-theme"
import ITheme from "../components/styled-component-types"

const FooterStyled = styled('div')<ITheme>`
  width: calc(100% );
  min-height: 5rem;
  line-height: 1.5rem;
  background-color: ${props => props.theme.colorSchema.greenPrimary};
  color: ${props => props.theme.colorSchema.whitePrimary};
  font-family: ${props => props.theme.typefacePrimary};
  font-size: 1.3rem;
  position: static;
  display: block;
  padding: 1.5rem 2rem;
  box-sizing: border-box;
  text-align: center;

  @media (min-width: 1024px) {
    text-align: center;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0 auto;
    flex-wrap: wrap;
  }
`

const FooterLinks = styled('div')<ITheme>`
  color: ${props => props.theme.colorSchema.whitePrimary};
  
  a {
    cursor: pointer;
    color: ${props => props.theme.colorSchema.whitePrimary};
    text-decoration: none;
    display: block;
    margin: 10px;
    padding: 10px;
    border: 1px solid ${props => props.theme.colorSchema.whitePrimary};

    @media (min-width: 960px) {
      display: inline-block;
      margin: 0 .75rem 0 0;
      padding: 0;
      border: none;
      text-decoration: underline;

      &:last-child {
        margin-right: 0;
      }
    }
  }
  
`

const Footer = () => (
  <ThemeProvider theme={theme}>
    <FooterStyled>
      <FooterLinks>
        © 2021 <a href="http://www.warnermusic.es/" target="_blank" rel="noreferrer">Warner Music Spain S.L.</a> 
        <a target="_blank" href="http://www.wminewmedia.com/privacy/es/" rel="noreferrer">Política de Privacidad</a> 
        <a href="https://www.wminewmedia.com/cookies-policy/es/" target="_blank">Política de Cookies</a>
        <a className="ot-sdk-show-settings">Ajustes de Cookies</a> 
        <a target="_blank" rel="noreferrer" href="https://www.wminewmedia.com/terms-of-use/es/">Aviso Legal</a> 
        <a target="_blank" rel="noreferrer" href="http://www.warnermusic.es/datos/politica/warner/Hojasdereclamaciones.pdf">Hoja de Reclamaciones</a>
      </FooterLinks>
    </FooterStyled>
  </ThemeProvider>
)

export default Footer