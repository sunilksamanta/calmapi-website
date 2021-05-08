import React from 'react'
import PropTypes from 'prop-types'
import githubIcon from '../images/github.png';
import npmIcon from '../images/npm.png';

const Footer = (props) => (
    <footer id="footer" style={props.timeout ? {display: 'none'} : {}}>
        <div style={{display: 'flex', justifyContent: 'center', marginBottom: '24px'}}>
          <a href={'https://github.com/sunilksamanta/calmapi'} target={'_blank'} style={{borderBottom: 'none', cursor: 'pointer', margin: '0 24px', width: '32px', height: '32px'}}><img style={{width: '100%', filter: 'invert(1)'}} src={githubIcon}/> </a>
          <a href={'https://www.npmjs.com/package/calmapi'} target={'_blank'} style={{borderBottom: 'none', cursor: 'pointer', margin: '0 24px', width: '32px', height: '32px'}}><img style={{width: '100%'}} src={npmIcon}/> </a>
        </div>
        <p className="copyright">&copy; CALM API</p>
    </footer>
)

Footer.propTypes = {
    timeout: PropTypes.bool
}

export default Footer
