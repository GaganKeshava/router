import React, { useContext } from 'react'
import { Navigate } from 'react-router-dom';
import { AuthContext } from './AuthProvider'

export const RequiredAuth = ({children}) => {
    const auth = useContext(AuthContext);

    if(!auth.user) {
        return <Navigate to='/login' />
    }

  return (
    children
  )
}
