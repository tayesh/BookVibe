import { useLoaderData } from "react-router-dom";
import Book from "./Book";


const New = () => {
    const books = useLoaderData();
    return (
        <div className="mx-32">
            <hr />
            <h2 className="text-4xl text-center font-semibold my-5">New books comming this EID!!!</h2>
            <hr />
            <div className="grid grid-cols-3 gap-8 mt-4 ">
                {

                    books.map(book => (<Book key={book.bookId} book={book}></Book>))

                }
            </div>

        </div>
    );
};

export default New;