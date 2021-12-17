import React from 'react'

const MovieDetail = (props) => {
    return (
        <div>
            <img alt={props.title} src={props.backdrop_path}/>
            <h3>{props.title}</h3>
            <p>{props.overview}</p>
        </div>
    )
}

export default MovieDetail
