import React, { useState } from 'react'
import ContentWrapper from '../../../components/contentWrapper/ContentWrapper'
import { getMovies } from '../../../utils/api/api'
import SwitchTabs from '../../../components/switch Tabs/SwitchTabs'
import useFetch from '../../../hooks/useFetch'
import Carousel from '../../../components/carousel/Carousel'

const Popular = () => {
  const [endPoint, setEndPoint] = useState('movie')
  const { data, loading } = useFetch(`/${endPoint}/popular`)

  const onTabChange = (tab) => {
    setEndPoint(tab === "Movies" ? "movie" : "tv")
  }

  return (
    <div className='carouselSections'>
      <ContentWrapper>
        <span className='carouselTitle'>What's Popular</span>
        <SwitchTabs data={["Movies", "TV Shows"]} onTabChange={onTabChange} />
      </ContentWrapper>
      <Carousel data={data?.results} loading={loading} endPoint={endPoint} />
    </div>
  )
}

export default Popular