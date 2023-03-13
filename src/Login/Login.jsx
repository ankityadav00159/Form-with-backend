import React, {useState} from "react";

function Login (props) {
    const [email, setEmail]= useState('')
    const [pass, setPass] = useState('')

    const handleSubmit = (e) =>{
        e.preventDefault()
        console.log(email);
    }

    return(
        <div className="auth-form-container">
            <h2>Login</h2>
            <form className="loginForm" onSubmit={handleSubmit}>
                <label htmlFor="email">Email:</label>
                <input value={email} onChange={(e)=> setEmail(e.target.value)} type="email" placeholder="Enter your Email Id" id="email" name="emal"/>
                <label htmlFor="pass">Password:</label>
                <input value={pass} onChange={(e)=> setPass(e.target.value)} type="password" placeholder="Enter your password" id="password" name="password" />
                <button type="submit">Log In</button>
            </form>
            <button className="linkBtn" onClick={ () => props.onFormSwitch('register')}>Don't have an account? Registe here.</button>
        </div>
    )
}

export default Login