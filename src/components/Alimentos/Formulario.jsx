function Formulario() {
    return (
            <div className='body-Aliments'>
                <br /><br />
                <form className="container-alimentos">
                    <br/>
                    <h1 className="" >Ingredientes</h1>
                    <br />

                    <div >
                        <label id="text-register">Nombre</label>
                        <input className="place" type="text" name="nombre" id='Nombre' required/>
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

                    <button className="button-register" >Registrarse</button>
                    <br /><br />
                </form>
                <br/><br /><br />
            </div>
     

    );

}

export default Formulario;