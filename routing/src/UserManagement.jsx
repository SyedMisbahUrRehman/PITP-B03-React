import React from 'react'
import { useNavigate } from 'react-router-dom'

export default function UserManagement() {
    const jaoooo = useNavigate()
  return (
    <>
    <div>User Management (This will list All users)</div>
    <button style={{marginBlockStart:"10px"}} onClick={()=>jaoooo("/user-management/mehrab-11")}>View (Mehrab)</button>
    <button style={{marginBlockStart:"10px"}} onClick={()=>jaoooo("/user-management/anusha-420")}>View (Anusha)</button>
    <button style={{marginBlockStart:"10px"}} onClick={()=>jaoooo("/user-management/atika-007")}>View (Atika)</button>



    </>
    
  )
}
