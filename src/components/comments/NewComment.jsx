import React from 'react'
import { useAuthCtx } from '../../store/AuthProvider'
import { useFormik } from 'formik'
import './commentBlock.scss'

// sukurti forma komentarui valdoma su formik
/*
authorEmail
body
timeStamp
title
 */
function NewComment() {
    const { user } = useAuthCtx()
    const formik = useFormik({
        initialValues: {
          authorEmail: user?.email || '',
          title: 'comment 1',
          body: 'body of comment one',
        },
        onSubmit: (values) => {
            console.log('values ===', values);
        }

    })
    formik.values.authorEmail = user?.email || ''
  return (
    <div className='commentBlock'>
        <h2 className='title'>Comment here</h2>
        <form onSubmit={formik.handleSubmit}>
            <label htmlFor="authorEmail">Author</label>
            <input 
            name={'authorEmail'}
            type="text" 
            value={formik.values.authorEmail}
            disabled
            />

            <label htmlFor="title">Title</label>
            <input 
            name={'title'}
            type="text" 
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.title}
            />
            <label htmlFor="body">Body</label>
            <textarea 
            name='body'
            type="text" 
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.body}
            cols="30"
            rows="10"
            ></textarea>

            <button type='submit'>Comment</button>
        </form>
    </div>
  )
}

export default NewComment