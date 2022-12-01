import { Link } from 'react-router-dom';

function Formulario() {
    return (
            <div className='body'>
                <br /><br />
                <form className="container-register">
                    <h1 className="title-register" >Iniciar sesion</h1>
                    <br />

                    <div >
                        <label id="text-register">Correo electronico</label>
                        <input className="place" type="email" name="email" id='email' required/>
                    </div>

                    <div >
                        <label id="text-register">Contraseña</label>
                        <input className="place" type="password" name="password" id='password_Login' required/>
                    </div>
                    <Link to="/"><button className="button-Login" >Iniciar sesion</button></Link>

                    
                    <br/>
                    <Link to="/Register"> <button className="button-register2" >Registrarse</button></Link>
                </form>
            </div>
     

    );

}

export default Formulario;