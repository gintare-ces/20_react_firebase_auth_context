// atvaizduoti sarasa su ul ir li
import React from 'react'

function ListComments({ items = [] }) {
    // parsiusim komentarus
    return (
        <ul>
        {items.map((item) => (
            <li key={item.id}>
            <p>{item.authorEmail}</p>
            <p>{item.title}</p>
            <p>{item.body}</p>
        </li>
      ))}
    </ul>
  )
}


export default ListComments