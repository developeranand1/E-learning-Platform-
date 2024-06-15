function Courses({ courseData }) {
    return (
        <>
            <div className="container">
                <div className="row mt-4">
                    <div className="col-md-3">
                        <div className="card">
                            <div className="card-header">
                                Category
                            </div>
                            <ul className="list-group list-group-flush">
                                <li className="list-group-item">An item</li>
                                <li className="list-group-item">A second item</li>
                                <li className="list-group-item">A third item</li>
                                <li className="list-group-item">An item</li>
                                <li className="list-group-item">A second item</li>
                                <li className="list-group-item">A third item</li>
                                <li className="list-group-item">An item</li>
                                <li className="list-group-item">A second item</li>
                                <li className="list-group-item">A third item</li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-md-9">
                        <div className="row">
                            {courseData.map((item, index) => (
                                <div className="col-md-4" key={index}>
                                    <div className="card mb-3">
                                        <img src={item.imgSrc} className="card-img-top" alt="..." height={120} />
                                        <div className="card-body">
                                            <h5 className="card-title">{item.title}</h5>
                                            {/* <p className="card-text">{item.description}</p> */}
                                            <a href={item.link} className="btn btn-danger">Read More</a>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                        <nav aria-label="Page navigation example">
                            <ul className="pagination">
                                <li className="page-item"><a className="page-link" href="#">Previous</a></li>
                                <li className="page-item"><a className="page-link" href="#">1</a></li>
                                <li className="page-item"><a className="page-link" href="#">2</a></li>
                                <li className="page-item"><a className="page-link" href="#">3</a></li>
                                <li className="page-item"><a className="page-link" href="#">4</a></li>
                                <li className="page-item"><a className="page-link" href="#">5</a></li>
                                <li className="page-item"><a className="page-link" href="#">6</a></li>
                                
                                <li className="page-item"><a className="page-link" href="#">Next</a></li>
                            </ul>
                        </nav>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Courses;
