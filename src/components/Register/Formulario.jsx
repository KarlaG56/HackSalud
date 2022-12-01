

function Formulario() {
    return (
            <div className='body'>
                <br /><br />
                <form className="container-register">
                    <br/><br/>
                    <h1 className="title-register" >Registro</h1>
                    <br />

                    <div >
                        <label id="text-register">Nombre</label>
                        <input className="place" type="text" name="nombre" id='Nombre' required/>
                    </div>

                    <div >
                        <label id="text-register">Edad</label>
                        <input className="place" type="text" name="edad" id='edad' required/>
                    </div>

                    <div >
                        <label id="text-register">Genero</label>
                        <input className="place" type="text" name="genero" id='genero' required/>
                    </div>

                    <div >
                        <label id="text-register">Correo electronico</label>
                        <input className="place" type="email" name="email" id='email' required/>
                    </div>

                    <div >
                        <label id="text-register">Contraseña</label>
                        <input className="place" type="password" name="password" id='password_Login' required/>
                    </div>

                    <div >
                        <label id="text-register">Confirmar contraseña</label>
                        <input className="place" type="password" name="cpassword" id='cpassword' required/>
                    </div>

                    <div >
                        <label id="text-register">Peso</label>
                        <input className="place" type="text" name="weight" id='weight' required/>
                    </div>

                    <div >
                        <label id="text-register">Altura</label>
                        <input className="place" type="text" name="height" id='height' required/>
                    </div>
                    <br/>

                    <button className="button-register" >Registrarse</button>
                </form>
            </div>
     

    );

}

export default Formulario;