
function Services({ services }) {
    return (
        <>
         <section className="bg-body-tertiary bg-primary" data-bs-theme="dark">
        <div className="container">
          <div className="row">
            <div className="col-md-12 text-center mb-2">
              <h2 className="py-2" style={{ color: 'white' }}>Services</h2>
              <p className="py-1" style={{ color: 'white' }}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor at, eveniet dolorum soluta hic minima et. Eaque repellat cumque eveniet?</p>
            </div>
          </div>
        </div>
      </section>
            <div className="container">
                <div className="row mb-4">
                    <div className="col-md-12">
                        <h3 className="text-center py-4">Services</h3>
                    </div>

                    {services.slice(0,3).map((item, index) => (
                        <div className="col-md-4" key={index}>
                            <div className="card my-3">
                                <img src={item.imgSrc} className="card-img-top" alt="..."  height={180}/>
                                <div className="card-body">
                                    <h5 className="card-title">{item.title}</h5>
                                    <p className="card-text">{item.description} </p>
                                    <a href={item.link} className="btn btn-danger">Read More</a>
                                </div>
                            </div>
                        </div>
                     ))

                    }
                </div>
            </div>
        </>
    )
}

export default Services
