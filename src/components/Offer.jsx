import './Offer.css'

const Offer = () => {
    return (
        <>
            <div className="container">
                <div className='offer-bg'>
                    <div className="row">
                        <div className="col-md-8">
                            <h3>Writing Services We Offer </h3>
                            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Placeat magnam quas optio beatae consectetur aut.</p>
                            <ul className='ul-list'>
                                <li> <a className='active-link' href="">Essay</a></li>
                                <li> <a href="">Case Study</a></li>
                                <li> <a href="">Book Report </a></li>
                                <li> <a href="">Research Paper</a></li>

                                <li> <a className='last-link' href="">Term Paper</a></li>
                            </ul>
                            <h4>Essay</h4>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores, nam.</p>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda voluptas dolorum cupiditate perspiciatis.</p>
                        </div>
                        <div className="col-md-4">
                            <div className="card shadow rounded">
                                <div className="card-body">
                                    <form action="">

                                        <div className="row my-3">
                                            <div className="col-md-12">
                                                <input type="text" className='form-control' placeholder='Enter Topic' />
                                            </div>
                                        </div>
                                        <div className="row my-3">
                                            <div className="col-md-12">
                                                <select className='form-control'>
                                                    <option value="Subject">Subject</option>
                                                    <option value="Deadline">Deadline</option>
                                                    <option value="Deadline">Deadline</option>
                                                    <option value="Deadline">Deadline</option>
                                                </select>
                                            </div>
                                        </div>
                                        <div className="row my-3">
                                            <div className="col-md-12">
                                                <select className='form-control'>
                                                    <option value="Deadline">Deadline</option>
                                                    <option value="Deadline">Deadline</option>
                                                    <option value="Deadline">Deadline</option>
                                                    <option value="Deadline">Deadline</option>
                                                </select>

                                            </div>
                                        </div>

                                        <div className="row my-3">
                                            <div className="col-md-12">
                                                <textarea className='form-control' placeholder='Enter Details'>

                                                </textarea>

                                            </div>
                                        </div>

                                        <div className="row my-3">
                                            <div className="col-md-12">
                                                <button className='btn btn-danger form-control'>Submit</button>

                                            </div>
                                        </div>


                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </>
    );
}

export default Offer;
