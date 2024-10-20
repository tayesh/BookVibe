import { useContext, useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { AuthContext } from "../AuthProvider/AuthProvider";
import useAdmin from "../useAdmin";

const Navbar = () => {
    const { user, logOut } = useContext(AuthContext);
    const [isAdmin, setIsAdmin] = useState(false);

    useEffect(() => {
        const checkAdmin = async () => {
            const adminStatus = await useAdmin(); // Assuming useAdmin is async
            setIsAdmin(adminStatus);
        };
        checkAdmin();
    }, [user]);

    const handleLogOut = () => {
        logOut()
            .then(() => setIsAdmin(false))
            .catch((error) => console.error(error));
    };

    const navlinkStyles = ({ isActive }) => ({
        borderBottom: isActive ? "1px solid #23BE0A" : "1px solid white",
        backgroundColor: isActive ? "none" : "white",
        color: isActive ? "#23BE0A" : "black",
        fontWeight: isActive ? "bold" : "normal",
        borderRadius: isActive ? "0px" : "0px"
    });

    return (
        <div className="navbar bg-base-100 px-32 py-7">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </div>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                        <li><NavLink to="./" style={navlinkStyles}>Home</NavLink></li>
                        {user && <li><NavLink to="/listed_books" style={navlinkStyles}>Listed Books</NavLink></li>}
                        <li><NavLink to="/new" style={navlinkStyles}>New Books</NavLink></li>
                        <li><NavLink to="/about" style={navlinkStyles}>About Us</NavLink></li>
                    </ul>
                </div>
                <a className="btn btn-ghost text-3xl">Book Vibe</a>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {
                        isAdmin ?
                            <>
                            <li><NavLink to={"./"}>Home</NavLink></li>
                            </>
                            :
                            <>
                                <li><NavLink to={"./"}>Home</NavLink></li>
                                <li><NavLink to={'/listed_books'}>Listed Books</NavLink></li>
                                <li><NavLink to={'/new'}>New Books</NavLink></li>
                                <li><NavLink to={"/pgtr"}>Pages to Read</NavLink></li>
                                <li><NavLink to={"/about"}>About Us</NavLink></li>
                            </>
                    }
                </ul>
            </div>
            <div className="navbar-end ">
                {user ? (
                    <>
                        <p className="mr-3">{user.displayName}</p>
                        <NavLink onClick={handleLogOut} style={navlinkStyles}>Sign out</NavLink>
                    </>
                ) : (
                    <NavLink to="/login" style={navlinkStyles}>Sign in</NavLink>
                )}
            </div>
        </div>
    );
};

export default Navbar;
