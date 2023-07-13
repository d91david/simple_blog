// In Write.js, we use a form to capture the title and content of a new blogpost.
// We submit these to our backend via fetch POST request.

import React, { useState} from 'react'
import { useNavigate} from 'react-router-dom';
import './Write.css'

const Write = () => {
  // We use state to keep track of form input values.
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

  // We use useNavigate hook to programmatically navigate routes.
  let navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();

    // We construct our fetch request to create a new blogpost.
    fetch('http://localhost:8000/api/blogposts/', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ title, content }),
    })
    .then(response => response.json())
    .then(data => {
      console.log('Success:', data);
      setTitle('');
      setContent('');
      navigate(`/read/`);
    })
    .catch((error) => {
      console.error('Error:', error);
    });
  };  

  return (
    <div className='write-container'>
    <form onSubmit={handleSubmit}>

      <input id='title-input' type="text" placeholder='Title of the blogpost' value={title} onChange={event => setTitle(event.target.value)} />

      <textarea id='content-input' placeholder='Content of the blogpost' value={content} onChange={event => setContent(event.target.value)} />
      
    <div className="submit-container">
      <input id='submit-input' type="submit" value="Submit" />
    </div>

    </form>
    </div>
  );
}

export default Write