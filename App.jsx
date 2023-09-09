import React from 'react'
import { useState, useEffect } from 'react'
import { BrowserRouter as Router, Routes, Route, Link, useNavigate } from 'react-router-dom'

// Components
import Post from './components/Post'
import RegistrationPage from './components/RegistrationPage'
import LoginPage from './components/LoginPage'
import HomePage from './components/HomePage'

// Services
import postService from './services/posts'
import registerService from './services/registration'



const App = () => {
  const [posts, setPosts] = useState([])

  const [message, setMessage] = useState(null)

  const [username, setUsername] = useState('') 
  const [password, setPassword] = useState('') 

  useEffect(() => {
    postService.getAll().then(posts =>
      setPosts( posts )
    )  
  }, [])

  useEffect(() => {
    const loggedUserJSON = window.localStorage.getItem('loggedBlogAppUser')
    if (loggedUserJSON) {
      const user = JSON.parse(loggedUserJSON)
      setUser(user)
      loginService.setToken(user.token)
    }
  }, [])

  const handleLogin = async (event) => {
    event.preventDefault()
    const navigateTo = useNavigate()
    
    try {
      const user = await loginService.login({
        username, password,
      })

      window.localStorage.setItem(
        'loggedBlogAppUser', JSON.stringify(user)
      )
      loginService.setToken(user.token)
      setUser(user)
      setUsername('')
      setPassword('')
      navigateTo('/home')
    } catch (exception) {
      setMessage('Wrong credentials')
      setTimeout(() => {
        setMessage(null)
      }, 5000)
    }
  }

  const handleRegistration = async (event) => {
    event.preventDefault()
    console.log(registerService)
    const user = await registerService.register({username,password})
    window.localStorage.setItem(
      'registeredBlogAppUser', JSON.stringify(user)
    )
  }

  return (
    <div>
      <Router>
        <Routes>
          <Route path="/register" element={<RegistrationPage 
              handleRegistration={handleRegistration}
              username={username}
              password={password}
              setUsername={setUsername} 
              setPassword={setPassword}
            />}/>
          <Route path="/login" element={<LoginPage 
              handleLogin={handleLogin}
              username={username}
              password={password}
              setUsername={setUsername} 
              setPassword={setPassword}
            />} />
          <Route path="/home" element={<HomePage/>}/>
        </Routes>
      </Router>


      {/* <h2>posts</h2>
      {posts.map(post =>
        <Post key={post.id} post={post} />
      )} */}
    </div>
  )
}

export default App