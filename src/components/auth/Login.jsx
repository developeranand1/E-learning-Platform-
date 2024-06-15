import { useNavigate } from 'react-router-dom';
import './Login.css'
const Login = () => {

    const navigate=useNavigate();
    const handleLogin =(e) => {
        e.preventDefault();
        navigate('/dashboard')
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
                        <h3><img src="/icons/academic.png" alt="" />Welcome to <span className='text-danger'>E-Learning</span></h3>
                        <form onSubmit={handleLogin}>
                            <div className="row my-3">
                                <div className="col-md-12">
                                    <label htmlFor="" className="form-label">Email</label>
                                    <input type="text" className="form-control" placeholder='Enter Email' />
                                </div>
                            </div>

                            <div className="row my-3">
                                <div className="col-md-12">
                                    <label htmlFor="" className="form-label">Password</label>
                                    <input type="text" className="form-control" placeholder='Enter Password' />
                                </div>
                            </div>
                            <div className="row my-3">
                                <div className="col-md-12">
                                    <div className='show-password'>
                                        <div>
                                            <input type="checkbox" />
                                            <label className='remember-me'>Remember Me</label>
                                        </div>
                                        <a href="" className='forget-password'>Forget Password ?</a>
                                    </div>

                                </div>
                            </div>
                            <div className="row my-4">
                                <div className="col-md-12">
                                    <button type='submit' className='btn btn-danger form-control'>Login</button>

                                </div>
                            </div>
                        </form>
                        <p className='text-center'> <span>OR</span> </p>
                        <div className='text-center google-with'>
                            <a className='google-login' href=""><img src="/icons/google2.png" alt="" /> Continue with Google </a>
                        </div>

                        <div className='text-center py-4'>
                        <p >Do not have any account ? <a className='create-btn' href="">Create an account</a></p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Login;
