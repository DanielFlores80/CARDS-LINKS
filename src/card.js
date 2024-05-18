/* eslint-disable jsx-a11y/img-redundant-alt */
import React from 'react'


export default function card({key, id, title, image, instructor, url}) {
  return (
   <div>
    <div className="card">
      <div className="card-body">
        <img alt='no image' src={image} className='image-widht'></img>
        <h4 className="card-title text-light">{title}</h4>
        <p className="card-text text-secondary">
            Instructor: {instructor}
        </p>
        <a href={url} className="btn btn-outline-secondary rounded-0">Ir al sitio web</a>
      </div>
    </div>
   </div>
  )
}
