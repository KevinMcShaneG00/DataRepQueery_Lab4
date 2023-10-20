import { useState } from "react";

function Create() {
    //useState constructor for setters and variables
    const [title, setTitle] = useState('');
    const [cover, setCover] = useState('');
    const [author, setAuthor] = useState('');
    const handleSubmit = (e) => {
        e.preventDefault();

        console.log("Title: " + title +
            " Cover: " + cover +
            " Author: " + author
        );
    }


    return (
        <form onSubmit={handleSubmit}>
            <div className="form-group">
                <label>Add Book Title: </label>
                {/* user input for title */}
                <input type="text"
                    className="form-control"
                    value={title}
                    // use setTitle setter
                    onChange={(e) => { setTitle(e.target.value) }}
                />
            </div>
            <div className="form-group">
                <label>Add Book Cover: </label>
                <input type="text"
                    className="form-control"
                    value={cover}
                    // setter method
                    onChange={(e) => { setCover(e.target.value) }}
                />
            </div>
            <div className="form-group">
                <label>Add Book Author: </label>
                <input type="text"
                    className="form-control"
                    value={author}
                    // setter method
                    onChange={(e) => { setAuthor(e.target.value) }}
                />
            </div>
            <div>
                {/* button to trigger handleSubmit */}
                <input type="submit"
                    value="Add Book">

                </input>
            </div>
        </form>
    );
}

//this line makes <Create> tag
export default Create;