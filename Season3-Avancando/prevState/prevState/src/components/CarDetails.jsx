const CarDetails = ({brand, model, year, color, plate, price, newCar}) => {
    return (
        <div>
            <h2>Detalhese do Carro</h2>
            <ul>
                <li>Marca: {brand}</li>
                <li>Modelo: {model}</li>
                <li>Ano: {year}</li>
                <li>Cor: {color}</li>
                <li>Placa: {plate}</li>
                <li>Preço: {price}</li>
            </ul>
            {newCar && <p>Este é um carro novo!</p>}
        </div>
    )
}

export default CarDetails