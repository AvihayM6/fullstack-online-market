import React from 'react'
import ReactDOM from 'react-dom/client'
import {App} from './App'
import {store} from './store'
import {Provider} from 'react-redux'
import { createGlobalStyle, css } from 'styled-components'


const root = ReactDOM.createRoot(document.getElementById('root'))

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    width: 100%;
    height: 100%;
    font-size: 10px;
    ${css`
      font-family: 'Agdasima', sans-serif;
      font-family: 'Gabarito', sans-serif;
      font-family: 'Nunito', sans-serif;
    `}
  }
`

root.render(
    <Provider store={store}>
        <GlobalStyle />
        <App />
    </Provider>
)