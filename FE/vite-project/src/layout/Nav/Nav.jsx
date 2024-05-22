import React from 'react'
import './Nav.scss'
import { Link } from 'react-router-dom'
import { useContext } from 'react'
import { MainContext } from '../../context/MainProvider'
function Nav() {
  const {basket} = useContext(MainContext)
  const {wish} = useContext(MainContext)
  return (
    <>
    <div className="nav_hero"><div className="nav">
        <div className="nav_img">
              <img src="https://preview.colorlib.com/theme/shop/img/logo.png.webp" alt="" />
        </div>
        <div className="nav_list">
            <ul>
                <Link to={'/'}>Home</Link>
                <Link to={'/add'}>Add</Link>
                <Link to={'/admin'}>Admin</Link>
                <Link to={'/basket'}><i className="fa-solid fa-bag-shopping"></i> {basket.length}</Link>
                <Link to={'/wish'}><i className="fa-solid fa-heart"></i> {wish.length}</Link>
               
            </ul>
        </div>
    </div></div>
    </>
  )
}

export default Nav
