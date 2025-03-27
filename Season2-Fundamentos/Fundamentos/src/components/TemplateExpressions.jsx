const TemplateExpressions = () => {

    const name = 'Minerva'
    const arma = {
        nome: 'Zimbra',
        calibre: '52'   
    }

    return (
        <div>
            <h2>O seu nome é... {name}</h2>
            {console.log(name)}
            <h4>{arma.nome + arma.calibre}</h4>
        </div>
    )
}

export default TemplateExpressions;