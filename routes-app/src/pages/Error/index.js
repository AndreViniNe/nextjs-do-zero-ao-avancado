import { Link } from "react-router"

export default function Error() {
    return(
        <div>
            <h1>404 - Not Found</h1>
            <span>Links úteis:</span><br/>
            <Link to="/">Home</Link><br/>
            <Link to="/about">About</Link><br/>
            <Link to="/contact">Contacts</Link><br/>
        </div>
    )
}