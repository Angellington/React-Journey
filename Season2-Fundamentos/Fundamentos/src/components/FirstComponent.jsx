// Arquivos de estilo

const FirstComponent = () => {

    // A função faz isso, cria um texto.

    return (
        // O que a função retorna é um JSX.

        <div>
            <h1>My first component</h1>
        </div>
    );
};

export default FirstComponent;

const SecondComponent = () => {

    return (
        <table>
            <thead>
                <tr>
                    <th>Column 1</th>
                    <th>Column 2</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>1</td>
                    <td>2</td>
                </tr>
                <tr>
                    <td>3</td>
                    <td>4</td>
                </tr>
            </tbody>           
        </table>
    );
};

export { SecondComponent };


const ThirdComponent = () => {

    return (
        <form action="#">
            <label htmlFor="name">Name:</label>
            <input type="text" id="name" name="name" />
            <label htmlFor="email">Email:</label>
            <input type="email" id="email" name="email" />
            <label htmlFor="message">Message:</label>
            <textarea id="message" name="message"></textarea>
            <button type="submit">Submit</button>
        </form>
    )
}

export { ThirdComponent };