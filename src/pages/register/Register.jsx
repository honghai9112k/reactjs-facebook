import axios from "axios";
import { useRef } from "react";
import "./register.css";
import { useHistory } from "react-router";

export default function Register() {
    const username = useRef();
    const email = useRef();
    const password = useRef();
    const passwordAgain = useRef();
    const history = useHistory();

    const handleClick = async (e) => {
        e.preventDefault();
        if (passwordAgain.current.value !== password.current.value) {
            passwordAgain.current.setCutomValidity("Password don't match!");
        } else {
            const user = {
                username: username.current.value,
                email: email.current.value,
                password: password.current.value,
            };
            try {
                await axios.post("/auth/register", user);
                history.push("/login");

            } catch (err) {
                console.log(err);
            }
        }
    };

    return (
        <div className="login">
            <div className="loginWrapper">
                <div className="loginLeft">
                    <h3 className="loginLogo">Facebook</h3>
                    <span className="loginDesc">Connect with friends and the world around you on Facebook</span>
                </div>
                <div className="loginRight">
                    <form className="loginBox" onSubmit={handleClick}>
                        <input
                            type="text"
                            required
                            ref={username}
                            className="loginInput"
                            placeholder="Username"
                        />
                        <input
                            type="text"
                            required
                            ref={email}
                            className="loginInput"
                            placeholder="Email"
                            type="email"
                        />
                        <input
                            required
                            ref={password}
                            className="loginInput"
                            placeholder="Password"
                            type="password"
                            minLength="6"
                        />
                        <input
                            required
                            ref={passwordAgain}
                            className="loginInput"
                            type="password"
                            placeholder="Password Again"
                        />
                        <button className="loginButton">Sign Up</button>
                        {/* <span className="loginForgot">Forgot Password?</span> */}
                        <button className="loginRegisterButton" type="submit">
                            Log into Account
                        </button>
                    </form>
                </div>
            </div>

        </div>
    )
}
