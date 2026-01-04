import { useParams } from 'react-router-dom'
import style from './Post.module.css'
import { useFetchDocument } from '../../hooks/useFetchDocument';

//hooks

const Post = () => {
    const { id } = useParams();
    const { document: post, loading} = useFetchDocument("posts", id)

  return (
    <div className={style.post_container}>
        {loading && <p>Carregando post...</p>}
        {post && (
            <>
                <h1>{post.title}</h1>
                <img src={post.image} alt={post.tile} />
                <p>{post.body}</p>
                <h3>Este post se trata sobre:</h3>
                {post.tagsArray.map((tag) => (
                    <div className={style.tags}>
                        <p key={tag}>
                            <span>#</span>
                            {tag}
                        </p>
                    </div>
                ))}

            </>
        )}
    </div>
  )
}

export default Post