import React from 'react'

const Menu = props => {
  return (
    <>
      <nav className="menu_nav">
        <ul className="menu_ul">
          {props.children}
        </ul>
      </nav>
    </>
  )
}

export default Menu
