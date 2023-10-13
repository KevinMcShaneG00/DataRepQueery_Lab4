function BookItem(props){

    return(
        <div>
            {/* how each book item is displayed/formated */}
            <h3>
                {props.myBook.title}
            </h3>
            <img src={props.myBook.thumbnailUrl}></img>
            <p>{props.myBook.authors[0]}</p>
        </div>
    );

}

export default BookItem;