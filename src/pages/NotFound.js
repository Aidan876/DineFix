import { Link } from "react-router-dom";
import "../styles/NotFound.css";

const NotFound =() =>{
    return(
        <div className="not-found">
            <div className="message">
            <h2>Sorry</h2>
            <p>That page cannot be found</p>
            <Link to="/" className="l">Back to the homepage</Link>
            </div>
        </div>
    );

}

export default NotFound;