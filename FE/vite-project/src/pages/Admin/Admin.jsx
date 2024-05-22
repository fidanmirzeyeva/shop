import React, { useEffect, useState } from 'react'
import './Admin.scss'
function Admin() {
  const [admin, setadmin] = useState([])

  useEffect(() => {
   showAdmin()
  }, [])

  async function showAdmin() {
    const res = await fetch("http://localhost:5000/user")
    const data = await res.json()
    setadmin(data)
    
  }
  async function deleteAdmin(id) {
    const res = await fetch("http://localhost:5000/user/"+id,{method:"delete"})
    const data = await res.json()
    showAdmin()
    
  }
  
  return (
   <>
   <table>
    <thead>
      <tr>
        <th>image</th>
        <th>name</th>
        <th>price</th>
        <th>options</th>
      </tr>
    </thead>

    <tbody>
      {admin.map((x)=>(
        <tr key={x._id}>
          <td><img src={x.image} alt="" /></td>
          <td>{x.name}</td>
          <td>{x.price}</td>
          <td><button onClick={()=>deleteAdmin(x._id)}>X</button></td>
        </tr>
      ))}
    </tbody>

   </table>

   </>
  )
}

export default Admin
