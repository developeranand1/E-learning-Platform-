import './About.css'
import Features from './Features'
import Offer from './Offer'

const FeaturesData=[
  {
                             
    img:'/icons/insurance.png',
    title:"Privacy Guaranteed",
    about:"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Facere, error?"
  },
  {
                             
    img:'/icons/amendment.png',
    title:"Free Amendments",
    about:"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Facere, error?"
  },
  {
                             
    img:'/icons/badge.png',
    title:"Original Submissions",
    about:"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Facere, error?"
  },
  {
                             
    img:'/icons/real-time.png',
    title:"One-Time Delivery",
    about:"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Facere, error?"
  },
  {
                             
    img:'/icons/success.png',
    title:"Expert Writers",
    about:"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Facere, error?"
  },
  {
                             
    img:'/icons/financial.png',
    title:"Money-Back Guarantee",
    about:"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Facere, error?"
  },
]

function About() {
  return (
    <>
      <section className="bg-body-tertiary bg-primary" data-bs-theme="dark">
        <div className="container">
          <div className="row">
            <div className="col-md-12 text-center mb-2">
              <h2 className="py-2" style={{ color: 'white' }}>About US</h2>
              <p className="py-1" style={{ color: 'white' }}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor at, eveniet dolorum soluta hic minima et. Eaque repellat cumque eveniet?</p>
            </div>
          </div>
        </div>
      </section>
      <div className="container">
        <div className="row my-4">
          <div className="col-md-6 my-5">
            <h3 className='my-2'><strong><span className='text-danger'>E-Learning</span></strong> Strives For Quality Service And 100% <strong> <span className='text-warning'>Satisfaction Of Customers!</span></strong></h3>
            <p className='py-2'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe temporibus est nam, mollitia assumenda eveniet vitae, eos consequuntur animi quod similique aspernatur tempora fuga, quis debitis consequatur sequi commodi perspiciatis.</p>
            <button className='btn btn-danger'>Write my essay</button>
          </div>
          <div className='col-md-6'>
            <div className='bg-img'>
              <img src="/imgs/about1.png" alt="about" width={270} />
              <img className='happy-img' src="/imgs/happy.png" alt="happy-img" />
            </div>
          </div>
        </div>
      </div>
      <Features features={FeaturesData} />
      <Offer/>
    </>
  )
}

export default About
