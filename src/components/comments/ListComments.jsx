// atvaizduoti sarasa su ul ir li
import React from 'react'

function ListComments({ items = [] }) {
    // parsiusim komentarus
  return (
    <div>
        {items.map((item) => (
        <div key={item.id}>One comment item</div>
      ))}
    </div>
  )
}

export default ListComments