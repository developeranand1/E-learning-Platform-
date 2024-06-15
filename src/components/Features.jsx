
import './About.css';

const Features = ({ features }) => {
    return (
        <>
            <div className="container">
                <div className="row my-5">
                    <div className="col-md-12">
                        <h5 className="text-center">Special Features of Our Essay Writing Services</h5>
                        <p className="text-center">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempora quibusdam reprehenderit debitis, quae itaque aliqu!</p>
                    </div>
                </div>
                <div className="row">
                    {
                        features.map((item, index) => (
                            <div className="col-md-4 my-3" key={index}>
                                <div className="card shadow rounded">
                                    <div className="card-body text-center">
                                        <img className='mb-2' src={item.img} alt="" />
                                        <h4 className='py-2'>{item.title}</h4>
                                        <p>{item.about}</p>
                                    </div>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>
        </>
    );
}

export default Features;
