const Container = ({ children, myValue }) => {
    return (
        <div>
            <h2>Este título é um container</h2>
            {children}
        </div>
    )
}

export default Container