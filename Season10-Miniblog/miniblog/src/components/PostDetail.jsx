import { Link } from 'react-router-dom'
import styles from './PostDetail.module.css'

const PostDetail = (post) => {

  return (
    <div className={styles.post_detail}>
        <img src={post.post.image} alt={post.post.title} />
        <h2>{post.post.title}</h2>
        <p className={styles.createdBy}>{post.post.createdBy}</p>
        <div>
            {post.post.tagsArray.map((tag) => (
                <p key={tag} className={styles.tags}><span>#</span>{tag}</p>
            ))}
        </div>
        <Link to={`/post/${post.post.id}`} className="btn btn-outline">Ler</Link>
    </div>
  )
}

export default PostDetail