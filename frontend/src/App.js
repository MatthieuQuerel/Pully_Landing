import React from 'react'
import LandingPage from './components/LandingPage.jsx'
import Blog from './Page/Blog.jsx'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

function App () {
  return (
    <Router>
      <div className='App'>
        <Routes>
          <Route path='/' exact element={<LandingPage />} />
          <Route path='/blog' exact element={<Blog />} />
        </Routes>
      </div>
    </Router>
  )
}
export default App
