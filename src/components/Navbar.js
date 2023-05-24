import React from "react";
import { Link,useNavigate } from "react-router-dom";
import './Navbar.css'

const username = sessionStorage.getItem('username');

export default function Navbar() {

  const navigate = useNavigate()

  const logout =()=>{
sessionStorage.clear()
navigate("/Login")
window.location.reload()
}
  return (
    <div>

      <nav className="navbar navbar-expand-lg bg-body-tertiary nav ">
        <div className="container-fluid ">
          <Link className="navbar-brand" to="/Home/"> <img src="/Images/boat_logo.png" style={{ height: "50px" }} /></Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>


          <div className="collapse navbar-collapse justify-content-md-end " id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item" >
                <Link className="nav-link active" aria-current="page" to="/Home" >Home</Link>
              </li>
              <li className="nav-item" >
                <Link className="nav-link active" aria-current="page" to="/" >About</Link>
              </li>
              {/* <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/Registration" >Registration</Link>
              </li> */}
             
              <li className="nav-item">
                <Link className="nav-link  " to="/contact">contact</Link>
              </li> 
              <li className="nav-item">
              {username === null && <><Link className="nav-link  " to="/Login"><i className="fa-solid fa-user"></i> </Link></>}
              
              </li>
              <li className="nav-item">
              {username !== null && <><Link className="nav-link  "><i className="fa-solid fa-user"></i> { username }</Link></>}
              
              </li>
              <li className="nav-item">
              {username === 'Renuka' && <Link class="navbar-brand nav-link" to="/Addproducts">AddProducts <i class="fa-sharp fa-solid fa-headphones"></i></Link>}
              
              </li>
              <li className="nav-item">
                {username !== null && <><Link className="nav-link" onClick={logout}>Log Out</Link></>}</li>
            </ul>
          </div>
        </div>
      </nav>
    </div>

  );
}