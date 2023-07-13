// App.js is the main component of our application. 
// Here, we import all the necessary components and pages.
// We set up our routes using react-router-dom to control navigation within our app.

import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NavBar from './components/NavBar'
import Home from './pages/Home'
import Read from './pages/Read';
import Write from './pages/Write';
import SinglePost from './components/SinglePost';
import EditPost from './pages/EditPost';

function App() {
  return (
    <Router>
    <div className="App">
      <NavBar />
      <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/write' element={<Write />} />
            <Route path='/read' element={<Read />} />
            <Route path='/read/:postId' element={<SinglePost />} />
            <Route path='/edit/:postId' element={<EditPost />} />
      </Routes>
    </div>
    </Router>
  );
}

export default App;
