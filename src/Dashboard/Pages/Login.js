import React, { useState, useEffect } from 'react'
import { ToastContainer, toast } from 'react-toastify';
import { useNavigate } from "react-router-dom";
import "./Login.css";


const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [showModal, setShowModal] = useState(true);
    const [toggle, setToggle] = useState();
    const navigate = useNavigate();
    useEffect(() => {
        const auth = localStorage.getItem("data");
        if (auth) {
            navigate("/dashboard");
        }
        setTimeout(() => {
            HandleModal();
        }, 2000);


    }, []);

    // simple validation apply on form start here...................?
    const HandleForm = async (e) => {
        e.preventDefault();
        console.log(email, password);

        if (email === "") {
            alert("please enter your email")
        } else if (!email.includes("@")) {
            alert("please enter one special character like @ etc");
        } else if (!email.includes(".com")) {
            alert("please type domain name");
        } else if (password.length < 8) {
            alert("please enter your password between 8");
        } else if (!password.includes("@")) {
            alert("please enter special charchter in password like @,#,$,! etc");
            // simple validation apply on form start end...................?
        } else {
            // login api integirate start here....................?
            let result = await fetch("http://localhost:5000/admin", {
                method: "post",
                body: JSON.stringify({ email, password }),
                headers: {
                    "Content-Type": "application/json",
                }
            })
            result = await result.json();
            if (result.email) {
                alert("user login successfully");
                console.log(result);
                localStorage.setItem("data", JSON.stringify(result))
                navigate("/dashboard");

            } else {
                alert("please enter correct email and password");


            }


        }
        // login api integirate end here....................?

    }

    const HandleModal = () => {
        setShowModal(true);
    }



    return (
        <>

            <div className='modal-wrapper'></div>
            {showModal && (
                <div className='modal-container' data-aos="flip-down">
                    <input type="text" placeholder='enter your email' onChange={(e) => setEmail(e.target.value)} name="email" value={email} />
                    <br />
                    <input type={!toggle ? "password" : "text"} placeholder='enter your password' onChange={(e) => setPassword(e.target.value)} name="password" value={password} />
                    <span className='eye-icon' onClick={() => setToggle(!toggle)}>
                        {toggle ? <i class="fas fa-eye" ></i> : <i class="fas fa-eye-slash" ></i>}

                    </span>
                    <br />
                    <button className='btn btn-primary text-center' to="/login" onClick={HandleForm}>Login</button>
                    <ToastContainer />


                </div>
            )}





        </>
    )
}

export default Login