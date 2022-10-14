import styles from './Comment.module.css';
import { ThumbsUp, Trash } from 'phosphor-react';
import { Avatar } from './Avatar';
import { useState } from 'react';

interface CommentProps {
  content: string,
  onDeleteComment: (comment: string) =>void,

}

export function Comment({ content, onDeleteComment }: CommentProps) {
  const [likeCount, setLikeCount] = useState(0);

  function handleDeleteComment() {
    onDeleteComment(content);
  }

  function handleLikeComment() {
    setLikeCount((state) => {
      return state + 1
    });
  }



    return (
      <div className={styles.comment}>
        <Avatar hasBorder={false} src="https://github.com/oEduardBarbosa.png" alt=""/>

        <div className={styles.commentBox}>
          <div className={styles.commentContent}>
            <header>
              <div className={styles.authorAndTime}>
                <strong>Eduard Barbosa</strong>
                <time title="Publicado 11 de maio as 21:00" dateTime="2022-05-11 21:00:00">Cerca de 1h atrás</time>
              </div>

              <button onClick={handleDeleteComment} title="Deletar comentário">
                <Trash size={24} />
              </button>
            </header>

            <p>{content}</p>
          </div>

          <footer>
            <button onClick={handleLikeComment}>
              <ThumbsUp />
              Aplaudir <span>{likeCount}</span>
            </button>
          </footer>
        </div>


      </div>
 );

    
}
