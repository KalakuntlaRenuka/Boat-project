import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Wireless_buds from '../pages/Wireless_buds'
import { Link } from 'react-router-dom'
import Rockerz_Wireless from '../pages/Rockerz_Wireless'
import Wired_Earphones from '../pages/Wired_Earphones'
import Smart_Watches from '../pages/Smart_Watches'
import Home2 from '../pages/Home2'

export default function Home() {
  

  return (
    <div>
    
      <nav class="navbar navbar-expand-lg bg-body-tertiary ">
        <div class="container-fluid">
          <Link class="navbar-brand"> <i class="fa-sharp fa-solid fa-headphones"></i></Link>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarNav">
            <ul class="navbar-nav">
              <li class="nav-item">
                <Link class="nav-link active" aria-current="page" to="/Home/Wireless_buds"><img src="/Images/wire_less_earburds.jpg" alt=''/><p>Wireless Buds</p> </Link>
              </li>

              <li class="nav-item">
                <Link class="nav-link" to="/Home/Rockerz_Wireless"><img src="/Images/Rockerz_Wireless.jpg"  alt=''/><p>Rockerz Wireless</p></Link>
              </li>
              <li class="nav-item">
                <Link class="nav-link" to="/Home/Wired_Earphones"><img src="/Images/Wired_Earphones.jpg" alt='' /><p>Wired Earphones</p></Link>
              </li>
              <li class="nav-item">
                <Link class="nav-link" to="/Home/Smart_Watches"><img src="/Images/Smart_Watches.jpg" alt='' /><p>Smart Watches</p></Link>
              </li>
              <li class="nav-item">
                <Link class="nav-link" to="#"><img src="/Images/Wireless_Speakers.jpg" alt='' /><p>Wireless Speakers</p></Link>
              </li>
              <li class="nav-item">
                <Link class="nav-link" to="#"><img src="/Images/Home_Theatre_Systems_Soundbars.jpg"  alt=''/><p>Home Theatre Systems <br></br>& Soundbars</p></Link>
              </li>
              <li class="nav-item">
                <Link class="nav-link" to="#"><img src="/Images/Mobile_Accessories.jpg" alt=''/><p>Mobile Accessories</p></Link>
              </li>
              <li class="nav-item">
                <Link class="nav-link" to="#"><img src="/Images/Gaming_Headphones.jpg" alt='' /><p>Gaming Headphones</p></Link>
              </li>

            </ul>
          </div>
        </div>
      </nav>
   

      <Routes>
        <Route path='/' element={<Home2/>}/>
        <Route path='/Wireless_buds' element={<Wireless_buds />} />
       
        <Route path='/Rockerz_Wireless' element={<Rockerz_Wireless />}/>
        <Route path='/Wired_Earphones' element={<Wired_Earphones />}/>
        <Route path='/Smart_Watches' element={<Smart_Watches />}/>
      </Routes>
    </div>
  )
}
