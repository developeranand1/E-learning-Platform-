import { Component } from 'react'
import { Link } from 'react-router-dom'
import '../App.css'
export default class Navbar extends Component {
    render() {
        return (
            < >
                <div className='nav-bar'>
                <nav className="navbar navbar-expand-lg bg-body-tertiary bg-primary fixed-top" data-bs-theme="dark">
                    <div className="container-fluid">
                        <Link className="navbar-brand" to="/" >E-Learning</Link>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                                <li className="nav-item">
                                    <Link to='/' className="nav-link active" aria-current="page" >Home</Link>
                                </li>
                                <li className="nav-item">
                                    <Link to='courses' className="nav-link" >Courses</Link>
                                </li>
                                <li className="nav-item">
                                    <Link to='services' className="nav-link" >Services</Link>
                                </li>
                                <li className="nav-item">
                                    <Link to='about' className="nav-link" >About US</Link>
                                </li>
                                <li className="nav-item">
                                    <Link to='contact' className="nav-link" >Contact US</Link>
                                </li>
                                
                                
                            </ul>

                            <div  className="d-flex">
                            <button type="button" className="btn btn-danger"><Link to='login'>Login</Link></button>
                            <button type="button" className="btn btn-warning mx-3"><Link to='register'>Register</Link> </button>
                            </div>
                           
                        </div>
                    </div>
                </nav>
                </div>
            </>
        )
    }
}

