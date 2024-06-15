import { Link, useLocation} from "react-router-dom";
import './Sidebar.css'
import Dashboard from "./Dashboard";
import Order from "./Order";

const Sidebar = () => {

    const location=useLocation();
    const renderContent = () => {
        switch (location.pathname) {
            case '/dashboard':
            case '/dashboards':
                return <Dashboard />;
            case '/order':
                return <Order />;
            default:
                return <Dashboard />;
        }
    }

    return (
        <>
            <div className="side-bar">
                <div className="row mx-0">
                    <div className="col-md-2">
                        <div className="card" >
                            <ul className="list-group list-group-flush">
                                <li className="list-group-item"> <Link to='/dashboards'>Dashboard</Link> </li>
                                <li className="list-group-item"><Link>Category</Link> </li>
                                <li className="list-group-item"><Link>Payments</Link> </li>
                                <li className="list-group-item"><Link>Products</Link> </li>

                                <li className="list-group-item"><Link to='/order' >Order</Link> </li>
                                <li className="list-group-item"><Link>Users</Link> </li>
                                <li className="list-group-item"><Link>Learning</Link> </li>
                                <li className="list-group-item"><Link>Career</Link> </li>
                                <li className="list-group-item"><Link>Settings</Link> </li>
                                <li className="list-group-item"><Link>Dashboard</Link> </li>
                                <li className="list-group-item"><Link>Dashboard</Link> </li>
                                <li className="list-group-item"><Link>Dashboard</Link> </li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-md-10">
                       {renderContent()}
                    </div>
                </div>
            </div>
        </>
    );
}

export default Sidebar;
