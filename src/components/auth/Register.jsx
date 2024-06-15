import { useState } from "react";
import ReCAPTCHA from "react-google-recaptcha";

const Register = () => {
    const   [captcha, setCaptcha]=useState("");
    const onCaptchaChange=(value) =>{
        setCaptcha(value)
    }
    return (
        <>
            <div className="container my-5">
                <div className="row">
                    <div className="col-md-6">
                        <div className="bg-login">
                            <h4 className='logo'>E-Learning</h4>
                            <h1 className='title py-3'>E-Learning is <span className='text-warning'>your ultimate learn</span></h1>
                            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Mollitia, aliquam?</p>
                            <div className="card shadow rounded mt-5">
                                <div className="card-body">
                                    <div className="row text-center">
                                        <div className="col-md-6 bordered">
                                            <img src="/icons/academic.png" alt="" />
                                            <h5>Lorem, ipsum dolor.</h5>
                                            <p> Lorem ipsum dolor </p>
                                        </div>
                                        <div className="col-md-6">
                                            <img src="/icons/graduation.png" alt="" />
                                            <h5>Lorem, ipsum dolor.</h5>
                                            <p> Lorem ipsum dolor </p>
                                        </div>

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6">
                      
                       <div className="register-section">
                       <form action="">
                            <div className="row mb-2">
                                <div className="col-md-12">
                                    <label htmlFor="" className="form-label">Full Name</label>
                                    <input type="text" className="form-control" placeholder='Enter Full Name' />
                                </div>
                            </div>

                            <div className="row my-2">
                                <div className="col-md-12">
                                    <label htmlFor="" className="form-label">Email</label>
                                    <input type="text" className="form-control" placeholder='Enter Email' />
                                </div>
                            </div>

                            <div className="row my-2">
                                <div className="col-md-12">
                                    <label htmlFor="" className="form-label">Phone Number </label>
                                    <input type="text" className="form-control" placeholder='Enter Phone Number' />
                                </div>
                            </div>

                            <div className="row my-2">
                                <div className="col-md-12">
                                    <label htmlFor="" className="form-label">Password</label>
                                    <input type="text" className="form-control" placeholder='Enter Password' />
                                </div>
                            </div>
                            <div className="row my-2">
                                <div className="col-md-12">
                                    <ReCAPTCHA onChange={onCaptchaChange} sitekey="6LfyvfcpAAAAAHoaR_ImIpGsxXuiXIZpmUhC1Q8x"/>
                                </div>
                            </div>
                            <div className="row mt-3">
                                <div className="col-md-12">
                                    <button className='btn btn-danger form-control' disabled={!captcha} >Register</button>

                                </div>
                            </div>
                        </form>
                        <div className='text-center py-3'>
                        <p >Do you have already account? <a className='create-btn' href="">Login now</a></p>
                        </div>
                       </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Register;
