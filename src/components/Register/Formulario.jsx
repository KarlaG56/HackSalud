import {useRef} from "react"

function Formulario() {
const form = useRef(null);

    const handleSubmit = () =>{
        const formData = new FormData(form.current);
        fetch("http://localhost:8080/user",
        {
            method: "POST",
            headers: {
                "Accept": "application/json",
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                "name": formData.get("name"),
                "age": formData.get("age"),
                "gender": formData.get("gender"),
                "email": formData.get("email"),
                "password": formData.get("password"),
                "weight": formData.get("weight"),
                "height": formData.get("height"),
            })
        })
    }

    return (
            <div className='body'>
                <br /><br />
                <form className="container-register" onSubmit={handleSubmit} ref={form}>
                    <br/><br/>
                    <h1 className="title-register" >Registro</h1>
                    <br />

                    <div >
                        <label id="text-register">Nombre</label>
                        <input className="place" type="text" name="nombre" id='Nombre' value="name" required/>
                    </div>

                    <div >
                        <label id="text-register">Edad</label>
                        <input className="place" type="text" name="edad" id='edad' value="age"required/>
                    </div>

                    <div >
                        <label id="text-register">Genero</label>
                        <input className="place" type="text" name="genero" id='genero' value="gender" required/>
                    </div>

                    <div >
                        <label id="text-register">Correo electronico</label>
                        <input className="place" type="email" name="email" id='email' value="email" required/>
                    </div>

                    <div >
                        <label id="text-register">Contraseña</label>
                        <input className="place" type="password" name="password" id='password_Login' value="password" required/>
                    </div>

                    <div >
                        <label id="text-register">Confirmar contraseña</label>
                        <input className="place" type="password" name="cpassword" id='cpassword' required/>
                    </div>

                    <div >
                        <label id="text-register">Peso</label>
                        <input className="place" type="text" name="weight" id='weight' value="weight" required/>
                    </div>

                    <div >
                        <label id="text-register">Altura</label>
                        <input className="place" type="text" name="height" id='height' value="height" required/>
                    </div>
                    <br/>

                    <button className="button-register" >Registrarse</button>
                </form>
            </div>
     

    );

}

export default Formulario;