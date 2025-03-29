import { Link } from "react-router"

export default function About() {
    return(
        <div>
            <h1>About React.js...</h1>
            <Link to="/" >Home</Link><br/>
            <Link to="/contact" >Contact</Link><br/>
        </div>
    )
}