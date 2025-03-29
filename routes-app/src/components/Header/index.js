import { Link } from "react-router"

export default function Header() {
    return(
        <div>
            <h2>Header da página</h2>
            <Link to="/about">About</Link>
        </div>
    )
}