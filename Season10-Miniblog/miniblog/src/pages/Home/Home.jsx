import styles from "./Home.module.css";

import { useNavigate, Link } from "react-router-dom";
import { useState } from "react";
import { useFetchDocuments } from "../../hooks/useFetchDocuments";
import PostDetail from "../../components/PostDetail";

const Home = () => {
  const [query, setQuery] = useState("");
  const navigate = useNavigate();
  const { documents: posts, loading } = useFetchDocuments("posts");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (query) {
      return navigate(`/search?q=${query}`);
    }
  };

  return (
    <div className={styles.home}>
      <h2>Veja os nossos posts mais recentes</h2>
      <form onSubmit={handleSubmit} className={styles.search_form}>
        <input
          type="text"
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Ou busque por tags"
        />
        <button className="btn.btn_dark" value={query}>
          Pesquisar
        </button>
      </form>
      <div>
        {loading && <p>Carregando...</p>}
        {posts && posts.map((post) => <PostDetail key={post.id} post={post} />)}
      </div>
    </div>
  );
};

export default Home;
