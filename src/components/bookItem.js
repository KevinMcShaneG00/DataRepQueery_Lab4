import { Card } from "react-bootstrap";

function BookItem(props){

    return(
        <div>
            {/* how each book item is displayed/formated */}
            <Card>
                <Card.Header>{props.myBook.title}</Card.Header>
                <Card.Body>
                    <blockquote className="blockquote mb-0">
                        <img src={props.myBook.thumbnailUrl}></img>
                        <footer>
                            {props.myBook.authors[0]}
                        </footer>
                    </blockquote>
                </Card.Body>
            </Card>
        </div>
    );

}

export default BookItem;