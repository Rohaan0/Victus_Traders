import React, { useState, useRef, useEffect, useContext } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import { useDispatch, useSelector } from 'react-redux'
import { Navigate } from 'react-router-dom'

const Login = () => {
    const dispatch = useDispatch()
    const username = useSelector(state => state.username)
  
    const nameRef = useRef()
    const emailRef = useRef()
    const errRef = useRef()

    const [email, setEmail] = useState("")
    const [name, setName] = useState("")
    const [pass, setPass] = useState("")
    const [errMsg, setErrMsg] = useState("")
    const [success, setSuccess] = useState(false)

    useEffect(() => {
      nameRef.current.focus()
    }, [])

    useEffect(() => {
      setErrMsg('')
    }, [name, email, pass])
    
    const handleSubmit = async (e) => {
      e.preventDefault()
      console.log(name, email, pass)


      const body = {
        username: name,
        email: email,
        password: pass
      }

      axios
        .post('/auth/login', body)
        .then((res) => {
          dispatch({type: 'LOGIN', payload: res.data})
          console.log(res.data)
        })
        .catch((err) => {
          console.error(err)
        })
      setName('')
      setEmail('')
      setPass('')
      setSuccess(true)
    } 

  return (
    <div className="main-page">
          {success ?(
            <section className='auth-form-container'>
              <div className="welcome-window">
              <h1 className='white-large-font'>Welcome {username}</h1>
                <p>
                <Link to='/'>
                    <button className='link-btn'>Go to home</button>
                </Link>
                </p>   
              </div>

        </section>
        ) : (
        
        <section className="auth-form-container">
            <p ref={errRef} className={errMsg ? "errmsg" : "offscreen"} aria-live="assertive">{errMsg}</p>
            <h2>Login</h2>
            <hr />
            <form className="user-form" onSubmit={handleSubmit}>
            <label htmlFor="username">Username: </label>
            <input value={name} 
            onChange={(e) =>  setName(e.target.value)} 
            className='form-input'
            type="text"
            placeholder="username" 
            id="username" 
            ref={nameRef}
            autoComplete="off"
            name="name"
            required
            />

            <label htmlFor="password">Password: </label>

            <input value={pass} 
            onChange={(e) => setPass(e.target.value)} 
            type="password" 
            placeholder="**********" 
            id="password" 
            name="password"
            required
            />
            <br />
            <button>Log In</button>
        </form>
        <br />
        <div className='user-links'>
      <button className="link-btn">Forgot Password?</button>
      <Link to='/auth/signup'>
        <button className='link-btn' >Don't have an account? Sign Up here.</button>
      </Link>
      </div>
        </section>
        )}
    </div>
  
  )
}

export default Login