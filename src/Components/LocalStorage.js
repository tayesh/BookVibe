import { toast } from "react-toastify";
import { AuthContext } from "../AuthProvider/AuthProvider";
import { useContext, useState } from "react";
import { Await } from "react-router-dom";


const getState=()=>{
    const state=localStorage.getItem("STATE");
    return JSON.parse(state);
}
const setState=state=>{
    localStorage.setItem("STATE",JSON.stringify(state));
}

const getReadBooks = async () => {
    try {
        const res = await fetch("http://localhost:5001/cart");
        const ReadList = await res.json();
        console.log("ReadList", ReadList);
        return ReadList;
    } catch (err) {
        console.error('Error fetching data:', err);
        return [];
    }
};

const SetReadBooks = (id,uid) => {
    
    
    
    const newbook = {
        uId:uid,
        bookId:id


        
    }
        fetch("http://localhost:5001/addToCart",{
            method: 'POST',
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify(newbook)})
            .then(res=>res.json())
            .then(data=>{
                console.log(data);
            })

    

}
const getWishedBooks = async () => {
    try {
        const res = await fetch("http://localhost:5001/wishlist");
        const ReadList = await res.json();
        console.log("ReadList", ReadList);
        return ReadList;
    } catch (err) {
        console.error('Error fetching data:', err);
        return [];
    }
};
const SetWishedBooks =async (id,uId) => {
    
    const ReadList =await getReadBooks();
    const exist = ReadList.find(item => (item.bookId == id && item.uId==uId ));
    const WishedList =await getWishedBooks();
    const exist1 = WishedList.find(item => (item.bookId == id && item.uId==uId ));

    if (!exist && !exist1) {
        const newbook = {
            uId:uId,
            bookId:id
    
    
            
        }
            fetch("http://localhost:5001/addToWishlist",{
                method: 'POST',
                headers: {
                    'Content-type': 'application/json'
                },
                body: JSON.stringify(newbook)})
                .then(res=>res.json())
                .then(data=>{
                    console.log(data);
                    toast.success("The book is successfully added to the wishlist")
                })
        

    }
    if (exist1) {
        toast.warn("The book is already in the wish list");
    }
    if (exist) {
        toast.warn("You have already read this book");
    }

}
export { getReadBooks, SetReadBooks, SetWishedBooks,getWishedBooks,getState,setState };