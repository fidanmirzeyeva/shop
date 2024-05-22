import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

function Detail() {
  const {id} = useParams()
  const [detail, setdetail] = useState([])
  useEffect(() => {
   showDetail()
  }, [])
  async function showDetail(params) {
    const res = await fetch(`http://localhost:5000/user/${id}`)
    const data = await res.json()
    setdetail(data)
  }
  
  return (
    <>
    <div className="detail">
    <div className="detail_img">
      <img src={detail.image} alt="" />
    </div>
    <div className="detail_text">
      <h3>{detail.name}</h3>
      
      <span>${detail.price}</span>
    </div>
  </div>
    </>
  )
}

export default Detail
