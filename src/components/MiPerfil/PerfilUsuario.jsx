function PerfilUsuario() {

    return (
        <div className='body-containerUsuarioPerfil'>
                <br /><br />
                <form className="container-Perfil-Usuario">
                    <h1 className="title-MiPerfil" >Mi perfil</h1>
                    <div className="user-miperfil">

                    </div>
                    <br />

                    <div >
                        <label id="text-MiPerfil">Nombre:</label>
                        <input className="place-miperfil" type="text" name="nombre" id='nombre_perfil' required value="Carmen Anel Vilca Mamani"/>
                    </div>

                    <div >
                        <label id="text-MiPerfil">Edad:</label>
                        <input className="place-miperfil" type="text" name="edad" id='edad_perfil' required value="19"/>
                    </div>

                    <div >
                        <label id="text-MiPerfil">Género:</label>
                        <input className="place-miperfil" type="text" name="genero" id='genero_perfil' required value="Femenino"/>
                    </div>

                    <div >
                        <label id="text-MiPerfil">Correo electrónico:</label>
                        <input className="place-miperfil" type="email" name="email" id='email_perfil' required value="213378@ids.upchiapas.edu.mx"/>
                    </div>

                    <div >
                        <label id="text-MiPerfil">Altura:</label>
                        <input className="place-miperfil" type="txt" name="altura" id='altura_perfil' required value="1.60"/>
                    </div>

                    <div >
                        <label id="text-MiPerfil">Peso:</label>
                        <input className="place-miperfil" type="txt" name="peso" id='peso_perfil' required value="61 Kg"/>
                    </div>

                </form>
            </div>
  
    )
  }
  
  export default PerfilUsuario;