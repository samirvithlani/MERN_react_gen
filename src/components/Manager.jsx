import React, { useContext } from 'react'
import { AppContext } from '../context'

export const Manager = () => {
  const {style} = useContext(AppContext)
  return (
    <div style={style}>Manager</div>
  )
}
