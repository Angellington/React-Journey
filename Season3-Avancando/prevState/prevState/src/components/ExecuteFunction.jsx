const ExecuteFunction = ({ myFunction }) => {
    return (
        <div>
            <h2>My Function via props</h2>
            <button onClick={myFunction}>Executar função</button>
        </div>
    )
}

export default ExecuteFunction