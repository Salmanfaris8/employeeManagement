import React from 'react'
import { Link } from 'react-router-dom'
import './Header.css'

const Header = ({insideHome}) => {
  return (
    <div>
        <div>
            <div className="app-container">
                <header>
                <Link className='h1' to={'/'}>Employee Management System</Link>
                </header>
                {
                    insideHome && 
                    <nav>
                    <Link className='link' to="/add">Add Employee <i class="fa-solid fa-plus fs-5"></i></Link>
                    </nav>
                }
            </div>
        </div>
    </div>
  )
}

export default Header