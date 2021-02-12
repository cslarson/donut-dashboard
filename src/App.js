import React from 'react'
import { Root, Routes, addPrefetchExcludes } from 'react-static'
//
import { Link, Router } from 'components/Router'
import Dynamic from 'containers/Dynamic'
import DonutLogo from './img/donut-logo.png';
import EthtraderDonutsLogo from './img/ethtraderdonuts.png';
import Links from './components/Links'
import Ticker from './components/Ticker'
import Footer from './components/Footer'

import './app.css'

// Any routes that start with 'dynamic' will be treated as non-static routes
addPrefetchExcludes(['dynamic'])

function App() {
  return (
    <Root>
      <div className="App">
        <div className="topnav-group">
            <div className="topnav">
              <Link to="/">Home</Link>
              <Link to="/register">How to Register</Link>
              <Link to="/claim">How to Claim</Link>
              <Link to="/distribution">Distributions</Link>
            </div>
        </div>
        <header className="header-style">
          <div className="inline-block">
            <img src={DonutLogo} className="App-logo" alt="logo" />
          </div>
          <div className="inline-block">
            <img src={EthtraderDonutsLogo} alt="Donuts Logo" />
          </div>
        </header>

        <div className="body-style">
          <Ticker></Ticker>
          <div className="container">
            <React.Suspense fallback={<em>Loading...</em>}>
              <Router>
                <Dynamic path="dynamic" />
                <Routes path="*" />
              </Router>
            </React.Suspense>
          </div>
          <div className="break-container"></div>
          <div className="links-container">
            <Links></Links>
          </div>
          <Footer></Footer>
        </div>
      </div>
    </Root>
  )
}

export default App
