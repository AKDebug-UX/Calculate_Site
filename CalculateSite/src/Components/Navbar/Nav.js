import React, {useState} from 'react'
import './Nav.css'

const Navbar = () => {
    return (
        <div className='headers header-bg'>
           <h1>UPRAISE CALCULATOR</h1>
           {/* <ul className={click ? 'nav-menu active' : 'nav-menu'}>
               {/* <li>
                   <Link to='/'>Home</Link>
               </li>
               <li>
                   <Link to='/product'>Product</Link>
               </li>
               <li>
                   <Link to='/company'>Company</Link>
               </li>
               <li>
                   <Link to='/pricing'>Pricing</Link>
               </li>
               
               <li>
                   <Link to='/login'>Login</Link>
               </li>
           </ul>
           <div className='hamburger' onClick={handleClick}>
            {click ? (<FaTimes size={20} style={{color: '#fff'}} />) : (<FaBars size={20} style={{color: '#fff'}} />)}
                
           </div>*/}
        </div>
    )
}

export default Navbar
