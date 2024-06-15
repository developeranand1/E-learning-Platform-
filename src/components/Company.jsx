import "./Company.css";

const Company = () => {
    const imgGroup = [
        {
            img: "/company/1.png"
        },
        {
            img: "/company/2.png"
        },
        {
            img: "/company/3.png"
        },
        {
            img: "/company/4.png"
        },
        {
            img: "/company/5.png"
        },
        {
            img: "/company/6.png"
        },
    ];

    return (
        <>
            <div className="container">
                <div className="row my-5">
                    <div className="col-md-12">
                        <h3 className="text-center">I work with the best companies</h3>
                        <p className="text-center"><small>May I add you to the list</small></p>
                        <div className="img-group">
                            {imgGroup.map((item, index) => (
                                <img className="partner-logo" src={item.img} alt={`Company logo ${index + 1}`} key={index} />
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Company;
