import { NavLink } from "react-router-dom";


const BookDetail1 = ({ book,state }) => {


    return (
        <div className="grid grid-cols-5 gap-8 p-7 border-1 border rounded-2xl my-5">
            <div className="col-span-1 flex justify-center items-center w-[100%] bg-[#F3F3F3] py-10 rounded-xl">
                <img src={book.image} alt="" className="w-[134] h-[166px]" />
            </div>
            <div className="col-span-4 flex flex-col justify-between">
                <h1 className="text-4xl font-bold">{book.bookName}</h1>
                <p className="text-xl">By: {book.author}</p>
                <div className="flex gap-4 items-center ">
                    <p className="text-[18px] font-semibold">Tags</p>
                    {
                        book.tags.map(tag => <p className="bg-[#22be0a26] text-[#23BE0A] rounded-full text-wrap py-1 px-2">#{tag}</p>)
                    }
                    <div className="flex justify-center items-center">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                            <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
                        </svg>
                        <p>Year of Publishing : {book.yearOfPublishing}</p>

                    </div>

                </div>
                <div className="flex gap-4 items-center text-[18px]">
                    <svg width="24.000000" height="24.000000" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
                        <desc>
                            Created with Pixso.
                        </desc>
                        <defs>
                            <clipPath id="clip15_12346">
                                <rect id="Frame" width="24.000000" height="24.000000" fill="white" fillOpacity="0" />
                            </clipPath>
                        </defs>
                        <rect id="Frame" width="24.000000" height="24.000000" fill="#FFFFFF" fillOpacity="0" />
                        <g clipPath="url(#clip15_12346)">
                            <path id="Vector" d="M15 19.12C15.85 19.37 16.73 19.5 17.62 19.5C19.05 19.5 20.46 19.17 21.74 18.54C21.78 17.65 21.52 16.76 21.01 16.02C20.5 15.29 19.77 14.73 18.92 14.45C18.06 14.17 17.14 14.17 16.29 14.46C15.44 14.75 14.71 15.31 14.21 16.05M15 19.12C15 18.01 14.71 16.96 14.21 16.05C13.53 14.81 12.45 13.83 11.15 13.27C9.85 12.7 8.41 12.59 7.03 12.94C5.66 13.29 4.45 14.09 3.58 15.21C2.71 16.33 2.24 17.7 2.24 19.12L2.25 19.23C4.11 20.35 6.29 21 8.62 21C10.87 21 13.07 20.39 15 19.23L15 19.12L15 19.12ZM11.01 8.76C10.37 9.39 9.52 9.75 8.62 9.75C7.72 9.75 6.87 9.39 6.23 8.76C5.6 8.12 5.25 7.27 5.25 6.37C5.25 5.47 5.6 4.62 6.23 3.98C6.87 3.35 7.72 3 8.62 3C9.52 3 10.37 3.35 11.01 3.98C11.64 4.62 12 5.47 12 6.37C12 7.27 11.64 8.12 11.01 8.76ZM19.48 10.48C18.98 10.97 18.32 11.25 17.62 11.25C16.92 11.25 16.26 10.97 15.76 10.48C15.27 9.98 15 9.32 15 8.62C15 7.92 15.27 7.26 15.76 6.76C16.26 6.27 16.92 6 17.62 6C18.32 6 18.98 6.27 19.48 6.76C19.97 7.26 20.25 7.92 20.25 8.62C20.25 9.32 19.97 9.98 19.48 10.48Z" stroke="#131313" strokeOpacity="0.600000" strokeWidth="1.500000" strokeLinejoin="round" />
                        </g>
                    </svg>
                    <p>Publisher : {book.publisher}</p>
                    <svg width="24.000000" height="24.000000" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
                        <desc>
                            Created with Pixso.
                        </desc>
                        <defs>
                            <clipPath id="clip13_11212">
                                <rect id="Frame" width="24.000000" height="24.000000" fill="white" fillOpacity="0" />
                            </clipPath>
                        </defs>
                        <rect id="Frame" width="24.000000" height="24.000000" fill="#FFFFFF" fillOpacity="0" />
                        <g clipPath="url(#clip13_11212)">
                            <path id="Vector" d="M19.5 14.25L19.5 11.62C19.5 10.73 19.14 9.87 18.51 9.23C17.87 8.6 17.02 8.25 16.12 8.25L14.62 8.25C14.32 8.25 14.04 8.13 13.82 7.92C13.61 7.7 13.5 7.42 13.5 7.12L13.5 5.62C13.5 4.72 13.14 3.87 12.51 3.23C11.87 2.6 11.02 2.25 10.12 2.25L8.25 2.25M9 16.5L9 17.25M12 14.25L12 17.25M15 12L15 17.25M5.62 2.25C5 2.25 4.5 2.75 4.5 3.37L4.5 20.62C4.5 21.24 5 21.75 5.62 21.75L18.37 21.75C18.99 21.75 19.5 21.24 19.5 20.62L19.5 11.25C19.5 8.86 18.55 6.57 16.86 4.88C15.17 3.19 12.88 2.25 10.5 2.25L5.62 2.25Z" stroke="#131313" strokeOpacity="0.600000" strokeWidth="1.500000" strokeLinejoin="round" />
                        </g>
                    </svg>
                    <p>Page {book.totalPages}</p>


                </div>
                <hr />
                <div className="flex text-[20px] gap-5">
                    <p className="bg-[#328EFF26] text-[#328EFF] rounded-full  px-5 py-1 font-semibold">Category : {book.category}</p>
                    <p className="bg-[#FFAC3326] text-[#FFAC33] rounded-full px-5 py-1 font-semibold">Rating : {book.rating}</p>
                    {/* <button className="btn text-white bg-[#23BE0A] text-[20px]"><p>View Details</p></button> */}
                    {
                        state?<NavLink onClick={()=>document.getElementById('my_modal_1').showModal()}><p className="text-white bg-[#23BE0A] rounded-full px-5 py-1 font-semibold">Go to Payment</p></NavLink>
                        :<NavLink to={`/books/${book.bookId}`}><p className="text-white bg-[#23BE0A] rounded-full px-5 py-1 font-semibold">View Details</p></NavLink>
                    }
                </div>
                <dialog id="my_modal_1" className="modal">
                    <div className="modal-box">
                        <h3 className="font-bold text-lg">Hello!</h3>
                        <p className="py-4">Press ESC key or click the button below to close</p>
                        <div className="modal-action">
                            <form method="dialog">
                                {/* if there is a button in form, it will close the modal */}
                                <button className="btn">Close</button>
                            </form>
                        </div>
                    </div>
                </dialog>


            </div>

        </div>
    );
};

export default BookDetail1;