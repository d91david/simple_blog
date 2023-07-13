import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './FivePosts.css'

const FivePosts = () => {

    const [posts, setPosts] = useState([]);

    useEffect(() => {
      fetch('http://localhost:8000/api/fivelatest/')
        .then(response => response.json())
        .then(data => setPosts(data));
    }, []);

  return (
    <div className="fiveposts-container">
        {posts.map(post => (
        <Link className='link-router-component' key={post.id} to={`/read/${post.id}`}>
        <div key={post.id} className='home-post'>
            <h2>{post.title}</h2>
        </div>
        </Link>
        ))}
    </div>
  )
}

export default FivePosts