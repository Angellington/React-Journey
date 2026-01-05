import styles from "./EditPost.module.css";

import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useAuthValue } from "../../context/AuthContext";

import { useFetchDocument } from '../../hooks/useFetchDocument';
import { useUpdateDocument } from "../../hooks/useUpdateDocument";

const EditPost = () => {
  const { id } = useParams();
  const {document: post} = useFetchDocument("posts", id)
  const [title, setTitle] = useState("");
  const [image, setImage] = useState("");
  const [body, setBody] = useState("");
  const [tags, setTags] = useState("");
  const [formError, setFormError] = useState("");


  const navigate = useNavigate();

  const {user} = useAuthValue()


const { updateDocument, response } = useUpdateDocument("posts");

useEffect(() => {
  if (!post) return;

  setTitle(post.title);
  setBody(post.body);
  setImage(post.image);

  const textTags = post.tagsArray.join(",");
  setTags(textTags);

}, [post]);


const handleSubmit = (e) => {
  e.preventDefault();
  setFormError("");

  let error = "";

  try {
    new URL(image);
  } catch {
    error = "A imagem precisa ser uma URL válida.";
  }

  const tagsArray = tags.split(",").map((tag) => tag.trim().toLowerCase())

  if(!title || !image || !tags || !body){
    setFormError("Por favor, preencha todos os campos!")
  }

  if (error) {
    setFormError(error);
    return;
  }

  const data = {
    title,
    image, 
    body,
    tagsArray,
    createdBy: user.displayName
  }

  updateDocument(id, data);
  navigate("/dashboard")
};


  return (
    <div className={styles.edit_post}>
   {post && (
    <>
       <h2>Editar post</h2>
      <p>Altere os dados do post como desejar</p>
      <form onSubmit={handleSubmit}>
        <label>
          <span>Título: </span>
          <input
            type="text"
            name="title"
            required
            placeholder="Pense num bom título..."
            onChange={(e) => setTitle(e.target.value)}
            value={title}
          />
        </label>
        <label>
          <span>URL da imagem: </span>
          <input
            type="text"
            name="image"
            required
            placeholder="Insira uma imagem que represente o seu post"
            onChange={(e) => setImage(e.target.value)}
            value={image}
          />
        </label>
        <p className={styles.preview_title}>Preview da classe atual</p>
        <img className={styles.image_preview} src={post.image} alt={post.title} />
        <label>
          <span>Conteúdo: </span>
          <textarea
            name="body"
            required
            placeholder="Insira o conteúdo do post"
            onChange={(e) => setBody(e.target.value)}
            value={body}
          />
        </label>
        <label>
          <span>Tags: </span>
          <input
            type="text"
            name="tags"
            required
            placeholder="Insira as tags separadas por vírgulas"
            onChange={(e) => setTags(e.target.value)}
            value={tags}
          />
        </label>
           {!response.loading && <button className="btn" type="submit">Editar</button>}
        {response.loading && <button className="btn" disabled>Aguarde...</button>}
        {response.error && (
            <p className="error">{response.error}</p>
        )}
        {formError && (
            <p className="error">{formError}</p>
        )}
      </form>
      </>
   )}
    </div>
  );
};  

export default EditPost;
