import React from 'react'
import PropTypes from 'prop-types'

const Footer = (props) => (
    <footer id="footer" style={props.timeout ? {display: 'none'} : {}}>
        <h6 className="copyright">&copy; Team Auto-Voltz. Made with ❤ by <a href="https://pb-10.github.io/my-portfolio/">pranitb</a>.</h6>
    </footer>
)

Footer.propTypes = {
    timeout: PropTypes.bool
}

export default Footer
