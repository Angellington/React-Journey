const Events = () => {
    const handleMyEvent = (e) => {
        console.log(e)
        alert("Cliqued!!!")
    }

    /* Funções renderizando HTML*/
    const renderSomething = (x) => {
        if(x){
            return <h1>Renderizando alog</h1>
        } else {
            return <h2>Não muito renderizado...</h2>
        }
    }

    const renderAnotherOne = (x) => {
        if(x){
            return <h1>Renderizando algo</h1>
        } else {
            return <h2>Renderizando não</h2>
        }
    }
    
    return(
    <div>
        <div>
            <button onClick={(handleMyEvent)}>Click here!!</button>

            <button onClick={() => {
                console.log(2)
            }}>Clique Aqui tbm!</button>

            <button onClick={() => console.log("Estamos adentro!")}>Clique aqui</button>
        </div>
        {/* Retornos */}
        {renderSomething(true)}
        {renderSomething(false)}
        {renderAnotherOne(false)}

    </div>
    )
}

export default Events;