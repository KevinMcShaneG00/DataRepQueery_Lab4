import BookItem from "./bookItem";

function Books(props){
    //access json from read.js and pass it into bookItem 1 at a time
    //from www.c-sharpcorner.com/blogs/map-method-in-react-js
    //The map () method creates a new array by calling a provided function on every element in the calling array.
    return props.myBooks.map(
        (book)=>{
            return <BookItem myBook={book} key={book.isbn}></BookItem>
        }
    );
}

export default Books;