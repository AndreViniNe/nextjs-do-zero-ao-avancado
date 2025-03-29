import {BrowserRouter, Route, Routes} from 'react-router'
import Home from './pages/Home'
import About from './pages/About'
import Contact from './pages/Contact'
import Product from './pages/Product'

import Header from './components/Header'
import Error from './pages/Error'

const Routess = () => {
    return(
        <BrowserRouter>
            <Header/>
            <Routes>
                <Route exact path="/" Component={Home} />
                <Route path="/about" Component={About} />
                <Route exact path="/contact" Component={Contact} />
                <Route path="/product/:id" Component={Product} />

                <Route path="*" Component={Error} />
            </Routes>
        </BrowserRouter>
    )
}

export default Routess;
