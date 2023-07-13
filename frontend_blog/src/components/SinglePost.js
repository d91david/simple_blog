// In SinglePost.js, we fetch and display the full content of a single blogpost based on its id.

import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import './SinglePost.css'

const SinglePost = () => {

    const { postId } = useParams();
    const [post, setPost] = useState(null);
  
    useEffect(() => {
      fetch(`http://127.0.0.1:8000/api/blogposts/${postId}/`)
        .then(response => response.json())
        .then(data => setPost(data));
    }, [postId]);
  
    if (!post) {
      return <div className='single-post-container'>Loading...</div>;
    }
  
    return (
      <div className='single-post-container'>
        <div>
        <Link id='single-post-edit-link' to={`/edit/${post.id}`}>Edit Post</Link>
        </div>
        <h1 id='single-post-title'>{post.title}</h1>
        <p id='single-post-content'>{post.content}</p>
      </div>
    );
  };

export default SinglePost