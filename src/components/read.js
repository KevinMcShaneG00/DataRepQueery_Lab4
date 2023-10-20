import { useEffect, useState } from "react";
import Books from "./books";
import axios from "axios";

function Read() {

    //json object
    const [data, setData] = useState([]);


    useEffect(
        () => {
            //create http request / promise
            axios.get('https://jsonblob.com/api/jsonblob/1161593332966481920')
                .then(//when it comes back successfull
                    (response)=>{
                        setData(response.data.books)
                    }
                )
                .catch(//if it does not return successfully
                    (error)=>{
                        console.log(error);
                    }
                )
        }, []
    );

    return (
        <div>

            <h2>Hello from read component</h2>
            {/* return json object into books using variable myBooks */}
            <Books myBooks={data}></Books>
        </div>
    );

}

//create <Read> tag & import
export default Read;