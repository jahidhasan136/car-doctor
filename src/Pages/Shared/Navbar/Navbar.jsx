import { Link } from "react-router-dom";
import logo from '../../../assets/icons/logo.svg'
import { FaSearch, FaShoppingBag } from "react-icons/fa";
import { useContext } from "react";
import { AuthContext } from "../../Providers/AuthProvider";

const Navbar = () => {


    const { user, logOut } = useContext(AuthContext)

    const handleLogout = () => {
        logOut()
            .then()
            .catch(error => {
                console.error(error.message)
            })
    }

    return (
        <div className="navbar bg-base-100">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                        <li><Link to="/">Home</Link></li>
                        <li tabIndex={0}>
                            <a>
                                About
                            </a>
                        </li>
                        <li><a>Services</a></li>
                        <li><a>Blog</a></li>
                        <li><a>Contact</a></li>
                        {
                            user?.email ?
                                <>
                                    <li><Link to="/bookings">My bookings</Link></li>
                                    <li onClick={handleLogout}><Link>Log out</Link></li>
                                </>
                                :
                                <li><Link to="/login">Login</Link></li>

                        }
                    </ul>
                </div>
                <Link to="/">
                    <img src={logo} alt="" />
                </Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    <li><Link to="/">Home</Link></li>
                    <li tabIndex={0}>
                        <a>
                            About
                        </a>
                    </li>
                    <li><a>Services</a></li>
                    <li><a>Blog</a></li>
                    <li><a>Contact</a></li>
                    {
                        user?.email ?
                            <>
                                <li><Link to="/bookings">My bookings</Link></li>
                                <li onClick={handleLogout}><Link>Log out</Link></li>
                            </>
                            :
                            <li><Link to="/login">Login</Link></li>

                    }
                </ul>
            </div>
            <div className="navbar-end space-x-6">
                <FaShoppingBag></FaShoppingBag>
                <FaSearch></FaSearch>
                <button className="btn btn-outline btn-error">Appointment</button>
            </div>
        </div>
    );
};

export default Navbar;