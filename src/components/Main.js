import PropTypes from 'prop-types'
import React from 'react'
import aboutImage from '../images/about.jpeg'

class Main extends React.Component {
  render() {
    let close = (
      <div
        className="close"
        onClick={() => {
          this.props.onCloseArticle()
        }}
      ></div>
    )

    return (
      <div
        ref={this.props.setWrapperRef}
        id="main"
        style={this.props.timeout ? { display: 'flex' } : { display: 'none' }}
      >

        <article
          id="about"
          className={`${this.props.article === 'about' ? 'active' : ''} ${
            this.props.articleTimeout ? 'timeout' : ''
          }`}
          style={{ display: 'none' }}
        >
          <h2 className="major">Calm API</h2>
          <span className="image main">
            <img style={{filter: 'grayscale(100%)'}} src={aboutImage} alt="" />
          </span>
          <a style={{borderBottom: 'none'}} href={'https://github.com/sunilksamanta/calmapi'} target={'_blank'} rel="noreferrer"><img alt="GitHub Repo stars" src="https://img.shields.io/github/stars/sunilksamanta/calmapi?label=Github%20Stars&style=for-the-badge"/></a>
          <a style={{borderBottom: 'none'}} href={'https://www.npmjs.com/package/calmapi'} target={'_blank'} rel="noreferrer"><img style={{marginLeft: '2px'}} alt="npm" src="https://img.shields.io/npm/v/calmapi?style=for-the-badge"/></a>
          <p>
            Production ready Modular REST API Starter using NodeJS & MongoDB
          </p>
          <p>
            Install by running <code>npm i -g calmapi</code><br/>
            Run <code>calmapi</code> inside your workspace directory and follow the easy steps.
          </p>

          <h3>Requirements</h3>
          <p>
            NodeJS version 12.x and above.<br/>
            Eslint needed for development.
          </p>
          <h3>Features</h3>
          <p>
            <ul>
              <li>Production ready - Controller, Model & Service oriented architecture</li>
              <li>Modules with automated Routing (Nested Route support)</li>
              <li>Built-in Authentication Module with JWT & DB Store authentication</li>
              <li>Built-in User Module</li>
              <li>Build-in CRUD operations for modules with pagination, filters, sorters</li>
              <li>Sample Post Module (CRUD Operation Example)</li>
              <li>CRUD Module generation command line support.[Alpha]</li>
              <li>No Hidden sh*ts in your node_modules. Completely free to customize</li>
              <li>Prebuilt CRUD operation classes for Controller & Service</li>
              <li>DTO Support( Data transfer Object)</li>
              <li>Eslint rules enabled</li>
              <li>.env support</li>
              <li>And many more</li>
              <li>Build with Love</li>
            </ul>
          </p>

          <h3>Contributors</h3>
          <p>
            <ul>
              <li>Sunil Kr. Samanta</li>
              <li>Rajdip Mondal</li>
              <li>You!</li>
            </ul>

            <i>
              We love your input! We want to make contributing to this project as easy and transparent as possible, whether it's:
              Reporting a bug, Documentation, Discussing the current state of the code, Submitting a fix or Proposing new features.
            </i>

          </p>
          {close}
        </article>
      </div>
    )
  }
}

Main.propTypes = {
  route: PropTypes.object,
  article: PropTypes.string,
  articleTimeout: PropTypes.bool,
  onCloseArticle: PropTypes.func,
  timeout: PropTypes.bool,
  setWrapperRef: PropTypes.func.isRequired,
}

export default Main
