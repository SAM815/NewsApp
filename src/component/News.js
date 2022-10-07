import React, {useEffect, useState} from 'react'

import NewsItem from './NewsItem';
import PropTypes from 'prop-types'
import InfiniteScroll from "react-infinite-scroll-component";


const News =(props)=> {
   const [articles, setArticles]= useState([])
  
   const [page, setPage]= useState(1)
   const [totalResults, setTotalResults]= useState(0)
  // document.title = `${capitalizeFirstLetter(props.category)} - NewsMonkey`

 const capitalizeFirstLetter = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1)
} 



   

    const updateNews= async ()=> {
        const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=9ce82e8c8145426799d4b607580500af&page=${page}&pageSize=${props.pageSize}`;
        let data = await fetch(url);
        let parsedData = await data.json()

      setArticles(parsedData.articles)
      setTotalResults(parsedData.totalResults)
     
    }
    useEffect(()=>{
        updateNews();
        document.title = `${capitalizeFirstLetter(props.category)} - NewsMonkey`
    },[])



    const handlePrevClick = async () => {
        /*  let url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=9ce82e8c8145426799d4b607580500af&page=${page - 1}&pageSize=${props.pageSize}`;
          let data = await fetch(url);
          let parsedData = await data.json()
  
  
          setState({
              page: page - 1,
              articles: parsedData.articles
          })*/
      setPage(page-1)
        updateNews();

    }
    const handleNextClick = async () => {
        /* if(page + 1 > Math.ceil(totalResults/props.pageSize)){
 
         }else{
 
         
         let url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=business&category=${props.category}&apiKey=9ce82e8c8145426799d4b607580500af&page=${page + 1}&pageSize=${props.pageSize}`;
         let data = await fetch(url);
         let parsedData = await data.json()
 
 
         setState({
             page: page + 1,
             articles: parsedData.articles
         })*/
         setPage(page+1)
        updateNews();
    }
   const fetchMoreData = async () => {
        setPage(page+1)
        const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=9ce82e8c8145426799d4b607580500af&page=${page}&pageSize=${props.pageSize}`;
        let data = await fetch(url);
        let parsedData = await data.json()
setArticles(articles.concat(parsedData.articles))
        setTotalResults(parsedData.totalResults)
    }

   
        return (
            <>
            
                <h2 className="text-center"> News Monkey-Top Headlines on {capitalizeFirstLetter(props.category)} category</h2>
                <InfiniteScroll
                    dataLength={articles.length}
                    next={fetchMoreData}
                    hasMore={articles.length !== totalResults}
                    loader={<h4>Loading...</h4>}
                >
                    <div className="container">
                        <div className="row">
                            {articles.map((element) => {
                                return <div className="col-md-4" key={element.url}>
                                    {/* <NewsItem title={element.title ? element.title.slice(0, 45) : ""} description={element.description ? element.description.slice(0, 88) : ""} imageUrl={element.urlToImage} newsUrl={element.url} />*/}
                                    <NewsItem title={element.title ? element.title : ""} description={element.description ? element.description : ""} imageUrl={element.urlToImage} newsUrl={element.url} author={element.author} date={element.publishedAt} />





                                </div>

                            })}
                        </div>
                    </div>

                </InfiniteScroll>
                {/*<div className="container d-flex justify-content-between">
                    <button disabled={page <= 1} type="button" className="btn btn-dark " onClick={handlePrevClick}> &larr; Previous</button>
                    <button disabled={page + 1  > Math.ceil(totalResults/props.pageSize)} type="button" className="btn btn-dark " onClick={handleNextClick}>Next &rarr;</button>

                </div>*/}
            
            
            </>
        )
    

}

News.defaultProps = {
    country: 'in',
    pageSize: 8,
    category: 'general',
}

News.propTypes = {
    country: PropTypes.string,
    pageSize: PropTypes.number,
    category: PropTypes.string,
}
export default News
