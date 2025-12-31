import styles from './Home.module.css'

import { useNavigate, Link } from 'react-router-dom'
import { useState } from 'react'


const Home = () => {
  const [query, setQuery] = useState("")
  const [posts] = useState([])
  const handleSubmit = (e) => {
    e.preventDefault()
  }
  return (
    <div className={styles.home}>
      <h2>Veja os nossos posts mais recentes</h2>
      <form onSubmit={handleSubmit} className={styles.search_form}>
        <input type="text" placeholder='Ou busque por tags' />
        <button className='btn.btn_dark' onChange={(e) => setQuery(e.target.value)} value={query}>Pesquisar</button>
      </form>
      <div>
          <h3>Posts...</h3>
          {posts && posts.length === 0 && (
            <div className={styles.noposts}>
              <p>Não foram encontrados posts</p>
              <Link to="posts/create" className="btn">Criar primeiro post</Link>
            </div>
          )}
      </div>
    </div>
  )
}

export default Home