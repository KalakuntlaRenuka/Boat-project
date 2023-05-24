import React, { useState } from 'react'
import { Link ,useNavigate} from 'react-router-dom';

import { toast } from 'react-toastify';

export default function Registration() {
    const [id, idchange] = useState("");
    const [password, passwordchange] = useState("");
    const [name, namechange] = useState("");
    const [email, emailchange] = useState("");
    const [phone, phonechange] = useState("");
    const [country, countrychange] = useState("");
    const [address, addresschange] = useState("");
    const [gender, genderchange] = useState("female");

    const navigate = useNavigate();


    const isValidate = () => {
        let isproceed = true;
        let errormessage = 'please enter the value in';
        if (id === null || id === '') {
            isproceed = false;
            errormessage += ' username';
        }
        if (id === null || name === '') {
            isproceed = false;
            errormessage += ' Fullname';
        }
        if (id === null || password === '') {
            isproceed = false;
            errormessage += ' Password';
        }
        if (id === null || email === '') {
            isproceed = false;
            errormessage += ' Email';
        }
        if (!isproceed) {
            toast.warning(errormessage)
        }
        // else{
        //     if(/^[a-zA-Z0-9]+ @[a-zA-Z0-9]+$/.test(email)){
        //     }else{
        //             isproceed = false;
        //             toast.warning('Please enter the valid email')
        //         }
        //     }
        
        return isproceed;
    }

    const handlesubmit = (e) => {
        e.preventDefault();
        let regobj = { id, name, password, email, phone, country, address, gender };
        if(isValidate()){
            //console.log(user)
             fetch("http://localhost:8000/user", {
              method: "POST",
                 headers: { 'content-type': 'application/json' },
                 body: JSON.stringify(regobj)
             }).then((res) => {
                 toast.success('Registered succesfull.')
                 navigate('/login');
             }).catch((err) => {
                 console.log('err')
                 toast.error('Failed :' + err.message);
             });
        }
    }




    return (
        <div>
            <div className='offset-lg-3 col-lg-6'>
                <form className='container' onSubmit={handlesubmit}>
                    <div className='card'>
                        <div className='card-header'>
                            <h1>Registration</h1>
                        </div>
                        <div className='card-body'>
                            < div className='row'>
                                <div className='col-lg-6'>
                                    <div className='form-group'>
                                        <label>User Name <span className='errmsg'>*</span></label>
                                        <input value={id} onChange={e => idchange(e.target.value)} className='form-control'></input>
                                    </div>
                                </div>

                                <div className='col-lg-6'>
                                    <div className='form-group'>
                                        <label>Password<span className='errmsg'>*</span></label>
                                        <input value={password} onChange={e => passwordchange(e.target.value)} type='password' className='form-control'></input>
                                    </div>
                                </div>

                                <div className='col-lg-6'>
                                    <div className='form-group'>
                                        <label>Full Name <span className='errmsg'>*</span></label>
                                        <input value={name} onChange={e => namechange(e.target.value)} className='form-control'></input>
                                    </div>
                                </div>

                                <div className='col-lg-6'>
                                    <div className='form-group'>
                                        <label> Email <span className='errmsg'>*</span></label>
                                        <input value={email} onChange={e => emailchange(e.target.value)} className='form-control'></input>
                                    </div>
                                </div>

                                <div className='col-lg-6'>
                                    <div className='form-group'>
                                        <label>Phone no<span className='errmsg'>*</span></label>
                                        <input value={phone} onChange={e => phonechange(e.target.value)} className='form-control'></input>
                                    </div>
                                </div>

                                <div className='col-lg-6'>
                                    <div className='form-group'>
                                        <label>Country <span className='errmsg'>*</span></label>
                                        <select value={country} onChange={e => countrychange(e.target.value)} className='form-control'>
                                            <option>India</option>
                                            <option>USA</option>
                                            <option>Singapore</option>
                                        </select>
                                    </div></div>
                                <div className='col-lg-12'>
                                    <div className='form-group'>
                                        <label>Address </label>
                                        <textarea value={address} onChange={e => addresschange(e.target.value)} className='form-control'></textarea>
                                    </div>
                                </div>
                                <div className='col-lg-6'>
                                    <div className='form-group'>
                                        <label>Gender </label>
                                        <br></br>
                                        <label> <input type='radio' checked={gender === 'male'} onChange={e => genderchange(e.target.value)} name='gender' value="male" className='app-check'></input>
                                       Male</label>
                                       <label> <input type='radio' checked={gender === 'female'} onChange={e => genderchange(e.target.value)} name='gender' value="Female" className='app-check'></input>
                                        Female</label>


                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='card-footer'>
                      <button type='submit' className='btn btn-primary'>   Register</button>
                            <Link className='btn btn-danger'  to="/Home/">Back</Link>
                        </div>
                    </div>
                </form>
            </div>

        </div>
    )
}
