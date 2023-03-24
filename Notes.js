import React from 'react'

function Notes() {
  return (
    <div className='container'>
        <div className='logo'>
            Edunol
        </div>
        <ul className='list'>
        <li><a className="active" href="#home">Home</a></li>
        <li><a href="#news">Explore</a></li>
        <li><a href="#contact">Features</a></li>
        <li ><button className='btn' type="submit">Sign In</button></li>
        </ul>
    </div>
  )
}

export default Notes
