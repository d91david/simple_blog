import React, { useEffect, useState } from 'react';
import './MainPost.css'

const MainPost = () => {

  const [main_post, setMainPost] = useState([]);

  useEffect(() => {
    fetch('http://localhost:8000/api/blogposts/main_post')
      .then(response => response.json())
      .then(data => {
        data.content = data.content.substring(0, 25);
        setMainPost(data);
      });
  }, []);
  

  return (
    <div className='mainpost-container'>
      <div className='mainpost-secondary-container'>
        <h1>{main_post.title}</h1>
        <p>{main_post.content}...</p>
      </div>
    </div>
  )
}

export default MainPost