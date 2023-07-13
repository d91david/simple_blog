// In Read.js, we fetch all blogposts from our backend and display a summary.
// Each blogpost is linked to its full content.

import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './Read.css'

const Read = () => {

    const [posts, setPosts] = useState([]);

    useEffect(() => {
      fetch('http://localhost:8000/api/blogposts/')
        .then(response => response.json())
        .then(data => {
          // We want to show a preview of each post.
          // So we split the content at the first sentence and set that as the new content.
            const updatedPosts = data.map((post) => {

                let firstSentence = post.content.split(/[.!?]/)[0] + ".";

                post.content = firstSentence;
                return post;
            });

            setPosts(updatedPosts);
        });
    }, []);

  return (
    <div className='read-container'>
        {posts.map(post => (
        <Link className='link-router-component' key={post.id} to={`/read/${post.id}`}>
        <div key={post.id} className='read-post'>
            <h2>{post.title}</h2>
            <p>{post.content}</p>
            <p id='read-date'>{post.formatted_date}</p>
        </div>
        </Link>
        ))}
    </div>
  )
}

export default Read