import { useLoaderData, useNavigate, useParams } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { SetReadBooks, SetWishedBooks, getReadBooks } from "./LocalStorage";
import { useContext } from "react";
import { AuthContext } from "../AuthProvider/AuthProvider";


const BookDetail = () => {
    const { user } = useContext(AuthContext);
    const book = useLoaderData();
    const nav = useNavigate();
    console.log(book);

    const Read = async () => {
        if (user.uid) {

            const ReadList = await getReadBooks();
            console.log(ReadList);
            const exist = ReadList.find(item => (item.bookId == book.bookId && item.uId==user.uid ));
            if (exist) {
                toast.warn("You have already read this book");
            }
            else {
                SetReadBooks(book.bookId,user.uid);
                console.log(getReadBooks());
                toast("Yay! You read this Book");

            }
        }
        else{
            nav("/login",{state:`/books/${book._id}`})
        }

    }
    const Wish = () => {
        SetWishedBooks(book.bookId,user.uid);
    }
    return (
        <div className="grid grid-cols-2 mx-32 pb-5">
            <div className="flex justify-center items-center w-[100%] bg-[#F3F3F3] py-10 rounded-xl">
                <img src={book.image} alt="" className="w-[300px] bg" />
            </div>
            <div className="px-10">
                <h1 className="text-[40px] font-bold">{book.bookName}</h1>
                <h3 className="text-xl font-semibold">By: {book.author}</h3>
                <div className="border-1 border border-[#13131318] w-[100%] my-2"></div>
                <h3 className="text-xl">{book.category}</h3>
                <div className="border-1 border border-[#13131318] w-[100%] my-2"></div>
                <p className="text-base leading-[18px]"><strong>Review:</strong> {book.review}</p>
                <div className="flex gap-x-5 flex-wrap my-3 items-center">
                    <p className="font-bold">Tag</p>

                    {
                        book.tags.map(tag => (<p className="font-semibold bg-[#23BE0A0D] text-[#23BE0A] rounded-full text-wrap py-1 px-4 leading-[]">#{tag}</p>))
                    }
                </div>
                <div className="border-1 border border-[#13131318] w-[100%] my-2"></div>
                <div className="flex justify-start gap-10 leading-[32px]">
                    <div className="text-[#131313B3]">
                        <p>Number of Pages:</p>
                        <p>Publisher:</p>
                        <p>Year of Publishing:</p>
                        <p>Rating:</p>
                    </div>
                    <div className="font-bold">
                        <p>{book.totalPages}</p>
                        <p>{book.publisher}</p>
                        <p>{book.yearOfPublishing}</p>
                        <p>{book.rating}</p>
                    </div>
                </div>
                <div className="space-x-5 text-[18px] mt-5">
                    <div className="btn bg-white border-1 " onClick={Read}>Add to Cart</div>
                    <div className="btn bg-[#50B1C9] text-white" onClick={Wish}>Wishlist</div>
                </div>
                <ToastContainer></ToastContainer>

            </div>

        </div>
    );
};

export default BookDetail;