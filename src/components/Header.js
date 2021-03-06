import PropTypes from 'prop-types'
import React from 'react'

const Header = props => (
  <header id="header" style={props.timeout ? { display: 'none' } : {}}>
    <div className="logo">
      <span className="icon fa-code"></span>
    </div>
    <div className="content">
      <div className="inner">
        <h1>CALM API</h1>
        <p>
          A Production ready REST API Generator using NodeJS & MongoDB
        </p>
        <p>
          <code style={{textTransform: 'none', marginTop: '5px'}}>npm i -g calmapi</code>
        </p>
      </div>
    </div>
    <nav>
      <ul>
        <li style={{'min-width': '180px'}}>
          <button style={{display: 'inline-block'}}
            onClick={() => {
              props.onOpenArticle('about')
            }}
          >
            More info
          </button>
        </li>
        <li style={{'min-width': '180px'}}>
          <button style={{display: 'inline-block'}}
                  onClick={() => {
                    window.open('https://docs.calmapi.dev', '_blank')
                  }}
          >
            API Docs
          </button>
        </li>
      </ul>
    </nav>
  </header>
)

Header.propTypes = {
  onOpenArticle: PropTypes.func,
  timeout: PropTypes.bool,
}

export default Header
