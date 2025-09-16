import { useState } from "react";
import "./MyForms.css";
const MyForms = ({ user }) => {
  // Controlled inputs

  //Gerenciamento de dados;
  const [name, setName] = useState(user ? user.name : '');
  const [email, setEmail] = useState(user ? user.email : '');
  const [bio, setBio] = useState(user ? user.bio : '')
  const [role, setRole] = useState(user ? user.role : '');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Enviando o form...')
    console.log(name, email, bio, role)
    {/* Limpando o formulário */}
    setName("");
    setEmail("");
    setBio("");
    setRole("");
  }





  return (
    <div>
      {/* Envio de form */}
      {/* Criar form */}
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Nome:</label>
          <input
            type="text"
            name="name"
            placeholder="Digite o seu nome"
            onChange={(e) => setName(e.target.value)}
            value={name}
          />
        </div>
        {/*Label envolvendo o input */}
        <label>
          <span>Email</span>
          <input
            type="email"
            name="email"
            placeholder="Digite o seu Email"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
          ></input>
        </label>
        {/* Textarea */}
        <label>
          <span>Bio: </span>
          <textarea name="bio" placeholder="Descrição do usuário" onChange={(e) => setBio(e.target.value)} value={bio}>

          </textarea>
        </label>

        {/* Select */}
        <label>
          <span>Função no Sistema</span>
          <select name="role" onChange={(e) => setRole(e.target.value)} value={role}>
            <option value="user">Usuário</option>
            <option value="administrador">Administrador</option>
            <option value="editor">Editor</option>
          </select>
        </label>

        <input type="submit" value="enviar" />
      </form>
    </div>
  );
};

export default MyForms;
