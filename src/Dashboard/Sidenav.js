import React from 'react'
import { Link, useNavigate } from "react-router-dom";
import "./Sidenav.css";

const Sidenav = () => {
    const auth = localStorage.getItem("data");
    const navigate = useNavigate();
    const LogoutHandler = () => {
        localStorage.clear("data");
        navigate("/login");
    }

    return (
        <nav>
            {
                auth ?

                    <ul>
                        <li><Link to="/dashboard"><i class="fa-solid fa-house"></i> Dashboard</Link></li>
                        <li><Link to="/user"><i class="fa-solid fa-user"></i> User</Link></li>
                        <li><Link to="/post"><i class="fa-solid fa-signs-post"></i> Post</Link></li>
                        <li><Link to="/login" onClick={LogoutHandler}><i class="fas fa-sign-out-alt"></i> Logout ()</Link></li>

                    </ul>
                    :
                    <>
                       
                    </>
            }
        </nav>
    )
}

export default Sidenav