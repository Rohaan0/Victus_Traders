import React, {useState, useRef, useEffect} from 'react'
import { Link } from 'react-router-dom'
import { faCheck, faTimes, faInfoCircle } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { useSelector, useDispatch } from 'react-redux'
import axios from 'axios'

const USER_REGEX = /^[a-zA-Z][a-zA-Z0-9-_]{3,23}$/;
const EMAIL_REGEX = /^[a-zA-Z][a-zA-Z0-9-_](?=.*[@]).{3,23}$/;
const PWD_REGEX = /^(?=,*[a-zA-Z])(?=.*[0-9])(?=.*[!@#$%]).{8,24}$/;



const Signup = () => {
  const nameRef = useRef()
  const errRef = useRef()
  const emailRef = useRef()
  const passRef = useRef()
  const confirmRef = useRef()

  const [name, setName] = useState("");
  const [validName, setValidName] = useState(false);
  const [nameFocus, setNameFocus] = useState(false);

  const [email, setEmail] = useState("");
  const [validEmail, setValidEmail] = useState(false);
  const [emailFocus, setEmailFocus] = useState(false);

  const [pass, setPass] = useState("");
  const [validPass, setValidPass] = useState(false);
  const [passFocus, setPassFocus] = useState(false);

  const [matchPass, setMatchPass] = useState("");
  const [validMatch, setValidMatch] = useState(false);
  const [matchFocus, setMatchFocus] = useState(false);

  const [errMsg, setErrMsg] = useState('');
  const [success, setSuccess] = useState(false)

  const dispatch = useDispatch()


  useEffect(() => {
    const result = USER_REGEX.test(name)
    console.log(result)
    console.log(name)
    setValidName(result)
  }, [name])



  useEffect(() => {
    const result = EMAIL_REGEX.test(email)
    console.log(result)
    console.log(email)
    setValidEmail(result)
  }, [email])


  useEffect(() => {
    const result = PWD_REGEX.test(pass)
    console.log(result)
    console.log(pass)
    setValidPass(result)
    const match = pass === matchPass
    setValidMatch(match)
  }, [pass, matchPass])



  useEffect(() => {
    setErrMsg('');
}, [name, email, pass, matchPass])

const handleSubmit = async (e) => {
    e.preventDefault();
    const v1 = USER_REGEX.test(name)
    const v2 = PWD_REGEX.test(pass)
    if (!v1 || !v2){
        setErrMsg("invalid Entry");
        return
    }
    try {
      const body = {
        username: name,
        email: email,
        password: pass
      }

        axios.post('/auth/signup', body)
        .then((res) => {
          setSuccess(true)
          dispatch({type: 'LOGIN', payload: res.data})
          console.log(res.data)
        })
        .catch((err) => {
          console.error(err)
        });
  
        //clear input fields
        //need value attributes on inputs for this
        setName("")
        setEmail("")
        setPass("")
        setMatchPass("")

    }catch (err) {
        if (!err?.response) {
            setErrMsg('No Server Response')
        } else if (err.response?.status === 409){
            setErrMsg('Username Taken');
        } else {
            setErrMsg('Registration Failed')
        }
        errRef.current.focus()
    }
}


  return (
<div className="main-page">
  { success ? ( <section>
            <h1>Success!</h1>
            <p>
            <Link to='/auth/login'>
                <button className='link-btn'>Go to Login</button>
            </Link>
            </p>   
        </section>
        ) : (
  <section className='auth-form-container'>
    <p ref={errRef} className={errMsg ? "errmsg" : 
        "offscreen"} aria-live="assertive">{errMsg}</p>
      <h1 className="signup">Sign Up</h1>
      <hr />
      <form className='user-form' onSubmit={handleSubmit}>
          <label htmlFor="name">
                Username:
                <span className={validName ? "valid" : "hide"}>
                    <FontAwesomeIcon icon={faCheck} />
                </span>
                <span className={validName || !name ? "hide" : "invalid"}>
                    <FontAwesomeIcon icon={faTimes} />
                </span>
          </label>
          <input type="name" 
          name="name"
          placeholder='Username' 
          className='form-input' 
          ref={nameRef}
          autoComplete="off"
          value={name}
          id="name"
          onChange={(e) => setName(e.target.value)}
          required
          aria-invalid={validName ? "false" : "true"}
          aria-describedby="uidnote"
          onFocus={() => setNameFocus(true)}
          onBlur={() => setNameFocus(true)}
          />
          <p id="uidnote" className={nameFocus && name && !validName ? "instructions" : "offscreen"}>
              <FontAwesomeIcon icon={faInfoCircle} />
              4 to 24 characters.<br />
              Must begin with a letter.<br />
              Letters, numbers, underscores, hyphens allowed.
          </p>
          <label htmlFor="email">
                Email: 
                <span className={validEmail ? "valid" : "hide"}>
                    <FontAwesomeIcon icon={faCheck} />
                </span>
                <span className={validEmail || !email ? "hide" : "invalid"}>
                    <FontAwesomeIcon icon={faTimes} />
                </span>
            </label>
            <input value={email} 
            onChange={(e) => setEmail(e.target.value)} 
            type="email" 
            placeholder="youremail@gmail.com" 
            id="email" 
            name="email"
            className='form-input'
            required
            aria-invalid={validEmail ? "false" : "true"}
            aria-describedby="uidnote"
            onFocus={() => setEmailFocus(true)}
            onBlur={() => setEmailFocus(true)}
            ref={emailRef}
            />
             <p id="uidnote" className={emailFocus && email && !validEmail ? "instructions" : "offscreen"}>
                <FontAwesomeIcon icon={faInfoCircle} />
                4 to 24 characters.<br />
                Must begin with a letter.<br />
                Letters, numbers, underscores, hyphens allowed.<br />
                @ is required.
            </p>
            <label htmlFor="password">Password: 
                <span className={validPass ? "valid" : "hide"}>
                    <FontAwesomeIcon icon={faCheck} />
                </span>
                <span className={validPass || !pass ? "hide" : "invalid"}>
                    <FontAwesomeIcon icon={faTimes} />
                </span>
                
            </label>
            
            <input 
            value={pass} 
            onChange={(e) => setPass(e.target.value)} 
            type="password" 
            placeholder="**********" 
            id="password" 
            name="password"
            className='form-input'
            required
            aria-invalid={validPass ? "false" : "true"}
            aria-describedby="pwdnote"
            onFocus={() => setPassFocus(true)}
            onBlur={() => setPassFocus(true)}
            ref={passRef}
            />
            <p id="pwdnote" className={passFocus && !validPass ? "instructions" : "offscreen"}>
                <FontAwesomeIcon icon={faInfoCircle} />
                8 to 24 characters.<br />
                Must include uppercase and lowercase letters, a number and a special character.<br />
                Allowed special characters: <span aria-label="exclamation mark">!</span><span aria-label="at symbol">@</span>
                <span aria-label="hashtag">#</span><span aria-label="dollar sign">$</span><span aria-label="percent">%</span>
                
            </p>

            <label htmlFor="confirm-pass">
                Confirm Password: 
                <span className={validMatch && matchPass ? "valid" : "hide"}>
                    <FontAwesomeIcon icon={faCheck} />
                </span>
                <span className={validMatch || !matchPass ? "hide" : "invalid"}>
                    <FontAwesomeIcon icon={faTimes} />
                </span>
            </label>

            <input 
            value={matchPass} 
            onChange={(e) => setMatchPass(e.target.value)} 
            type="password" 
            placeholder="**********"
             id="confirm-pass" 
             name="confirm-pass"
             required
             aria-invalid={validMatch ? "false" : "true"}
             aria-describedby="confirmnote"
             onFocus={() => setMatchFocus(true)}
             onBlur={() => setMatchFocus(false)}
             ref={confirmRef}
             />
             <p id="pwdnote" className={matchFocus && !validMatch ? "instructions" : "offscreen"}>
                <FontAwesomeIcon icon={faInfoCircle} />
                Must match the first password field
                </p>

          <br />
          <button className='submit-btn' disabled={!validName || !validPass || !validMatch ? true : false} >Sign Up</button>
      </form>
      <div className='user-links'>
      <button className="link-btn">Forgot Password?</button>
      <Link to='/auth/login'>
        <button className='link-btn' >have an account? Login here.</button>
      </Link>
      </div>

  </section>
    )
  }
</div>
  )
}

export default Signup