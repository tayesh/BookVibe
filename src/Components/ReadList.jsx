import { useLoaderData, useLocation } from "react-router-dom";
import { getReadBooks, getState } from "./LocalStorage";
import { useContext, useEffect, useState } from "react";
import BookDetail1 from "./BookDetail1";
import { descendingSortByProperty } from "./sort";
import { AuthContext } from "../AuthProvider/AuthProvider";



const ReadList = () => {
    const {user}=useContext(AuthContext);
    const books = useLoaderData();
    const [list, setList] = useState([]);
    const location =useLocation();
    // console.log(readbooks);
    useEffect( ()=>{
        const fetchbooks=async()=>{
            const readbooks = await getReadBooks();
            const filteredbooks = [];
            readbooks.forEach(element => {
                if(element.uId==user.uid){
                    books.forEach(element1=>{
                        if(element.bookId==element1.bookId){
                            filteredbooks.push(element1);
                        }
                    })
                }
                
            });
            console.log(filteredbooks);
            setList(filteredbooks)

        }
        fetchbooks();

    })

    
 

    return (
        
        <div>
           

            {
                list.map(book=><BookDetail1 key={book.bookId} book={book} state={true}></BookDetail1>)
            }
        </div>
    );
};

export default ReadList;