import React, { useState, useEffect } from 'react'
import './style.scss'
import InfiniteScroll from 'react-infinite-scroll-component'
import { getMovies } from '../../utils/api/api'
import ContentWrapper from '../../components/contentWrapper/ContentWrapper'
import noResults from '../../assets/no-results.png'
import Spinner from '../../components/spinner/Spinner'
import { useParams } from 'react-router-dom'
import MovieCard from '../../components/moiveCard/MovieCard'

const SearchResult = () => {
  const [data, setData] = useState(null)
  const [pageNum, setPageNum] = useState(1)
  const [loading, setLoading] = useState(false)
  const { query } = useParams()

  const fetchInitialData = () => {
    setLoading(true)
    getMovies(`/search/multi?query=${query}&page=${pageNum}`).then((res) => {
      setData(res)
      setLoading(false)
      setPageNum((prev) => prev + 1)
    })
  }

  const fetchNextPageData = () => {
    getMovies(`/search/movie?query=${query}&page=${pageNum}`).then((res) => {
      if (data?.results) {
        setData({
          ...data, results: [...data.results, ...res.results]
        })
      }
      else {
        setData(res)
      }
      setPageNum((prev) => prev + 1)
    })
  }

  useEffect(() => {
    setPageNum(1)
    fetchInitialData()
  }, [query])


  return (
    <div className='searchResultsPage'>
      {
        loading && <Spinner initial={true} />
      }
      {
        !loading && (
          <ContentWrapper>
            {
              data?.results?.length > 0 ? (
                <>
                  <div className='pageTitle'>{`Search ${data?.total_results > 1 ? "results" : "result"} of '${query}'`}</div>
                  <InfiniteScroll className='content' dataLength={data?.results?.length || []} next={fetchNextPageData} hasMore={pageNum <= data?.total_pages} loader={<Spinner />}>
                    {
                      data?.results?.map((item, index) => {
                        console.log(item.media_type)
                        if (item.media_type === 'person') return null;
                        return (
                          <MovieCard key={index} data={item} fromSearch={true} />
                        )
                      })
                    }
                  </InfiniteScroll>
                </>
              ) : (
                <span className='resultNotFound'>{noResults}</span>
              )
            }
          </ContentWrapper>
        )
      }
    </div>
  )
}

export default SearchResult