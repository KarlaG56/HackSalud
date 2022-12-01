import "../assets/styles/Header.css"
import { Link } from 'react-router-dom';


function Header() {
    return (
        
        <div className='header'>
            <Link to="/">
            <div className="Title-header">
                <h1>AchuSalud</h1>
            </div>
            </Link>
            
           
            <nav >
                <a href="">Iniciar sesion</a>
                <a href="">Sobre nosotros</a>
                <a href="">Blog</a>
            </nav>

        </div>
    );
}

export default Header;