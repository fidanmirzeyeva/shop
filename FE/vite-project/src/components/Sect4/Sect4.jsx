import React, { useContext, useEffect, useState } from 'react'
import './Sect4.scss'
import { MainContext } from '../../context/MainProvider'
import { Link } from 'react-router-dom'
function Sect4() {
    const{addBasket,addWish} = useContext(MainContext)
    const [products, setproducts] = useState([])

    function showPrice(params) {
       setproducts([...products.sort((a,b) => (a.price > b.price) ? 1 : ((b.price > a.price) ? -1 : 0))])
        
    }
    const [search, setsearch] = useState('')
    useEffect(() => {
     showProducts()
    }, [])
async function showProducts() {
    const res = await fetch("http://localhost:5000/user")
    const data = await res.json()
    setproducts(data)
    
}

    
  return (
  <>
  <div className="sect3">
    <div className="sect4_hero">
    <div className="sect4_text"></div>
    <div className="inp">
        <button onClick={()=>showPrice()}>ucuz-baha</button>
        <input type="text" placeholder='Search...' value={search} onChange={(e)=>setsearch(e.target.value)}/>
    </div>
    <div className="sect4_cards" >

        {products.filter((x)=>x.name.toLowerCase().includes(search.toLowerCase()))
     
           
        .map((x)=>(
            <div className="card" key={x._id}>
                <img src={x.image} alt="" />
                <div className="card_text_">
                    <h3>{x.name}</h3>
                    <p>${x.price}</p>
                    <div className="sect4_btn">
                    <button onClick={()=>addBasket(x)}>Add Basket</button>
                    <button><Link to={`/detail/${x._id}`}>Detail</Link></button>
                    <button onClick={()=>addWish(x)}>WishList</button>
                    </div>

                </div>
            </div>
        ))}

    </div>
  </div>
  </div>
  </>
  )
}

export default Sect4
