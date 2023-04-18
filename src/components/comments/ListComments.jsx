// atvaizduoti sarasa su ul ir li
import React from 'react'
import Card from '../ui/card/Card'

function ListComments({ items = [] }) {
    // parsiusim komentarus
    const formatedDateAndTime = ''
    return (
        <ul>
        {items.map((item) => (
            <li key={item.uid}>
              <Card>
                <h3>{item.authorEmail}</h3>
                <p>{item.title}</p>
                <p>{item.body}</p>
                <span>{item.timeStamp}</span>

              </Card>
        </li>
      ))}
    </ul>
  )
}


export default ListComments