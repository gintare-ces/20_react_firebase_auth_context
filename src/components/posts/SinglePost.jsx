import React from 'react'
import Card from '../ui/card/Card'
import './singlePost.scss'
import Grid from '../ui/grid/Grid'
import { Link } from 'react-router-dom'


function SinglePost({ item }) {
    
    // atvaizduoti tagus kaip tagus (pill shape)
    const tagArr = item.tags.split(',').map((t) => t.trim())
  return (
    <li className='singlePost'>
        <Card>
             <h3>{item.title}</h3>
            <p className="author">{item.author}</p>
            <p>{item.body}</p>
            <p className="tags">
                {tagArr.map((tag) => (
                    <span key={tag}>{tag}</span>

                ))}
            </p>
            <hr />
            <Grid cols={2}>

                <p className="date">{item.date}</p>
               
                <Link className='link' to={`/posts/${item.uid}`}>Read more ....</Link>
            </Grid>
        </Card>
    </li>
  )
}

export default SinglePost