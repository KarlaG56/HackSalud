


function Inicio() {
    return ( 
        <div className="body-container">
            <br /><br />
            <div className="Frase">
                <img src="/img/Frase.png"/>
            </div>
            <div className="Expertos">
                <img src="/img/like.png"/>
                <br />
                <h3 className="SubTituloHome">Expertos reconocidos</h3>
                <br />
                <a className="TextoSubtitulo">Colaboramos con los más importantes medios de comunicación como expertos en nutrición. Consulta nuestras más de 400 apariciones en medios.</a>
            </div>
            <div className="Profesionales">
                <img src="/img/usuarios.png"/>
                <h3 className="SubTituloHome">Grandes profesionales a tu servicio</h3>
                <br />
                <a className="TextoSubtitulo">Un equipo de dietistas-nutricionistas, médicos endocrinos, psicólogos y coaches que trabajan para que tú consigas tus objetivos</a>
            </div>
            <div className="Pacientes">
                <img src="/img/comentarios.png"/>
                <h3 className="SubTituloHome">+9000 pacientes satisfechos</h3>
                <br />
                <a className="TextoSubtitulo">Somos expertos en nutrición con una gran experiencia. Cosulta los testimonios de nuestros pacientes.</a>
            </div>
            <div className="DietasPersonalizadas">
                <img src="/img/personas.png"/>
                <h3 className="SubTituloHome">Dietas personalizadas</h3>
                <br />
                <a className="TextoSubtitulo">Para conseguir tus objetivos de peso, salud o rendimiento deportivo, la dieta se tiene que adaptar a ti y no al revés</a>
            </div>
        </div>
     );
}

export default Inicio;