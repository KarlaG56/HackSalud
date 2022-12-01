import React from 'react';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import DialogContentText from '@material-ui/core/DialogContentText';
import Dialog from '@material-ui/core/Dialog';
import Button from '@material-ui/core/Button';


function Inicio() {
    const [open, setOpen]=React.useState(false);
    const handleOpen = () =>{
        setOpen(true);
    }

    const handleClose = () =>{
        setOpen(false);
    }

    return (
        <div className="body-container">
            <br /><br />
            <div className="Frase">
                <img src="/img/Frase.png" />
            </div>
            <div className="Users">
                <div className="Expertos">
                    <img src="/img/like.png" />
                    <br />
                    <h3 className="SubTituloHome">Expertos reconocidos</h3>
                    <br />
                    <a className="TextoSubtitulo">Colaboramos con los más importantes medios de comunicación como expertos en nutrición. Consulta nuestras más de 400 apariciones en medios.</a>
                </div>
                <div className="Profesionales">
                    <img src="/img/usuarios.png" />
                    <h3 className="SubTituloHome">Grandes profesionales a tu servicio</h3>
                    <br />
                    <a className="TextoSubtitulo">Un equipo de dietistas-nutricionistas, médicos endocrinos, psicólogos y coaches que trabajan para que tú consigas tus objetivos</a>
                </div>
                <div className="Pacientes">
                    <img src="/img/comentarios.png" />
                    <h3 className="SubTituloHome">+9000 pacientes satisfechos</h3>
                    <br />
                    <a className="TextoSubtitulo">Somos expertos en nutrición con una gran experiencia. Cosulta los testimonios de nuestros pacientes.</a>
                </div>
                <div className="DietasPersonalizadas">
                    <img src="/img/personas.png" />
                    <h3 className="SubTituloHome">Dietas personalizadas</h3>
                    <br />
                    <a className="TextoSubtitulo">Para conseguir tus objetivos de peso, salud o rendimiento deportivo, la dieta se tiene que adaptar a ti y no al revés</a>
                </div>
            </div>

            <button className="button-home" onClick={handleOpen}>Iniciar dia</button>
            <Dialog open={open} onClose={handleClose}>
                <DialogTitle>¿Como sientes el clima?</DialogTitle>
                <DialogActions>
                    <button onClick={
                        ()=>{
                            handleClose();
                        }
                    }>Calido</button>
                    <button onClick={() => {
                        handleClose();
                    }}>Frio</button>
                </DialogActions>
            </Dialog>
        </div>
    );
}

export default Inicio;