import { Link } from 'react-router-dom';

const LoginPage = ({handleLogin, username, password, setUsername, setPassword}) => {
    return(
        <div>
            <form onSubmit={(event) => handleLogin(event)}>
            <h1>Login Form</h1>
            <div>
                username
                <input
                type="text"
                value={username}
                name="Username"
                onChange={({ target }) => setUsername(target.value)}
                />
            </div>
            <div>
                password
                <input
                type="password"
                value={password}
                name="Password"
                onChange={({ target }) => setPassword(target.value)}
                />
            </div>
            <button onSubmit={(event) => handleLogin(event)}>submit</button>
            <button>cancel</button>
            <button><Link to="/register">Don't have an account? Register here!</Link></button>
            </form>
        </div>  
    )
}

export default LoginPage
    
