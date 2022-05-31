import React from 'react'
import PropTypes from 'prop-types'

const Button = ({text, color, toggle}) => {
  return (
    <button className='btn' style={{backgroundColor: color}} onClick={toggle}>
        {text}
    </button>
  )
}

Button.defaultProps = {
    text: "Add",
    color:"blue"
}

Button.propTypes = {
    text: PropTypes.string,
    color: PropTypes.string
}

export default Button