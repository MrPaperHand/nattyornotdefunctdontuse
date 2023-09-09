import registrationPageImage from '../pictures/registrationpage.jpg'; // Adjust the path accordingly
import { Link } from 'react-router-dom';

const RegistrationPage = ({handleRegistration, username, password, setUsername, setPassword}) => {
    return (
        <div>
            <form onSubmit={(event) => handleRegistration(event)}>
            {/* <div style={overlayStyle}></div> */}
                <h1>Registration Form</h1>
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
                <button onSubmit={(event) => handleRegistration(event)}>submit</button>
                <button>cancel</button>
                <button><Link to="/login">Already have an account? Login here!</Link></button>
            </form>
        </div>
    )
    }

export default RegistrationPage