import { Link } from "react-router-dom";


const Error = () => {
    return (
        <div className='text-center leading-[200px]'>
            <h1 className='text-[300px] font-bold text-gray-400 mb-0 '>404</h1>
            <h2 className='text-[70px] text-gray-500 font-semibold mt-0'>Page Not Found</h2>
            <Link to={"/"} className="text-xl border-1 border p-3 rounded-2xl "> Go to Home</Link>
            
        </div>
    );
};

export default Error;