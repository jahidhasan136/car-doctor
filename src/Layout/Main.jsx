import { Outlet } from "react-router-dom";
import Navbar from "../Pages/Shared/Navbar/Navbar";
import Footer from "../Pages/Shared/Footer/Footer";

const Main = () => {
    return (
        <>
        <div className="container max-w-7xl mx-auto">
            <Navbar></Navbar>
            <Outlet></Outlet>
        </div>   
            <Footer></Footer>
        </>
    );
};

export default Main;