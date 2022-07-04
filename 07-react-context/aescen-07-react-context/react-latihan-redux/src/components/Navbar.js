import React from 'react'
import NavbarProfile from './NavbarProfile';

function Navbar({ nama }) {
  return (
    <div>
      <h1>Navbar</h1>
      <NavbarProfile nama={nama} />
    </div>
  )
}

export default Navbar