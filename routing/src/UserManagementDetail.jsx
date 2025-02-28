import React from 'react'
import { Link, useParams } from 'react-router-dom'

export default function UserManagementDetail() {
    const {slug} = useParams()
    console.log(slug)
  return (
    <>
    <div>User Management Detail for {slug}</div>
    <Link to="/user-management">Back to User Management</Link>
    </>

  )
}
