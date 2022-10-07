
import React from 'react'


const NewsItem=(props)=> {


   
       let {title, description, imageUrl, newsUrl, author, date} = props;
        return (
            <div className="my-3">
                <div className="card" >
                    <img src={!imageUrl? "https://image.cnbcfm.com/api/v1/image/107076311-1655347405607-IMG_1893rb.jpg?v=1655347428&w=1920&h=1080":imageUrl}/>
                    <div className='card-body'>
                    <h5 className="card-title">{title}...</h5>
                        <p className="card-text">{description}...</p>
                        <p className='card-text'><small className='text-muted'> By {!author?"Unknown":author} on {new Date (date).toGMTString( )} </small></p>
                        <a rel="noreferrer"href={newsUrl} target = "_blank" className="btn btn-sm btn-primary btn-dark">Read more</a>
                   
                    </div> 
                       
                </div>

            </div>
        )
   
}

export default NewsItem
