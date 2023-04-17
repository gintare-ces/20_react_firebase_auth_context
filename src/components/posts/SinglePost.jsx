import React from 'react'
import Card from '../ui/card/Card'

function SinglePost({ item }) {
    
    
  return (
    <li>
        <Card>
            <h3>{item.title}</h3>
            <p>{item.body}</p>
        </Card>
    </li>
  )
}

export default SinglePost