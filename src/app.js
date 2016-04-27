import React from 'react'
import ReactDOM from 'react-dom'
import HeaderComponent from './header'
import MainComponent from './main'
import FooterComponent from './footer'

const app = document.getElementById('app')

ReactDOM.render(
  <div>
    <HeaderComponent title='Postal Codes - Singapore' />
    <MainComponent />
    <FooterComponent copyright='Copyright (c) 2016' />
  </div>, app)
