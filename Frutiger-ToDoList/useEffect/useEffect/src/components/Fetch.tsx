import { useState, useEffect } from 'react';

const Fetch = () => {
    const [value, setValue] = useState(1);
    const [data, setData] = useState(null);

    // Função de fetch
    const fetchData = async () => {
        try {
            const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${value}`);
            if (!response.ok) {
                throw new Error("Network response was not ok");
            }
            const json = await response.json();
            setData(json);
        } catch (error) {
            console.error("Fetch error:", error);
            setData(null);
        }
    };

    // Faz fetch sempre que 'value' mudar
    useEffect(() => {
        if (value) {
            fetchData();
        } else {
            setData(null);
        }
    }, [value]);

    // Intervalo que incrementa 'value'
    useEffect(() => {
        const interval = setInterval(() => {
            setValue(prev => prev + 1);
        }, 100); // incrementa a cada 1s

        return () => clearInterval(interval); // limpa intervalo ao desmontar
    }, []);

    return (
        <div>
            <h3>Fetch Automático</h3>
            <p>O id aumenta a cada segundo e o fetch é feito automaticamente</p>
            <div>
                <input type="text" value={value} onChange={(e) => setValue(Number(e.target.value))} />
            </div>
            <div>
                {data && (
                    <>
                        <h4>{data.title}</h4>
                        <p>{data.body}</p>
                    </>
                )}
            </div>
        </div>
    );
};

export default Fetch;
