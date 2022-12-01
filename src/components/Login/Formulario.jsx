import { Link } from 'react-router-dom';
import {useRef} from "react"

function Formulario() {
    const form = useRef();
    const handleSubmit = () =>{
        const formData = new FormData();
    fetch("http://localhost:8080/user/validate",
        {
            method: "POST",
            headers: {
                "Accept": "application/json",
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                "email": formData.get("email"),
                "password": formData.get("password")
            })
        })
    }
    
    return (
            <div className='body'>
                <br /><br />
                <form className="container-Login" ref={form}>
                    <br/><br/>
                    <h1 className="title-register" >Iniciar sesion</h1>
                    <br />

                    <div >
                        <label id="text-register">Correo electronico</label>
                        <input className="place" type="email" name="email" id='email' value="email" required/>
                    </div>

                    <div >
                        <label id="text-register">Contraseña</label>
                        <input className="place" type="password" name="password" id='password_Login' value="password" required/>
                    </div>
                    <br />
                    <Link to="/"><button className="button-Login" onSubmit={handleSubmit} >Iniciar sesion</button></Link>

                    
                    <br/>
                    <Link to="/Registro"> <button className="button-register2" >Registrarse</button></Link>
                </form>
            </div>
     

    );

}

export default Formulario;