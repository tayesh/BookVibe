import { Link } from "react-router-dom";


const Book = ({ book }) => {
    const { _id,bookId,bookName, image, rating, category, tags, author } = book;

    return (
        <Link to={`books/${_id}`}>
            <div className="p-5 border-2 rounded-2xl flex flex-col justify-between">
                <div>
                    <div className="flex justify-center items-center w-[100%] bg-[#F3F3F3] py-10 rounded-xl">
                        <img src={image} alt="" className="w-[134] h-[166px]" />
                    </div>
                    <div className="flex gap-x-5 flex-wrap my-3 ">

                        {
                            tags.map(tag => (<p className="bg-[#23BE0A0D] text-[#23BE0A] rounded-full text-wrap py-1 px-2 leading-[]">#{tag}</p>))
                        }
                    </div>

                </div>
                <div>
                    <h2 className="text-3xl font-bold">{bookName}</h2>
                    <p className="text-xl">by:{author}</p>
                </div>
                <div>

                    <div className="border-dashed border border-[#13131318] w-[100%] my-5"></div>
                    <div className="text-base flex justify-between">
                        <p >{category}</p>
                        <div className="flex gap-3">
                            <p>{rating}</p>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z" />
                            </svg>

                        </div>
                    </div>
                </div>

            </div>
        </Link>
    );
};

export default Book;