import './post.css';
import styles from './post.module.css';
import posts from "json/posts.json";

import PostModelo from "../../components/PostModelo";
import NaoEncontrada from '../NaoEncontrada';
import PaginaPadrao from '../../components/PaginaPadrao';
import PostCard from 'components/PostCard';

import { useParams } from "react-router-dom";
import ReactMarkdown from "react-markdown";

export default function Post() {
    const parametros = useParams();

    const post = posts.find((post) => {
        return post.id === Number(parametros.id);
    })

    if (!post) {
        return (
            <NaoEncontrada />
        );
    }

    /* Filtra os posts para que não selecione o post que esta sendo visualizado e pega 4 deles para serem exibidos no final da pág.*/
    const postsRecomendados = posts
    .filter((post) => post.id !== Number(parametros.id) )
    .sort((a, b) => b.id - a.id)
    .slice(0, 4);

    console.log(postsRecomendados)
    
    return (
        <PaginaPadrao>
            <PostModelo
                fotoCapa={`/assets/posts/${post.id}/capa.png`}
                titulo={post.titulo}
            >
                <div className="post-markdown-container">
                    <ReactMarkdown>
                        {post.texto}
                    </ReactMarkdown>
                </div>

                <h2 className={styles.tituloOutrosPosts}>
                    Outros posts que você pode gostar:
                </h2>

                <ul className={styles.postsRecomendados}>
                    {postsRecomendados.map((post) => (
                        <li key={post.id}>
                            <PostCard post={post}/>
                        </li>
                    ))}
                </ul>

            </PostModelo>
        </PaginaPadrao>
    )
}