import React from 'react'
import PropTypes from 'prop-types'
import Button from './Button'


const Header = ({title, toggle, showAdd}) => {
  return (
    <div>
        <h1>{title}</h1>
        <Button text={showAdd ? 'Close' : "Add"} color="blue" toggle={toggle} />
    </div>
  )
}

Header.propTypes = {
    title: PropTypes.string.isRequired
}

Header.defaultProps = {
    title: "Task Tracker"
}

export default Header

