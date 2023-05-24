import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

export default function AddProducts() {
   
    const [imgsrc, imgsrcchange] = useState("");
    const [title, titlechange] = useState("");
    const [rating, ratingchange] = useState("");
    const [regprc, regprcchange] = useState("");
    const [saleprc, saleprcchange] = useState("");
    const [model, modelchange] = useState("Wireless_buds");
    const [percentage, percentagechange] = useState("");

    const navigate = useNavigate();

    const handlesubmit = (e) => {
        e.preventDefault();
        let regobj = { title, imgsrc, rating, regprc, saleprc, model, percentage };
    
            //console.log(user)
             fetch("http://localhost:8000/addproducts", {
              method: "POST",
                 headers: { 'content-type': 'application/json' },
                 body: JSON.stringify(regobj)
             }).then((res) => {
                 toast.success('Adding product succesfull....')
                 navigate('/Home');
             }).catch((err) => {
                 //console.log('err')
                 toast.error('Failed :' + err.message);
             });

    }




    return (
        <div>
            <div className='offset-lg-3 col-lg-6'>
                <form className='container' onSubmit={handlesubmit}>
                    <div className='card'>
                        <div className='card-header'>
                            <h1>Add Products</h1>
                        </div>
                        <div className='card-body'>
                            < div className='row'>
                                

                                <div className='col-lg-6'>
                                    <div className='form-group'>
                                        <label>imgsrc<span className='errmsg'>*</span></label>
                                        <input value={imgsrc} onChange={e => imgsrcchange(e.target.value)} type='imgsrc' className='form-control' required></input>
                                    </div>
                                </div>

                                <div className='col-lg-6'>
                                    <div className='form-group'>
                                        <label>Full title <span className='errmsg'>*</span></label>
                                        <input value={title} onChange={e => titlechange(e.target.value)} className='form-control'  required></input>
                                    </div>
                                </div>

                                <div className='col-lg-6'>
                                    <div className='form-group'>
                                        <label> rating <span className='errmsg'>*</span></label>
                                        <input value={rating} onChange={e => ratingchange(e.target.value)} className='form-control' required></input>
                                    </div>
                                </div>

                                <div className='col-lg-6'>
                                    <div className='form-group'>
                                        <label>regprc no<span className='errmsg'>*</span></label>
                                        <input value={regprc} onChange={e => regprcchange(e.target.value)} className='form-control' required></input>
                                    </div>
                                </div>

                                <div className='col-lg-6'>
                                    <div className='form-group'>
                                        <label>saleprc <span className='errmsg'>*</span></label>
                                        <input value={saleprc} onChange={e => saleprcchange(e.target.value)} className='form-control' required></input>
                                        
                                    </div></div>
                                <div className='col-lg-12'>
                                    <div className='form-group'>
                                        <label>model </label>
                                        <select onChange={e => modelchange(e.target.value)} className='form-control'>
                                            <option>Wireless_buds</option>
                                            <option>Rockerz_Wireless</option>
                                            <option>Wired_Earphones</option>
                                            <option>Smart_Watches</option>
                                            <option>Wireless_Speakers</option>
                                            <option>Home_Theatre_Systems_Soundbars</option>
                                            <option>Mobile_Accessories</option>
                                            <option>Gaming_Headphones</option>
                                        </select>
                                       
                                    </div>
                                </div>
                                <div className='col-lg-6'>
                                    <div className='form-group'>
                                        <label>percentage </label>
                                        <input value={percentage} onChange={e => percentagechange(e.target.value)} className='form-control' required></input>
                                        <br></br>
                                       


                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='card-footer'>
                      <button type='submit' className='btn btn-primary'>Add Product</button> | 
                            <Link className='btn btn-danger' to={'/Home'}> Back</Link>
                        </div>
                    </div>
                </form>
            </div>

        </div>
    )
}
