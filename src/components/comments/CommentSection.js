import { useSelector } from 'react-redux';
import Commentz from './comment';
import { selectComments } from '../../redux/comments/commentsSlice';


const CommentSection = ( props ) => {
  const { postKey, comments } = props
  const commentsState = useSelector(selectComments)


    return (
        <>
          {comments.length > 0 ? (comments.map((comment) => (
            <Commentz
              key={comment.id}
              pp={comment.owner.picture}
              posted={`${comment.owner.firstName} ${comment.owner.lastName}`}
              message={comment.message}
              time={comment.publishDate}
            />
            ))
          ) : (
            <p className='-mt-2 mx-auto text-sm font-small'>So empty :-0 be the first to write a comment</p>
          )}
        </>
      );
}

export default CommentSection;

