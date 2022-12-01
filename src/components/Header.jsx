import "../assets/styles/Header.css"
import { Link } from 'react-router-dom';


function Header() {
    return (

        <div className='header'>
            <Link to="/" className="Title-header">
                <div >
                    <div className="container-image">
                        <img />
                    </div>
                    <h1>AchuSalud</h1>
                </div>
            </Link>


            <nav >

                <Link to="/" className="sections">
                    <a >Inicio</a>
                </Link>

                <Link to="/" className="sections">
                    <a>Dieta</a>
                </Link>

                <Link to="/Alimentos" className="sections">
                    <a>Alimento</a>
                </Link>

                <Link to="/" className="sections">
                    <a>Nutriologos</a>
                </Link>

                <Link to="/Login" className="sections">
                    <a>Iniciar sesion</a>
                </Link>


            </nav>

        </div>
    );
}

export default Header;