import React, { useEffect, useState } from "react";

export default function Home2() {
  const [Users, setUsers] = useState(null)


useEffect(()=>{
  fetch("http://localhost:8000/addproducts").then((res)=>{
      return res.json();
  }).then((resp)=>{
      setUsers(resp);
  }).catch((err)=>{
      alert("Login Failed due to : " + err.message)
  })
},[]);
    return (
      <>
      <img src="/Images/Carosel_img1.jpg" width={'100%'}></img>
      <h1>fhbsfgdijsfbdg</h1>
      <div className='container-fluid wireless_buds'>
        <center><h2>All Products</h2></center></div>
  
  
        <div className="row">
          {/* <div className="col-3 m-3rem ">
            <div class="card mb-3">
              <div class="row g-0">
                <div class="col-md-4">
                  <img src="..." class="img-fluid rounded-start" alt="..."/>
                </div>
                <div class="col-md-8">
                  <div class="card-body">
                    <h5 class="card-title">Card title</h5>
                    <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                   
                  </div>
                </div>
              </div>
            </div>
          </div> */}
  
          {Users && Users.map((Users) => (
            <div className="col-8 col-sm-6 col-md-4 col-lg-3  m-3rem" key={Users.id}>
              <div class="card mb-3">
                <div class="row g-0">
                  <div class="col-md-4">
                    <img src={Users.imgsrc} class="img-fluid rounded-start" alt={Users.title}/>
                  </div>
                  <div class="col-md-6">
                    <div class="card-body">
                      <h5 class="card-title">{Users.title}</h5>
                      <p><img src="/Images/Star_img.jpg" class="img-fluid rounded-start" alt="rating" width={'20px'} height={'20px'}/>{Users.rating}</p>
                      <p class="card-text">Sale price ₹ {Users.saleprc} {Users.percentage}% off Regular price ₹ {Users.regprc}</p>
                      <button className='btn btn-primary'>Add to Cart</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))
          }
      
      </div></>
    );
  }