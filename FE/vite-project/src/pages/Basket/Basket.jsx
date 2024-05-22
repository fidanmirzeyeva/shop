import React, { useContext } from 'react'
import { MainContext } from '../../context/MainProvider'

function Basket() {
  const {basket} = useContext(MainContext)
  return (
    <>
    <div className="sect4_cards" >
        {basket.map((x)=>(
            <div className="card" key={x._id}>
                <img src={x.image} alt="" />
                <div className="card_text">
                    <h3>{x.name}</h3>
                    <p>{x.price}</p>
                
                </div>
            </div>
        ))}

    </div>
    </>
  )
}

export default Basket
