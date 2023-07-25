import React from 'react'
import { useParams } from 'react-router-dom'

export const Director = () => {
    var id = useParams().id;
  return (
    <div>Director
        <h1>{id}</h1>
    </div>
  )
}
