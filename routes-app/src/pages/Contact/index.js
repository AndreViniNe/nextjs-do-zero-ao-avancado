import { Link } from "react-router"

export default function Contact() {
    return(
        <div>
            <h1>Contacts!</h1>
            <span>Email: andrevinivande123 (12)123441412</span><br/>
            <Link to="/" >Home</Link><br/>
            <Link to="/about" >About</Link><br/>
        </div>
    )
}