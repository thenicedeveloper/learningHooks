import React from 'react';
import { v4 as uuidv4 } from 'uuid';
import useFetch from './useFetch'

function Stories(){

    let stories = useFetch('https://news-proxy-server.appspot.com/topstories', [])

    return (
        <div className="Stories">
            <h3>Stories</h3>
            {
                stories.map(storie => {
                    const {id, by, time, title, url } = storie;
                    return (
                        <div className="my-2" key={uuidv4()}>
                            <a href={url} target="_blank">{title}L</a>
                            <div>{by} - {new Date(time * 1000).toLocaleDateString()}</div>
                        </div>
                        
                    )
                })
            }
        </div>
    )
}

export default Stories;