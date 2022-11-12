import { Link, useLocation } from "react-router-dom";
import { MdArrowBackIosNew } from "react-icons/md";

export default function Header(){
    const location = useLocation();

    return (
        <nav className="navbar fixed-top navbar-dark bg-dark">
            <div className="container-fluid justify-content-center">
                {
                    location.pathname !== "/" &&
                    <Link to={"/"} className="text-white goback"><MdArrowBackIosNew className="mb-1"/> Back</Link>
                }
                <h6 className="navbar-brand m-0">Home</h6>
            </div>
        </nav>
    );

}