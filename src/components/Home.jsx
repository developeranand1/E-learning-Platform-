import Company from "./Company";
import Touch from "./Touch";

const Home = () => {
    return (
        <>
            <div className="container">
                <div className="row">
                    <div className="col-md-6 mt-5">
                        <h1 className="py-3 mt-3">Welcome To Our Company</h1>
                        <p className="py-2">Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis ratione voluptatibus porro earum quia fugiat unde nisi nemo. Non, ex.</p>
                        <button type="button" className="btn btn-danger py-2">Get Started</button>
                    </div>

                    <div className="col-md-6">
                        <img src="imgs/learning.png" alt=""  width={400}/>
                    </div>
                </div>
            </div>
            <Company/>
            <Touch/>
        </>
    );
}

export default Home;
