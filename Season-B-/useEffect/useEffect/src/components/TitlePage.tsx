import { useEffect, useState } from 'react'
const TitlePage = () => {

    const [title, setTitle] = useState("titulo")

    useEffect(() => {
        console.log("Título atualizado:", title);

        // Simulando uma ação quando o título é atualizado
        document.title = title;

        // Retornando uma função de limpeza (cleanup) para quando o componente for desmontado
        return () => {
            console.log("Componente desmontado, título final:", title);
            document.title = "Título original"; // Resetando o título do documento
        }
    }, [title])



  return (
    <div>
        <h1>{title}</h1>

        <form>
            <input
                type="text"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                placeholder="Digite o título"
            />
            <button type="submit" onClick={(e) => {
                e.preventDefault();
                console.log("Título atualizado:", title);
            }}>Atualizar Título</button>
        </form>

    </div>
  )
}

export default TitlePage