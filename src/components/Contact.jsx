import { FaFacebookSquare } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { IoLogoLinkedin } from "react-icons/io5";
import { FaInstagramSquare } from "react-icons/fa";
import "./Contact.css"
import Reachus from "./Reachus";


function Contact() {
  const bgStyle={
    backgroundColor:"#9a72f9",
    margin:"40px 0 0 0",
    borderTopLeftRadius:"50%",
    borderTopRightRadius:"20px"
  }
  const messageBtnStyle={
    float:"right",
  }
  return (
    <>
  <section className="bg-body-tertiary bg-primary" data-bs-theme="dark">
        <div className="container">
          <div className="row">
            <div className="col-md-12 text-center mb-2">
              <h2 className="py-2" style={{ color: 'white' }}>Contact US</h2>
              <p className="py-1" style={{ color: 'white' }}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor at, eveniet dolorum soluta hic minima et. Eaque repellat cumque eveniet?</p>
            </div>
          </div>
        </div>
      </section>
    <div className="container">
      <div className="row mb-5">
        <div className="col-md-6 mt-4">
          <p className="mt-5"><span className="p-2 mb-2 bg-danger-subtle rounded">Contact</span></p>
          <h1 className="py-2"><strong>We would Love to Talk about How We Can</strong></h1>
          <h1 className="py-2"><strong><span className="text-danger">Work</span> <span className="text-warning">Together</span></strong> </h1>
          <p className="py-1">If you have any questions, inquiries, please do not hesitate to get in touch</p>
         <ul className="follow-now" >
         <p className="bg-danger rounded follow-title">Follow Now</p>
          <li className=""><FaFacebookSquare /></li>
          <li className=""><FaYoutube /></li>
          <li className=""><IoLogoLinkedin /></li>
          <li className=""><FaInstagramSquare/> </li>
         </ul>
        </div>
        <div className="col-md-6">
         <div className="text-center">
         <img style={bgStyle} src="imgs/contact.png" alt="" width={430} />
         </div>
        </div>
      </div>
      <div className="row">
        <div className="col-md-12">
          <div className="card mx-5 my-5 shadow bg-body-tertiary">
            <div className="card-body m-3">
              <div className="row my-4">
                <div className="col-md-6">
                  <label className="form-label">Full Name</label>
                  <input type="text" className="form-control border-success" placeholder="The Rock" />
                </div>
                <div className="col-md-6">
                  <label className="form-label">Your Email</label>
                  <input type="text" className="form-control border-success" placeholder="theRock001@gmail.com" />
                </div>
              </div>
              <div className="row my-4">
                <div className="col-md-6">
                  <label className="form-label">Mobile Number</label>
                  <input type="text" className="form-control border-success" placeholder="+91 8877674448" />
                </div>
                <div className="col-md-6">
                  <label className="form-label">Company Name</label>
                  <input type="text" className="form-control border-success" placeholder="AB Technology in US" />
                </div>
              </div>
              <div className="row my-4">
                <div className="col-md-12">
                  <label className="form-label">How can i help you ?</label>
                  <input type="text" className="form-control border-success" placeholder="Pick up enterprise package" />
                </div>
                </div>
                <div className="row my-4">
                <div className="col-md-12">
                  <label className="form-label">Your Message</label>
                <textarea className="form-control border-success" placeholder="Message"></textarea>
                </div>
                </div>
                <div className="row">
                <div className="col-md-12">
                 <button className="btn btn-danger mt-3" style={messageBtnStyle}>Send Message</button>
                </div>
                </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <Reachus/>
    </>
  )
}

export default Contact
