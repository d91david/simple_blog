import React from 'react'
import './Home.css'
import MainPost from '../components/MainPost'
import FivePosts from '../components/FivePosts'

const Home = () => {

  return (
    <div className='home-container'>
        <MainPost />
        <FivePosts />
    </div>
  )
}

export default Home