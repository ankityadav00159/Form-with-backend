import React, {useState} from "react";

function Register (props) {

    const [email, setEmail] = useState('')
    const [pass , setPass] = useState('')
    const [name, setName] = useState('')

    const handleSubmit = (e) =>{
        e.preventDefault()
        console.log(email);
    }
    return(
        <div className="auth-form-container">
            <h2>Register</h2>
            <form className="registerForm" onSubmit={handleSubmit}>
                <label htmlFor="name">Name:</label>
                <input value={name} onChange={(e)=> setName(e.target.value)} type="text" placeholder="Enter your Full name" id="name" name="name" />
                <label htmlFor="email">Email:</label>
                <input value={email} onChange={(e)=> setEmail(e.target.value)} type="email" placeholder="Enter your Email Id" id="email" name="emal"/>
                <label htmlFor="pass">Password:</label>
                <input value={pass} onChange={(e)=> setPass(e.target.value)} type="password" placeholder="Enter your password" id="password" name="password" />
                <button type="submit">Register</button>
            </form>
            <button className="linkBtn" onClick={ () => props.onFormSwitch('login')}>Already an account? Login here.</button>
        </div>
    )
}

export default Register