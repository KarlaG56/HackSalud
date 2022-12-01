function Formulario() {
    return (
        <div className='body-Aliments'>
            <br /><br />
            <form className="container-alimentos">
                <br />
                <h1 className="" >Ingredientes</h1>
                <br />

                <div >
                    <div id="div-text">
                        <label id="text-aliment">Nombre</label>
                        <label id="text-aliment2">Gramos</label>
                    </div>
                    <div id="div-input">
                    <input id="text-aliment" type="text" name="nombre"  required />
                    <input id="text-aliment2" type="text" name="gramos"  required />
                    </div>
                </div>

                <div >
                    <div id="div-text">
                        <label id="text-aliment">Nombre</label>
                        <label id="text-aliment2">Gramos</label>
                    </div>
                    <div id="div-input">
                    <input id="text-aliment" type="text" name="nombre"  required />
                    <input id="text-aliment2" type="text" name="gramos"  required />
                    </div>
                </div>

                <div >
                    <div id="div-text">
                        <label id="text-aliment">Nombre</label>
                        <label id="text-aliment2">Gramos</label>
                    </div>
                    <div id="div-input">
                    <input id="text-aliment" type="text" name="nombre"  required />
                    <input id="text-aliment2" type="text" name="gramos"  required />
                    </div>
                </div>

                <button className="button-more" >+</button>
                <button className="button-aliment" >Calcular</button>
                <br /><br />
            </form>
            <br /><br /><br />
        </div>


    );

}

export default Formulario;