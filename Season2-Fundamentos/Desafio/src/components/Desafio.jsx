const Desafio = () => {
    const HandleSubmit = (e) => {
        e.preventDefault();

        // Captura os valores
        const n1 = parseFloat(document.getElementById('n1').value);
        const n2 = parseFloat(document.getElementById('n2').value);

        // Funcionamento
        const value = n1 + n2;

        

        // Mostrar o resultado
        return console.log(`O valor é ${value}`)

    }


    return (
        <div>
            <form onSubmit={HandleSubmit}>
                <label htmlFor="n1">Número 1</label>
                <input type="text" id="n1" required/>

                <label htmlFor="n2">Número 2</label>
                <input type="text" id="n2" required/>

                <input type="submit" />
            </form>
        </div>
    )
};



export default Desafio;