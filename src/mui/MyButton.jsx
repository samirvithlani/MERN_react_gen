import { Button } from '@mui/material'
import React from 'react'

export const MyButton = (props) => {
  return (
    <Button size={props.size} color="primary" variant={props.variant}>{props.name}</Button>
  )
}
