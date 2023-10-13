import BookItem from "./bookItem";

function Books(props){
    //access json from read.js and pass it into bookItem 1 at a time
    return props.myBooks.map(
        (book)=>{
            return <BookItem myBook={book} key={book.isbn}></BookItem>
        }
    );
}

export default Books;