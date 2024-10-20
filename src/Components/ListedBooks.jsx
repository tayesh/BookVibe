import { createContext, useContext, useEffect, useState } from "react";
import { NavLink, Outlet, Route, Router, Routes, useLocation, useNavigate } from "react-router-dom";



// export let SContext = createContext("a");
const ListedBooks = () => {
    const [state, setState] = useState("rating");
    const navigate = useNavigate();
    const location = useLocation();

    const abc = (s) => {

        const lastPart = location.pathname.substring(location.pathname.lastIndexOf('/') + 1);
        const pathSegments = location.pathname.split('/').filter(segment => segment !== '');
        const secondLastPart = pathSegments.length >= 2 ? pathSegments[pathSegments.length - 2] : '';
        // console.log(lastPart,secondLastPart);
        setState(s);
        if(lastPart==="ReadList"||secondLastPart==="ReadList"){
            navigate(`ReadList/${s}`);
        }
        if(lastPart==="WishList"||secondLastPart==="WishList"){
            navigate(`WishList/${s}`);
        }
        if(lastPart==="listed_books"){
            navigate(`ReadList/${s}`);
        }


        // window.location.reload();

    }


    return (
        <div className="mx-32">
            <h1 className="text-3xl font-bold text-center bg-[#1313130D] py-5 rounded-2xl">Books</h1>
            <div className="flex justify-center my-10">
                <div className="dropdown dropdown-hover ">
                    <div tabIndex={0} role="button" className="btn m-1 bg-[#23BE0A] text-[18px] text-white ">Sort By <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
                    </svg>
                    </div>
                    <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52">
                        <li onClick={() => { abc("rating") }} ><a>Rating</a></li>
                        <li onClick={() => { abc("totalPages") }} ><a>Number of Pages</a></li>
                        <li onClick={() => { abc("yearOfPublishing") }} ><a>Publisher Year</a></li>
                    </ul>
                </div>
            </div>
            <div className="flex items-end flex-grow">
                <NavLink to={`ReadList/${state}`}><p className="w-[100px] pb-1">Cart</p></NavLink>
                <NavLink to={`WishList/${state}`}><p className="pb-1">Wishlist</p></NavLink>
                <div className="border-1 border border-[#13131318] w-[100%]  my-2 "></div>
            </div>
            {/* <Router>
                <Routes>
                    <Route path="Readlist" element={<ReadList></ReadList>}></Route>
                    <Route path="WishList" element={<WishList></WishList>}></Route>
                </Routes>
            </Router> */}

            <Outlet></Outlet>

        </div>
    );
};

export default ListedBooks;