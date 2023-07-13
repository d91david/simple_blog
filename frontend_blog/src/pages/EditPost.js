// In EditPost.js, we fetch the content of a blogpost, allow the user to edit it, and submit the changes to the backend.

import React, { useState, useEffect } from 'react'
import { useParams, useNavigate} from 'react-router-dom';
import './EditPost.css'

const EditPost = () => {
  const { postId } = useParams();
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

  const [isMainPost, setIsMainPost] = useState(false);

  let navigate = useNavigate();

  useEffect(() => {
  
    fetch(`http://127.0.0.1:8000/api/blogposts/${postId}/`)
      .then(response => response.json())
      .then(data => {
        setTitle(data.title);
        setContent(data.content);
        setIsMainPost(data.main_post);
      });
  }, [postId]);

  const handleSubmit = async (event) => {
    event.preventDefault();
    
    const postData = {
      title: title,
      content: content,
      main_post: isMainPost
    };

    try {
      const response = await fetch(`http://127.0.0.1:8000/api/blogposts/${postId}/`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(postData)
      });
  
      if(response.ok) {
        navigate("/read"); 
      } else {
        throw new Error("Error in update");
      }
      
    } catch (error) {
      console.error('Error:', error);
    }
  };    

  return (
    <div className='editpost-container'>
    <form onSubmit={handleSubmit}>
    <div className='edit-h1-container'>
      <h1>Edit</h1>
    </div>
        <input id='edit-title-input' type="text" value={title} onChange={event => setTitle(event.target.value)} />

        <textarea id='edit-content-input' value={content} onChange={event => setContent(event.target.value)} />
      <div id='isMainPost-tickbox'>
        <input type="checkbox" checked={isMainPost} onChange={event => setIsMainPost(event.target.checked)} /> Main Post
      </div>
    <div className="edit-submit-container">

      <div className='edit-button-container' onClick={handleSubmit} style={{ cursor: "pointer" }}>Save</div>
      <div className='edit-button-container' onClick={() => navigate(`/read/${postId}`)} style={{ cursor: "pointer" }}>Back</div>

    </div>
    </form>
    </div>
  );
}

export default EditPost;
