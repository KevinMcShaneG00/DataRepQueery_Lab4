import { Card } from "react-bootstrap";

function BookItem(props){

    return(
        <div>
            {/* how each book item is displayed/formated */}
            <Card style={{ width: '18rem' }}>
                <Card.Title>{props.myBook.title}</Card.Title>
                <Card.Img src={props.myBook.thumbnailUrl}></Card.Img>
                <Card.Text>{props.myBook.authors[0]}</Card.Text>
            </Card>
        </div>
    );

}

export default BookItem;