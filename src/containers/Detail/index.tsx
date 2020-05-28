import React from 'react'

export interface DetaiProps {
  id: number | string
  type: string
}

const Detail: React.FC<DetaiProps> = ({ id, type }) => {
  return (
    <div>
      {id} {type}
    </div>
  )
}

export default Detail
