import {Link} from 'react-router'

export default function Home() {
    return(
        <div>
            <h1>Welcome to home!</h1>
            <Link to="/about" >About</Link><br/>
            <Link to="/contact" >Contact</Link><br/>
            <Link to="/product" >Product</Link><br/>          
        </div>
    )
}
